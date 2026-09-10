import type { ApiRequestContext } from "@/lib/api/core/types";

export function createRequestContext(
  request: Request,
  userId?: string
): ApiRequestContext {
  const requestId =
    request.headers.get("x-request-id") ??
    crypto.randomUUID();

  const url = new URL(request.url);

  return {
    requestId,
    method: request.method,
    path: url.pathname,
    authenticated: Boolean(userId),
    userId,
  };
}
