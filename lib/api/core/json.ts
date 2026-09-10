import { badRequest } from "@/lib/api/core/errors";

export type JsonParseOptions = {
  maxBytes?: number;
};

const DEFAULT_MAX_BYTES = 1024 * 1024;

export async function parseJsonBody<T>(
  request: Request,
  options: JsonParseOptions = {}
): Promise<T> {
  const maxBytes =
    options.maxBytes ??
    DEFAULT_MAX_BYTES;

  const contentLength =
    request.headers.get("content-length");

  if (contentLength) {
    const parsed =
      Number(contentLength);

    if (
      Number.isFinite(parsed) &&
      parsed > maxBytes
    ) {
      throw badRequest(
        "Request body is too large."
      );
    }
  }

  const contentType =
    request.headers.get("content-type") ?? "";

  if (
    !contentType
      .toLowerCase()
      .startsWith("application/json")
  ) {
    throw badRequest(
      "Content-Type must be application/json."
    );
  }

  try {
    const body =
      await request.json();

    return body as T;
  }
  catch {
    throw badRequest(
      "Request body contains invalid JSON."
    );
  }
}
