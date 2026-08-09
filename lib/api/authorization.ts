import { auth } from "@/auth";
import { apiError } from "@/lib/api/response";
import { prisma } from "@/lib/prisma";

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

  const user = session.user.email
    ? await prisma.user.findUnique({
        where: { email: session.user.email.toLowerCase() },
      })
    : session.user.id
      ? await prisma.user.findUnique({ where: { id: session.user.id } })
      : null;

  if (!user || !user.isActive) {
    return {
      user: null,
      response: apiError(
        "Your account is no longer available. Please sign in again.",
        401,
        "STALE_SESSION",
      ),
    };
  }

  if (!landingManagerRoles.has(user.role)) {
    return {
      user: null,
      response: apiError(
        "You do not have permission to manage landing content.",
        403,
        "FORBIDDEN",
      ),
    };
  }

  return { user, response: null };
}
