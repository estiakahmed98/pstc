import { requireLandingManager } from "@/lib/api/authorization";
import {
  apiError,
  apiSuccess,
  internalServerError,
  readJson,
  validationError,
} from "@/lib/api/response";
import {
  getAdminCmsPage,
  updateCmsPage,
} from "@/lib/services/cms-page.service";
import {
  cmsPageKeySchema,
  updateCmsPageSchema,
} from "@/lib/validation/cms-page";

type RouteContext = { params: Promise<{ key: string }> };

async function getKey(context: RouteContext) {
  const { key } = await context.params;
  return cmsPageKeySchema.safeParse(key);
}

export async function GET(_request: Request, context: RouteContext) {
  const access = await requireLandingManager();
  if (access.response) return access.response;

  const key = await getKey(context);
  if (!key.success) return apiError("CMS page was not found.", 404, "NOT_FOUND");

  try {
    return apiSuccess(await getAdminCmsPage(key.data, access.user.id));
  } catch (error) {
    return internalServerError(error);
  }
}

export async function PATCH(request: Request, context: RouteContext) {
  const access = await requireLandingManager();
  if (access.response) return access.response;

  const key = await getKey(context);
  if (!key.success) return apiError("CMS page was not found.", 404, "NOT_FOUND");

  const body = await readJson(request);
  if (body.error) return body.error;
  const parsed = updateCmsPageSchema.safeParse(body.data);
  if (!parsed.success) return validationError(parsed.error);

  try {
    return apiSuccess(await updateCmsPage(key.data, parsed.data, access.user.id));
  } catch (error) {
    return internalServerError(error);
  }
}
