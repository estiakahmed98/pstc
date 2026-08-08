import { requireLandingManager } from "@/lib/api/authorization";
import {
  apiSuccess,
  internalServerError,
  readJson,
  validationError,
} from "@/lib/api/response";
import {
  deleteLandingSection,
  updateLandingSection,
} from "@/lib/services/landing.service";
import { updateLandingSectionSchema } from "@/lib/validation/landing";

type RouteContext = { params: Promise<{ sectionId: string }> };

export async function PATCH(request: Request, context: RouteContext) {
  const access = await requireLandingManager();
  if (access.response) return access.response;

  const body = await readJson(request);
  if (body.error) return body.error;
  const parsed = updateLandingSectionSchema.safeParse(body.data);
  if (!parsed.success) return validationError(parsed.error);

  try {
    const { sectionId } = await context.params;
    return apiSuccess(await updateLandingSection(sectionId, parsed.data));
  } catch (error) {
    return internalServerError(error);
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  const access = await requireLandingManager();
  if (access.response) return access.response;

  try {
    const { sectionId } = await context.params;
    await deleteLandingSection(sectionId);
    return apiSuccess({ deleted: true, id: sectionId });
  } catch (error) {
    return internalServerError(error);
  }
}
