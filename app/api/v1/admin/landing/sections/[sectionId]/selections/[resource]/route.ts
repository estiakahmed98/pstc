import { requireLandingManager } from "@/lib/api/authorization";
import {
  apiError,
  apiSuccess,
  internalServerError,
  readJson,
  validationError,
} from "@/lib/api/response";
import {
  replaceLandingSelections,
  type LandingSelectionResource,
} from "@/lib/services/landing.service";
import { replaceLandingSelectionsSchema } from "@/lib/validation/landing";

type RouteContext = {
  params: Promise<{ sectionId: string; resource: string }>;
};

const resources = new Set<LandingSelectionResource>([
  "news",
  "publications",
  "partners",
]);

export async function PUT(request: Request, context: RouteContext) {
  const access = await requireLandingManager();
  if (access.response) return access.response;

  const { sectionId, resource } = await context.params;
  if (!resources.has(resource as LandingSelectionResource)) {
    return apiError("Unknown selection resource.", 404, "NOT_FOUND");
  }

  const body = await readJson(request);
  if (body.error) return body.error;
  const parsed = replaceLandingSelectionsSchema.safeParse(body.data);
  if (!parsed.success) return validationError(parsed.error);

  try {
    const selections = await replaceLandingSelections(
      sectionId,
      resource as LandingSelectionResource,
      parsed.data,
    );
    return apiSuccess({ resource, selections });
  } catch (error) {
    return internalServerError(error);
  }
}
