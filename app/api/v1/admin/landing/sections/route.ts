import { requireLandingManager } from "@/lib/api/authorization";
import {
  apiSuccess,
  internalServerError,
  readJson,
  validationError,
} from "@/lib/api/response";
import { createLandingSection } from "@/lib/services/landing.service";
import { createLandingSectionSchema } from "@/lib/validation/landing";

export async function POST(request: Request) {
  const access = await requireLandingManager();
  if (access.response) return access.response;

  const body = await readJson(request);
  if (body.error) return body.error;
  const parsed = createLandingSectionSchema.safeParse(body.data);
  if (!parsed.success) return validationError(parsed.error);

  try {
    return apiSuccess(
      await createLandingSection(parsed.data, access.user.id),
      { status: 201 },
    );
  } catch (error) {
    return internalServerError(error);
  }
}
