import { requireLandingManager } from "@/lib/api/authorization";
import {
  apiSuccess,
  internalServerError,
  readJson,
  validationError,
} from "@/lib/api/response";
import {
  getAdminLandingPage,
  updateLandingPage,
} from "@/lib/services/landing.service";
import { updateLandingPageSchema } from "@/lib/validation/landing";

export async function GET() {
  const access = await requireLandingManager();
  if (access.response) return access.response;

  try {
    return apiSuccess(await getAdminLandingPage(access.user.id));
  } catch (error) {
    return internalServerError(error);
  }
}

export async function PATCH(request: Request) {
  const access = await requireLandingManager();
  if (access.response) return access.response;

  const body = await readJson(request);
  if (body.error) return body.error;
  const parsed = updateLandingPageSchema.safeParse(body.data);
  if (!parsed.success) return validationError(parsed.error);

  try {
    return apiSuccess(await updateLandingPage(parsed.data, access.user.id));
  } catch (error) {
    return internalServerError(error);
  }
}
