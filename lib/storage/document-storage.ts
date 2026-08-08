import "server-only";

import { randomUUID } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const MAX_DOCUMENT_SIZE = 30 * 1024 * 1024;
const uploadDirectory = path.join(process.cwd(), "public", "uploads", "publications");

export class DocumentUploadError extends Error {
  constructor(
    message: string,
    public readonly code: string,
  ) {
    super(message);
  }
}

export async function storePublicationDocument(file: File) {
  if (!file.size) throw new DocumentUploadError("The PDF file is empty.", "EMPTY_FILE");
  if (file.size > MAX_DOCUMENT_SIZE) {
    throw new DocumentUploadError("PDF files must be 30 MB or smaller.", "FILE_TOO_LARGE");
  }
  if (file.type !== "application/pdf") {
    throw new DocumentUploadError("Only PDF documents are supported.", "UNSUPPORTED_DOCUMENT_TYPE");
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  if (buffer.length < 5 || buffer.subarray(0, 5).toString("ascii") !== "%PDF-") {
    throw new DocumentUploadError("The file is not a valid PDF document.", "INVALID_DOCUMENT_CONTENT");
  }

  const filename = `${randomUUID()}.pdf`;
  await mkdir(uploadDirectory, { recursive: true });
  await writeFile(path.join(uploadDirectory, filename), buffer, { flag: "wx" });

  return {
    filename,
    originalName: file.name.slice(0, 255),
    mimeType: "application/pdf",
    size: file.size,
    url: `/uploads/publications/${filename}`,
    storageKey: `local:publications/${filename}`,
  };
}
