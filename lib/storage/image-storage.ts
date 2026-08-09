import "server-only";

import { mkdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";

const MAX_IMAGE_SIZE = 8 * 1024 * 1024;
const uploadDirectory = path.join(process.cwd(), "public", "uploads", "landing");

const imageTypes = {
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/avif": "avif",
} as const;

function detectImageMime(buffer: Buffer) {
  if (buffer.length >= 3 && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) {
    return "image/jpeg";
  }
  if (
    buffer.length >= 8 &&
    buffer.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
  ) {
    return "image/png";
  }
  if (buffer.length >= 6 && ["GIF87a", "GIF89a"].includes(buffer.subarray(0, 6).toString("ascii"))) {
    return "image/gif";
  }
  if (
    buffer.length >= 12 &&
    buffer.subarray(0, 4).toString("ascii") === "RIFF" &&
    buffer.subarray(8, 12).toString("ascii") === "WEBP"
  ) {
    return "image/webp";
  }
  if (
    buffer.length >= 16 &&
    buffer.subarray(4, 8).toString("ascii") === "ftyp" &&
    /avif|avis/.test(buffer.subarray(8, 32).toString("ascii"))
  ) {
    return "image/avif";
  }
  return null;
}

export class ImageUploadError extends Error {
  constructor(
    message: string,
    public readonly code: string,
  ) {
    super(message);
  }
}

export async function storeLandingImage(file: File) {
  if (!file.size) throw new ImageUploadError("The image file is empty.", "EMPTY_FILE");
  if (file.size > MAX_IMAGE_SIZE) {
    throw new ImageUploadError("Images must be 8 MB or smaller.", "FILE_TOO_LARGE");
  }
  if (!(file.type in imageTypes)) {
    throw new ImageUploadError(
      "Only JPEG, PNG, WebP, GIF, and AVIF images are supported.",
      "UNSUPPORTED_IMAGE_TYPE",
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const detectedMime = detectImageMime(buffer);
  if (!detectedMime || detectedMime !== file.type) {
    throw new ImageUploadError(
      "The file content does not match its image type.",
      "INVALID_IMAGE_CONTENT",
    );
  }

  const extension = imageTypes[detectedMime as keyof typeof imageTypes];
  const filename = `${randomUUID()}.${extension}`;
  await mkdir(uploadDirectory, { recursive: true });
  await writeFile(path.join(uploadDirectory, filename), buffer, { flag: "wx" });

  return {
    filename,
    originalName: file.name.slice(0, 255),
    mimeType: detectedMime,
    size: file.size,
    url: `/uploads/landing/${filename}`,
    storageKey: `local:landing/${filename}`,
  };
}

export async function removeStoredLandingImage(storageKey: string) {
  const prefix = "local:landing/";
  if (!storageKey.startsWith(prefix)) return;

  const filename = storageKey.slice(prefix.length);
  if (!filename || path.basename(filename) !== filename) return;

  const target = path.resolve(uploadDirectory, filename);
  const root = `${path.resolve(uploadDirectory)}${path.sep}`;
  if (!target.startsWith(root)) return;

  await unlink(target).catch((error: NodeJS.ErrnoException) => {
    if (error.code !== "ENOENT") throw error;
  });
}
