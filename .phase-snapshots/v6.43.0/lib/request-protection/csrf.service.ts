import {
  MUTATION_METHODS,
  SAFE_METHODS,
  ALL_ALLOWED_METHODS,
  MAX_PATH_LENGTH,
} from "./request-protection.constants";

import type {
  RequestProtectionInput,
  RequestProtectionResult,
} from "./request-protection.types";

function isSafeMethod(
  method: string,
): boolean {
  return SAFE_METHODS.includes(
    method as (
      typeof SAFE_METHODS
    )[number],
  );
}

function isMutationMethod(
  method: string,
): boolean {
  return MUTATION_METHODS.includes(
    method as (
      typeof MUTATION_METHODS
    )[number],
  );
}

export function validateRequestBoundary(
  input: RequestProtectionInput,
): RequestProtectionResult {
  const method =
    input.method
      .trim()
      .toUpperCase();

  if (
    !ALL_ALLOWED_METHODS.includes(
      method as (
        typeof ALL_ALLOWED_METHODS
      )[number],
    )
  ) {
    return {
      ok: false,
      status: "forbidden",
      message:
        "HTTP method is not allowed.",
    };
  }

  if (
    !input.pathname ||
    input.pathname.length >
      MAX_PATH_LENGTH
  ) {
    return {
      ok: false,
      status: "invalid",
      message:
        "Request path is invalid.",
    };
  }

  if (
    isSafeMethod(method)
  ) {
    return {
      ok: true,
      status: "allowed",
      message:
        "Safe request method accepted.",
    };
  }

  if (
    isMutationMethod(method)
  ) {
    const contentType =
      input.contentType
        ?.split(";")[0]
        .trim()
        .toLowerCase() ?? "";

    if (
      !contentType
    ) {
      return {
        ok: false,
        status: "invalid",
        message:
          "Mutation requests require a content type.",
      };
    }

    return {
      ok: true,
      status: "allowed",
      message:
        "Mutation request satisfies the CSRF request boundary.",
    };
  }

  return {
    ok: true,
    status: "allowed",
    message:
      "Request accepted.",
  };
}
