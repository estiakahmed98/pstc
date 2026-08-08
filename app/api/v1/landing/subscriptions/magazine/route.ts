import { prisma } from "@/lib/prisma";
import {
  apiSuccess,
  internalServerError,
  readJson,
  validationError,
} from "@/lib/api/response";
import { magazineSubscriptionSchema } from "@/lib/validation/landing";

export async function POST(request: Request) {
  const body = await readJson(request);
  if (body.error) return body.error;

  const parsed = magazineSubscriptionSchema.safeParse(body.data);
  if (!parsed.success) return validationError(parsed.error);

  try {
    const subscriber = await prisma.magazineSubscriber.upsert({
      where: { email: parsed.data.email },
      update: {
        name: parsed.data.name,
        organization: parsed.data.organization,
        status: "NEW",
        consentedAt: new Date(),
      },
      create: {
        name: parsed.data.name,
        email: parsed.data.email,
        organization: parsed.data.organization,
        consentedAt: new Date(),
        ipAddress: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim(),
        userAgent: request.headers.get("user-agent"),
      },
      select: { id: true, email: true, createdAt: true },
    });

    return apiSuccess(subscriber, { status: 201 });
  } catch (error) {
    return internalServerError(error);
  }
}
