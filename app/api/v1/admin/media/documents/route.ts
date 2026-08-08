import { requireLandingManager } from "@/lib/api/authorization";
import { apiError, apiSuccess, internalServerError } from "@/lib/api/response";
import { prisma } from "@/lib/prisma";
import {
  DocumentUploadError,
  storePublicationDocument,
} from "@/lib/storage/document-storage";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const access = await requireLandingManager();
  if (access.response) return access.response;

  try {
    const formData = await request.formData();
    const file = formData.get("file");
    if (!(file instanceof File)) {
      return apiError("A PDF file is required.", 422, "DOCUMENT_REQUIRED");
    }

    const stored = await storePublicationDocument(file);
    const media = await prisma.mediaAsset.create({
      data: {
        type: "DOCUMENT",
        ...stored,
        uploadedById: access.user.id,
      },
    });
    return apiSuccess(media, { status: 201 });
  } catch (error) {
    if (error instanceof DocumentUploadError) {
      return apiError(error.message, 422, error.code);
    }
    return internalServerError(error);
  }
}
