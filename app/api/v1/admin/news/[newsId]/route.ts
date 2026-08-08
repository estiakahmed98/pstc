import { requireLandingManager } from "@/lib/api/authorization";
import { apiSuccess, internalServerError, readJson, validationError } from "@/lib/api/response";
import { prisma } from "@/lib/prisma";
import { updateNewsSchema } from "@/lib/validation/content";

type RouteContext = { params: Promise<{ newsId: string }> };

export async function PATCH(request: Request, context: RouteContext) {
  const access = await requireLandingManager();
  if (access.response) return access.response;
  const { newsId } = await context.params;
  const body = await readJson(request);
  if (body.error) return body.error;
  const parsed = updateNewsSchema.safeParse(body.data);
  if (!parsed.success) return validationError(parsed.error);
  try {
    const { publishedAt, ...input } = parsed.data;
    return apiSuccess(await prisma.newsArticle.update({ where: { id: newsId }, data: { ...input, publishedAt: publishedAt === undefined ? undefined : publishedAt ? new Date(publishedAt) : null }, include: { coverImage: true } }));
  } catch (error) { return internalServerError(error); }
}

export async function DELETE(_request: Request, context: RouteContext) {
  const access = await requireLandingManager();
  if (access.response) return access.response;
  const { newsId } = await context.params;
  try { await prisma.newsArticle.delete({ where: { id: newsId } }); return apiSuccess({ id: newsId }); }
  catch (error) { return internalServerError(error); }
}
