import {
  REQUEST_PROTECTION_SERVICE,
  REQUEST_PROTECTION_VERSION,
} from "./request-protection.constants";

import {
  checkRateLimit,
} from "./rate-limit.service";

import {
  validateOrigin,
} from "./origin.service";

import {
  validateRequestBoundary,
} from "./csrf.service";

import type {
  RequestProtectionInput,
  RequestProtectionResult,
  SecurityControlReport,
} from "./request-protection.types";

function isMutation(
  method: string,
): boolean {
  return (
    method === "POST" ||
    method === "PUT" ||
    method === "PATCH" ||
    method === "DELETE"
  );
}

export function protectRequest(
  input: RequestProtectionInput,
): RequestProtectionResult {
  const method =
    input.method
      .trim()
      .toUpperCase();

  const boundary =
    validateRequestBoundary({
      ...input,
      method,
    });

  if (!boundary.ok) {
    return boundary;
  }

  const origin =
    validateOrigin(
      input.origin,
      input.referer,
    );

  if (!origin.ok) {
    return origin;
  }

  return checkRateLimit(
    input.identity,
    isMutation(method),
  );
}

export function getSecurityControlReport(): SecurityControlReport {
  return {
    ok: true,
    service:
      REQUEST_PROTECTION_SERVICE,
    version:
      REQUEST_PROTECTION_VERSION,
    timestamp:
      new Date().toISOString(),
    controls: {
      methodPolicy: true,
      originPolicy: true,
      csrfBoundary: true,
      rateLimitPolicy: true,
    },
  };
}
