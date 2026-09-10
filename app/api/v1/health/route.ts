import {
  successResponse,
} from "@/lib/api/core/response";

import {
  checkRateLimit,
  getRateLimitHeaders,
} from "@/lib/api/core/rate-limit";

export const dynamic = "force-dynamic";

export async function GET(
  request: Request
): Promise<Response> {
  const requestId =
    request.headers.get("x-request-id") ??
    crypto.randomUUID();

  const clientKey =
    request.headers.get(
      "x-forwarded-for"
    )?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "unknown-client";

  const rateLimit =
    checkRateLimit(
      clientKey,
      {
        limit: 60,
        windowMs: 60_000,
        keyPrefix: "health",
      }
    );

  const headers =
    getRateLimitHeaders(rateLimit);

  if (!rateLimit.allowed) {
    const response =
      Response.json(
        {
          ok: false,
          error: {
            code: "RATE_LIMITED",
            message:
              "Too many requests.",
          },
          requestId,
        },
        {
          status: 429,
          headers: {
            "Cache-Control": "no-store",
            ...headers,
          },
        }
      );

    return response;
  }

  return successResponse(
    {
      service: "melkism-api",
      status: "ok",
      version: "v1",
      timestamp:
        new Date().toISOString(),
    },
    {
      headers,
    },
    requestId
  );
}
