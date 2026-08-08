import { auth } from "@/auth";
import { apiError } from "@/lib/api/response";

const landingManagerRoles = new Set([
  "super_admin",
  "admin",
  "editor",
  "program_manager",
]);

export async function requireLandingManager() {
  const session = await auth();

  if (!session?.user) {
    return {
      user: null,
      response: apiError("Authentication is required.", 401, "UNAUTHORIZED"),
    };
  }

  if (!landingManagerRoles.has(session.user.role)) {
    return {
      user: null,
      response: apiError(
        "You do not have permission to manage landing content.",
        403,
        "FORBIDDEN",
      ),
    };
  }

  return { user: session.user, response: null };
}
