import { badRequest } from "@/lib/api/core/errors";

export type HttpMethod =
  | "GET"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE";

export function requireMethod(
  request: Request,
  allowed: readonly HttpMethod[]
): void {
  const method =
    request.method.toUpperCase() as HttpMethod;

  if (!allowed.includes(method)) {
    throw badRequest(
      `HTTP method ${request.method} is not supported.`
    );
  }
}
