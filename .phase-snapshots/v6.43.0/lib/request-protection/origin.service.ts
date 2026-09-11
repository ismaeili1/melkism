import {
  MAX_ORIGIN_LENGTH,
} from "./request-protection.constants";

import type {
  RequestProtectionResult,
} from "./request-protection.types";

export function validateOrigin(
  origin: string | null | undefined,
  referer: string | null | undefined,
): RequestProtectionResult {
  const normalizedOrigin =
    origin?.trim() ?? "";

  const normalizedReferer =
    referer?.trim() ?? "";

  if (
    normalizedOrigin.length >
    MAX_ORIGIN_LENGTH
  ) {
    return {
      ok: false,
      status: "invalid",
      message:
        "Origin header is too long.",
    };
  }

  if (
    normalizedReferer.length >
    MAX_ORIGIN_LENGTH
  ) {
    return {
      ok: false,
      status: "invalid",
      message:
        "Referer header is too long.",
    };
  }

  if (
    normalizedOrigin &&
    normalizedOrigin !== "null"
  ) {
    try {
      new URL(
        normalizedOrigin,
      );
    } catch {
      return {
        ok: false,
        status: "forbidden",
        message:
          "Origin header is malformed.",
      };
    }
  }

  if (
    normalizedReferer
  ) {
    try {
      new URL(
        normalizedReferer,
      );
    } catch {
      return {
        ok: false,
        status: "forbidden",
        message:
          "Referer header is malformed.",
      };
    }
  }

  return {
    ok: true,
    status: "allowed",
    message:
      "Origin boundary is valid.",
  };
}
