import { requireLandingManager } from "@/lib/api/authorization";
import {
  apiSuccess,
  internalServerError,
  readJson,
  validationError,
} from "@/lib/api/response";
import { prisma } from "@/lib/prisma";
import { attachLandingMediaSchema } from "@/lib/validation/media";

export async function PUT(request: Request) {
  const access = await requireLandingManager();
  if (access.response) return access.response;

  const body = await readJson(request);
  if (body.error) return body.error;
  const parsed = attachLandingMediaSchema.safeParse(body.data);
  if (!parsed.success) return validationError(parsed.error);

  const { mediaId, targetId, targetType } = parsed.data;

  try {
    const media = await prisma.mediaAsset.findFirstOrThrow({
      where: {
        id: mediaId,
        type: targetType === "publicationFile" ? "DOCUMENT" : "IMAGE",
      },
    });

    switch (targetType) {
      case "section":
        await prisma.landingSection.update({
          where: { id: targetId },
          data: { backgroundImageId: media.id },
        });
        break;
      case "slide":
        await prisma.heroSlide.update({
          where: { id: targetId },
          data: { imageId: media.id },
        });
        break;
      case "item":
        await prisma.landingSectionItem.update({
          where: { id: targetId },
          data: { imageId: media.id },
        });
        break;
      case "news":
        await prisma.newsArticle.update({
          where: { id: targetId },
          data: { coverImageId: media.id },
        });
        break;
      case "publication":
        await prisma.publication.update({
          where: { id: targetId },
          data: { coverImageId: media.id },
        });
        break;
      case "publicationFile":
        await prisma.publication.update({
          where: { id: targetId },
          data: { fileAssetId: media.id },
        });
        break;
      case "partner":
        await prisma.partner.update({
          where: { id: targetId },
          data: { logoId: media.id },
        });
        break;
    }

    return apiSuccess({ media, targetId, targetType });
  } catch (error) {
    return internalServerError(error);
  }
}
