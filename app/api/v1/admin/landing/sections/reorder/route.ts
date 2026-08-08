import { requireLandingManager } from "@/lib/api/authorization";
import {
  apiSuccess,
  internalServerError,
  readJson,
  validationError,
} from "@/lib/api/response";
import { reorderLandingSections } from "@/lib/services/landing.service";
import { reorderLandingSectionsSchema } from "@/lib/validation/landing";

export async function PATCH(request: Request) {
  const access = await requireLandingManager();
  if (access.response) return access.response;

  const body = await readJson(request);
  if (body.error) return body.error;
  const parsed = reorderLandingSectionsSchema.safeParse(body.data);
  if (!parsed.success) return validationError(parsed.error);

  try {
    const sections = await reorderLandingSections(parsed.data);
    return apiSuccess({ sections });
  } catch (error) {
    return internalServerError(error);
  }
}
