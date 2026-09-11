import type {
  ApiFailure,
  ApiResult,
  ApiSuccess,
} from "@/lib/api/core/types";

import {
  ApiError,
  type ApiErrorCode,
} from "@/lib/api/core/errors";

function createRequestId(): string {
  return crypto.randomUUID();
}

export function successResponse<T>(
  data: T,
  init?: ResponseInit,
  requestId?: string
): Response {
  const id = requestId ?? createRequestId();

  const body: ApiSuccess<T> = {
    ok: true,
    data,
    requestId: id,
  };

  return Response.json(
    body,
    {
      ...init,
      headers: {
        "Cache-Control": "no-store",
        ...init?.headers,
      },
    }
  );
}

export function errorResponse(
  error: unknown,
  requestId?: string
): Response {
  const id = requestId ?? createRequestId();

  let code: ApiErrorCode = "INTERNAL_ERROR";
  let message = "An internal server error occurred.";
  let status = 500;

  if (error instanceof ApiError) {
    code = error.code;
    message = error.message;
    status = error.status;
  }

  const body: ApiFailure = {
    ok: false,
    error: {
      code,
      message,
    },
    requestId: id,
  };

  return Response.json(
    body,
    {
      status,
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}

export type { ApiResult };
