import {
  SECURITY_HEADERS,
} from "./security.constants";

import type {
  SecurityHeaderMap,
} from "./security.types";

export function getSecurityHeaders():
  SecurityHeaderMap {
  return {
    "Content-Security-Policy":
      SECURITY_HEADERS.CONTENT_SECURITY_POLICY,
    "Referrer-Policy":
      SECURITY_HEADERS.REFERRER_POLICY,
    "X-Frame-Options":
      SECURITY_HEADERS.X_FRAME_OPTIONS,
    "X-Content-Type-Options":
      SECURITY_HEADERS.X_CONTENT_TYPE_OPTIONS,
    "Permissions-Policy":
      SECURITY_HEADERS.PERMISSIONS_POLICY,
    "Strict-Transport-Security":
      SECURITY_HEADERS.STRICT_TRANSPORT_SECURITY,
  };
}

export function applySecurityHeaders(
  headers: Headers
): Headers {
  const securityHeaders =
    getSecurityHeaders();

  for (
    const [name, value]
    of Object.entries(
      securityHeaders
    )
  ) {
    headers.set(
      name,
      value
    );
  }

  return headers;
}
