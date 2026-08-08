import { requireLandingManager } from "@/lib/api/authorization";
import { apiSuccess, internalServerError, readJson, validationError } from "@/lib/api/response";
import { prisma } from "@/lib/prisma";
import { updatePartnerSchema } from "@/lib/validation/content";

type RouteContext = { params: Promise<{ partnerId: string }> };

export async function PATCH(request: Request, context: RouteContext) {
  const access = await requireLandingManager();
  if (access.response) return access.response;
  const { partnerId } = await context.params;
  const body = await readJson(request);
  if (body.error) return body.error;
  const parsed = updatePartnerSchema.safeParse(body.data);
  if (!parsed.success) return validationError(parsed.error);
  try { return apiSuccess(await prisma.partner.update({ where: { id: partnerId }, data: parsed.data, include: { logo: true } })); }
  catch (error) { return internalServerError(error); }
}

export async function DELETE(_request: Request, context: RouteContext) {
  const access = await requireLandingManager();
  if (access.response) return access.response;
  const { partnerId } = await context.params;
  try { await prisma.partner.delete({ where: { id: partnerId } }); return apiSuccess({ id: partnerId }); }
  catch (error) { return internalServerError(error); }
}
