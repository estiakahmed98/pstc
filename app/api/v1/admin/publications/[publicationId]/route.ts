import { requireLandingManager } from "@/lib/api/authorization";
import {
  apiSuccess,
  internalServerError,
  readJson,
  validationError,
} from "@/lib/api/response";
import { prisma } from "@/lib/prisma";
import { updatePublicationSchema } from "@/lib/validation/publication";

type RouteContext = { params: Promise<{ publicationId: string }> };

export async function PATCH(request: Request, context: RouteContext) {
  const access = await requireLandingManager();
  if (access.response) return access.response;
  const { publicationId } = await context.params;
  const body = await readJson(request);
  if (body.error) return body.error;
  const parsed = updatePublicationSchema.safeParse(body.data);
  if (!parsed.success) return validationError(parsed.error);

  try {
    const { publishedAt, ...input } = parsed.data;
    const publication = await prisma.publication.update({
      where: { id: publicationId },
      data: {
        ...input,
        publishedAt:
          publishedAt === undefined
            ? undefined
            : publishedAt
              ? new Date(publishedAt)
              : null,
      },
      include: { coverImage: true, fileAsset: true },
    });
    return apiSuccess(publication);
  } catch (error) {
    return internalServerError(error);
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  const access = await requireLandingManager();
  if (access.response) return access.response;
  const { publicationId } = await context.params;
  try {
    await prisma.publication.delete({ where: { id: publicationId } });
    return apiSuccess({ id: publicationId });
  } catch (error) {
    return internalServerError(error);
  }
}
