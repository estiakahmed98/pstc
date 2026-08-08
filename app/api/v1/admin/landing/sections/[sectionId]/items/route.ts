import { requireLandingManager } from "@/lib/api/authorization";
import {
  apiSuccess,
  internalServerError,
  readJson,
  validationError,
} from "@/lib/api/response";
import { createLandingItem } from "@/lib/services/landing.service";
import { createLandingItemSchema } from "@/lib/validation/landing";

type RouteContext = { params: Promise<{ sectionId: string }> };

export async function POST(request: Request, context: RouteContext) {
  const access = await requireLandingManager();
  if (access.response) return access.response;

  const body = await readJson(request);
  if (body.error) return body.error;
  const parsed = createLandingItemSchema.safeParse(body.data);
  if (!parsed.success) return validationError(parsed.error);

  try {
    const { sectionId } = await context.params;
    return apiSuccess(await createLandingItem(sectionId, parsed.data), {
      status: 201,
    });
  } catch (error) {
    return internalServerError(error);
  }
}
