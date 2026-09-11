import {
  checkRateLimit,
  getRateLimitHeaders,
} from "@/lib/api/core/rate-limit";

export function rateLimitResponse(
  requestId: string,
  decision: ReturnType<
    typeof checkRateLimit
  >
): Response | null {
  if (decision.allowed) {
    return null;
  }

  const headers =
    getRateLimitHeaders(
      decision
    );

  return Response.json(
    {
      ok: false,
      error: {
        code:
          "RATE_LIMITED",
        message:
          "Too many requests.",
      },
      requestId,
    },
    {
      status: 429,
      headers: {
        ...headers,
        "Cache-Control":
          "no-store",
      },
    }
  );
}