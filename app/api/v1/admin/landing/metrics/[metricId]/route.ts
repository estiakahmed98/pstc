import { requireLandingManager } from "@/lib/api/authorization";
import {
  apiSuccess,
  internalServerError,
  readJson,
  validationError,
} from "@/lib/api/response";
import {
  deleteLandingMetric,
  updateLandingMetric,
} from "@/lib/services/landing.service";
import { updateLandingMetricSchema } from "@/lib/validation/landing";

type RouteContext = { params: Promise<{ metricId: string }> };

export async function PATCH(request: Request, context: RouteContext) {
  const access = await requireLandingManager();
  if (access.response) return access.response;

  const body = await readJson(request);
  if (body.error) return body.error;
  const parsed = updateLandingMetricSchema.safeParse(body.data);
  if (!parsed.success) return validationError(parsed.error);

  try {
    const { metricId } = await context.params;
    return apiSuccess(await updateLandingMetric(metricId, parsed.data));
  } catch (error) {
    return internalServerError(error);
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  const access = await requireLandingManager();
  if (access.response) return access.response;

  try {
    const { metricId } = await context.params;
    await deleteLandingMetric(metricId);
    return apiSuccess({ deleted: true, id: metricId });
  } catch (error) {
    return internalServerError(error);
  }
}
