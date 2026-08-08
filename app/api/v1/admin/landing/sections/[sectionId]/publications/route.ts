import { requireLandingManager } from "@/lib/api/authorization";
import {
  apiError,
  apiSuccess,
  internalServerError,
  readJson,
  validationError,
} from "@/lib/api/response";
import { prisma } from "@/lib/prisma";
import { createPublicationSchema } from "@/lib/validation/publication";

type RouteContext = { params: Promise<{ sectionId: string }> };

export async function POST(request: Request, context: RouteContext) {
  const access = await requireLandingManager();
  if (access.response) return access.response;

  const { sectionId } = await context.params;
  const body = await readJson(request);
  if (body.error) return body.error;
  const parsed = createPublicationSchema.safeParse(body.data);
  if (!parsed.success) return validationError(parsed.error);

  try {
    const section = await prisma.landingSection.findUnique({ where: { id: sectionId } });
    if (!section || section.type !== "PUBLICATIONS") {
      return apiError("Publications section was not found.", 404, "NOT_FOUND");
    }

    const lastSelection = await prisma.landingPublicationSelection.findFirst({
      where: { landingSectionId: sectionId },
      orderBy: { sortOrder: "desc" },
    });
    const { publishedAt, ...input } = parsed.data;
    const publication = await prisma.$transaction(async (tx) => {
      const created = await tx.publication.create({
        data: {
          ...input,
          publishedAt: publishedAt ? new Date(publishedAt) : null,
        },
        include: { coverImage: true, fileAsset: true },
      });
      await tx.landingPublicationSelection.create({
        data: {
          landingSectionId: sectionId,
          publicationId: created.id,
          sortOrder: (lastSelection?.sortOrder ?? -1) + 1,
          isFeatured: created.featured,
        },
      });
      return created;
    });
    return apiSuccess(publication, { status: 201 });
  } catch (error) {
    return internalServerError(error);
  }
}
