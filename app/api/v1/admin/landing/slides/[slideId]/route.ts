import { requireLandingManager } from "@/lib/api/authorization";
import {
  apiSuccess,
  internalServerError,
  readJson,
  validationError,
} from "@/lib/api/response";
import {
  deleteHeroSlide,
  updateHeroSlide,
} from "@/lib/services/landing.service";
import { updateHeroSlideSchema } from "@/lib/validation/landing";

type RouteContext = { params: Promise<{ slideId: string }> };

export async function PATCH(request: Request, context: RouteContext) {
  const access = await requireLandingManager();
  if (access.response) return access.response;

  const body = await readJson(request);
  if (body.error) return body.error;
  const parsed = updateHeroSlideSchema.safeParse(body.data);
  if (!parsed.success) return validationError(parsed.error);

  try {
    const { slideId } = await context.params;
    return apiSuccess(await updateHeroSlide(slideId, parsed.data));
  } catch (error) {
    return internalServerError(error);
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  const access = await requireLandingManager();
  if (access.response) return access.response;

  try {
    const { slideId } = await context.params;
    await deleteHeroSlide(slideId);
    return apiSuccess({ deleted: true, id: slideId });
  } catch (error) {
    return internalServerError(error);
  }
}
