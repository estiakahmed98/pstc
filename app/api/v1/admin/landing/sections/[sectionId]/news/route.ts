import { requireLandingManager } from "@/lib/api/authorization";
import { apiError, apiSuccess, internalServerError, readJson, validationError } from "@/lib/api/response";
import { prisma } from "@/lib/prisma";
import { createNewsSchema } from "@/lib/validation/content";

type RouteContext = { params: Promise<{ sectionId: string }> };

export async function POST(request: Request, context: RouteContext) {
  const access = await requireLandingManager();
  if (access.response) return access.response;
  const { sectionId } = await context.params;
  const body = await readJson(request);
  if (body.error) return body.error;
  const parsed = createNewsSchema.safeParse(body.data);
  if (!parsed.success) return validationError(parsed.error);

  try {
    const section = await prisma.landingSection.findUnique({ where: { id: sectionId } });
    if (!section || section.type !== "LATEST_NEWS") return apiError("News section was not found.", 404, "NOT_FOUND");
    const last = await prisma.landingNewsSelection.findFirst({ where: { landingSectionId: sectionId }, orderBy: { sortOrder: "desc" } });
    const { publishedAt, ...input } = parsed.data;
    const article = await prisma.$transaction(async (tx) => {
      const created = await tx.newsArticle.create({ data: { ...input, publishedAt: publishedAt ? new Date(publishedAt) : null }, include: { coverImage: true } });
      await tx.landingNewsSelection.create({ data: { landingSectionId: sectionId, newsArticleId: created.id, sortOrder: (last?.sortOrder ?? -1) + 1, isFeatured: created.featured } });
      return created;
    });
    return apiSuccess(article, { status: 201 });
  } catch (error) { return internalServerError(error); }
}
