import { requireLandingManager } from "@/lib/api/authorization";
import {
  apiSuccess,
  internalServerError,
  readJson,
  validationError,
} from "@/lib/api/response";
import {
  deleteLandingItem,
  updateLandingItem,
} from "@/lib/services/landing.service";
import { updateLandingItemSchema } from "@/lib/validation/landing";

type RouteContext = { params: Promise<{ itemId: string }> };

export async function PATCH(request: Request, context: RouteContext) {
  const access = await requireLandingManager();
  if (access.response) return access.response;

  const body = await readJson(request);
  if (body.error) return body.error;
  const parsed = updateLandingItemSchema.safeParse(body.data);
  if (!parsed.success) return validationError(parsed.error);

  try {
    const { itemId } = await context.params;
    return apiSuccess(await updateLandingItem(itemId, parsed.data));
  } catch (error) {
    return internalServerError(error);
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  const access = await requireLandingManager();
  if (access.response) return access.response;

  try {
    const { itemId } = await context.params;
    await deleteLandingItem(itemId);
    return apiSuccess({ deleted: true, id: itemId });
  } catch (error) {
    return internalServerError(error);
  }
}
