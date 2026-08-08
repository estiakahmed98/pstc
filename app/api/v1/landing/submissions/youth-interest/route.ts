import { prisma } from "@/lib/prisma";
import {
  apiSuccess,
  internalServerError,
  readJson,
  validationError,
} from "@/lib/api/response";
import { youthInterestSchema } from "@/lib/validation/landing";

export async function POST(request: Request) {
  const body = await readJson(request);
  if (body.error) return body.error;

  const parsed = youthInterestSchema.safeParse(body.data);
  if (!parsed.success) return validationError(parsed.error);

  try {
    const { consent: _consent, ...input } = parsed.data;
    const submission = await prisma.youthInterestSubmission.create({
      data: {
        ...input,
        consentedAt: new Date(),
        ipAddress: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim(),
        userAgent: request.headers.get("user-agent"),
      },
      select: { id: true, email: true, status: true, createdAt: true },
    });

    return apiSuccess(submission, { status: 201 });
  } catch (error) {
    return internalServerError(error);
  }
}
