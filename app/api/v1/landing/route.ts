import { apiError, apiSuccess, internalServerError } from "@/lib/api/response";
import { getPublicLandingPage } from "@/lib/services/landing.service";

export async function GET() {
  try {
    const landing = await getPublicLandingPage();
    if (!landing) {
      return apiError(
        "The landing page has not been published yet.",
        404,
        "LANDING_NOT_PUBLISHED",
      );
    }

    return apiSuccess(landing, {
      headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" },
    });
  } catch (error) {
    return internalServerError(error);
  }
}
