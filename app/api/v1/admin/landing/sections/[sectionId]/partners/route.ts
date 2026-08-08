import { requireLandingManager } from "@/lib/api/authorization";
import { apiError, apiSuccess, internalServerError, readJson, validationError } from "@/lib/api/response";
import { prisma } from "@/lib/prisma";
import { createPartnerSchema } from "@/lib/validation/content";

type RouteContext = { params: Promise<{ sectionId: string }> };

export async function POST(request: Request, context: RouteContext) {
  const access = await requireLandingManager();
  if (access.response) return access.response;
  const { sectionId } = await context.params;
  const body = await readJson(request);
  if (body.error) return body.error;
  const parsed = createPartnerSchema.safeParse(body.data);
  if (!parsed.success) return validationError(parsed.error);
  try {
    const section = await prisma.landingSection.findUnique({ where: { id: sectionId } });
    if (!section || section.type !== "PARTNERS") return apiError("Partners section was not found.", 404, "NOT_FOUND");
    const last = await prisma.landingPartnerSelection.findFirst({ where: { landingSectionId: sectionId }, orderBy: { sortOrder: "desc" } });
    const partner = await prisma.$transaction(async (tx) => {
      const created = await tx.partner.create({ data: parsed.data, include: { logo: true } });
      await tx.landingPartnerSelection.create({ data: { landingSectionId: sectionId, partnerId: created.id, sortOrder: (last?.sortOrder ?? -1) + 1 } });
      return created;
    });
    return apiSuccess(partner, { status: 201 });
  } catch (error) { return internalServerError(error); }
}
