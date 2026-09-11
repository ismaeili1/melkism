import {
  errorResponse,
} from "@/lib/api/core/response";

import {
  checkRateLimit,
  getRateLimitHeaders,
  type RateLimitDecision,
} from "@/lib/api/core/rate-limit";

export type RateLimitedHandlerContext = {
  request: Request;
  requestId: string;
  rateLimit: RateLimitDecision;
};

export type RateLimitedHandlerOptions = {
  limit?: number;
  windowMs?: number;
  keyPrefix?: string;
};

function getClientKey(
  request: Request
): string {
  const forwardedFor =
    request.headers.get(
      "x-forwarded-for"
    );

  if (forwardedFor) {
    const first =
      forwardedFor.split(",")[0]?.trim();

    if (first) {
      return first;
    }
  }

  const realIp =
    request.headers.get(
      "x-real-ip"
    );

  if (realIp) {
    return realIp.trim();
  }

  return "unknown-client";
}

export async function runRateLimitedHandler<T>(
  request: Request,
  requestId: string,
  handler: (
    context: RateLimitedHandlerContext
  ) => Promise<T>,
  options: RateLimitedHandlerOptions = {}
): Promise<Response> {
  const decision =
    checkRateLimit(
      getClientKey(request),
      {
        limit: options.limit ?? 60,
        windowMs:
          options.windowMs ??
          60_000,
        keyPrefix:
          options.keyPrefix ??
          "api",
      }
    );

  const headers =
    getRateLimitHeaders(decision);

  if (!decision.allowed) {
    const response =
      errorResponse(
        new Error("RATE_LIMITED"),
        requestId
      );

    Object.entries(headers).forEach(
      ([key, value]) => {
        response.headers.set(
          key,
          String(value)
        );
      }
    );

    return response;
  }

  try {
    const data =
      await handler({
        request,
        requestId,
        rateLimit: decision,
      });

    const response =
      Response.json(
        {
          ok: true,
          data,
          requestId,
        },
        {
          headers,
        }
      );

    return response;
  }
  catch (error) {
    const response =
      errorResponse(
        error,
        requestId
      );

    Object.entries(headers).forEach(
      ([key, value]) => {
        response.headers.set(
          key,
          String(value)
        );
      }
    );

    return response;
  }
}
