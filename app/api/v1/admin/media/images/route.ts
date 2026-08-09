import { requireLandingManager } from "@/lib/api/authorization";
import { apiError, apiSuccess, internalServerError } from "@/lib/api/response";
import { prisma } from "@/lib/prisma";
import {
  ImageUploadError,
  removeStoredLandingImage,
  storeLandingImage,
} from "@/lib/storage/image-storage";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const access = await requireLandingManager();
  if (access.response) return access.response;

  let stored: Awaited<ReturnType<typeof storeLandingImage>> | null = null;

  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const altTextValue = formData.get("altText");

    if (!(file instanceof File)) {
      return apiError("An image file is required.", 422, "IMAGE_REQUIRED");
    }

    stored = await storeLandingImage(file);
    const media = await prisma.mediaAsset.create({
      data: {
        type: "IMAGE",
        ...stored,
        altText:
          typeof altTextValue === "string"
            ? altTextValue.trim().slice(0, 300) || null
            : null,
        uploadedById: access.user.id,
      },
    });

    return apiSuccess(media, { status: 201 });
  } catch (error) {
    if (stored) {
      await removeStoredLandingImage(stored.storageKey).catch((cleanupError) => {
        console.error("Failed to clean up an orphaned image upload.", cleanupError);
      });
    }
    if (error instanceof ImageUploadError) {
      return apiError(error.message, 422, error.code);
    }
    return internalServerError(error);
  }
}
