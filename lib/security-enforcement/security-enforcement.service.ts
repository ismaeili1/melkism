import {
  SECURITY_ENFORCEMENT_ALLOWED_HEADER_NAMES,
  SECURITY_ENFORCEMENT_MAX_HEADER_NAME_LENGTH,
  SECURITY_ENFORCEMENT_MAX_HEADER_VALUE_LENGTH,
  SECURITY_ENFORCEMENT_SERVICE,
  SECURITY_ENFORCEMENT_TRANSPORT_HEADER,
  SECURITY_ENFORCEMENT_VERSION,
} from "./security-enforcement.constants";
import type {
  SecurityEnforcementInput,
  SecurityEnforcementResult,
} from "./security-enforcement.types";
import {
  getSecurityPolicy,
} from "../security-policy/security-policy.service";

type AllowedHeaderName =
  (typeof SECURITY_ENFORCEMENT_ALLOWED_HEADER_NAMES)[number];

function isAllowedHeaderName(
  headerName: string
): headerName is AllowedHeaderName {
  return (
    SECURITY_ENFORCEMENT_ALLOWED_HEADER_NAMES.includes(
      headerName as AllowedHeaderName
    )
  );
}

function isSafeHeaderValue(value: string): boolean {
  return (
    value.length <= SECURITY_ENFORCEMENT_MAX_HEADER_VALUE_LENGTH &&
    !/[\r\n]/.test(value)
  );
}

function setControlledHeader(
  headers: Headers,
  headerName: string,
  headerValue: string,
  appliedHeaders: string[],
  rejectedHeaders: string[]
): void {
  if (headerName.length === 0 || headerName.length > SECURITY_ENFORCEMENT_MAX_HEADER_NAME_LENGTH) {
    rejectedHeaders.push(headerName);
    return;
  }

  if (!isAllowedHeaderName(headerName)) {
    rejectedHeaders.push(headerName);
    return;
  }

  if (!isSafeHeaderValue(headerValue)) {
    rejectedHeaders.push(headerName);
    return;
  }

  headers.set(headerName, headerValue);
  appliedHeaders.push(headerName);
}

export function enforceSecurityHeaders(
  headers: Headers,
  input: SecurityEnforcementInput
): SecurityEnforcementResult {
  const policy = getSecurityPolicy({
    includeTransportSecurity: input.allowTransportSecurity === true
  });

  const appliedHeaders: string[] = [];
  const rejectedHeaders: string[] = [];

  for (const policyHeader of policy.headers) {
    if (policyHeader.scope === "reference") {
      continue;
    }

    if (input.mode === "api" && policyHeader.id === "content-security-policy") {
      continue;
    }

    setControlledHeader(
      headers,
      policyHeader.header,
      policyHeader.value,
      appliedHeaders,
      rejectedHeaders
    );
  }

  if (input.allowTransportSecurity === true) {
    setControlledHeader(
      headers,
      "Strict-Transport-Security",
      SECURITY_ENFORCEMENT_TRANSPORT_HEADER,
      appliedHeaders,
      rejectedHeaders
    );
  }

  const status =
    rejectedHeaders.length > 0
      ? "warning"
      : policy.status === "blocked"
        ? "blocked"
        : "pass";

  return {
    ok: status !== "blocked",
    service: SECURITY_ENFORCEMENT_SERVICE,
    version: SECURITY_ENFORCEMENT_VERSION,
    timestamp: new Date().toISOString(),
    mode: input.mode,
    status,
    appliedHeaders,
    rejectedHeaders
  };
}
