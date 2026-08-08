import { NextResponse } from "next/server";
import type { ZodError } from "zod";
import { Prisma } from "prisma-client-generated";

export function apiSuccess<T>(data: T, init?: ResponseInit) {
  return NextResponse.json({ success: true, data }, init);
}

export function apiError(
  message: string,
  status = 400,
  code = "BAD_REQUEST",
  details?: unknown,
) {
  return NextResponse.json(
    {
      success: false,
      error: { code, message, ...(details ? { details } : {}) },
    },
    { status },
  );
}

export function validationError(error: ZodError) {
  return apiError(
    "The submitted data is invalid.",
    422,
    "VALIDATION_ERROR",
    error.flatten(),
  );
}

export async function readJson(request: Request) {
  try {
    return { data: await request.json(), error: null };
  } catch {
    return {
      data: null,
      error: apiError("A valid JSON body is required.", 400, "INVALID_JSON"),
    };
  }
}

export function internalServerError(error: unknown) {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === "P2002") {
      return apiError("This record already exists.", 409, "CONFLICT");
    }
    if (error.code === "P2025") {
      return apiError("The requested record was not found.", 404, "NOT_FOUND");
    }
    if (error.code === "P2003") {
      return apiError(
        "A related record does not exist or is still in use.",
        409,
        "RELATION_CONFLICT",
      );
    }
  }

  console.error(error);
  return apiError(
    "An unexpected server error occurred.",
    500,
    "INTERNAL_SERVER_ERROR",
  );
}
