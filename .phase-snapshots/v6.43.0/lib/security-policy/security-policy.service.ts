import {
  SECURITY_POLICY_CSP,
  SECURITY_POLICY_DEFAULT_HEADERS,
  SECURITY_POLICY_MAX_HEADER_VALUE_LENGTH,
  SECURITY_POLICY_PERMISSIONS,
  SECURITY_POLICY_SERVICE,
  SECURITY_POLICY_TRANSPORT,
  SECURITY_POLICY_VERSION,
} from "./security-policy.constants";
import type {
  SecurityHeaderPolicy,
  SecurityPolicy,
  SecurityPolicyHeaderInput,
  SecurityPolicyStatus,
} from "./security-policy.types";

function validateHeaderValue(value: string): SecurityPolicyStatus {
  if (!value.trim()) {
    return "blocked";
  }

  if (value.length > SECURITY_POLICY_MAX_HEADER_VALUE_LENGTH) {
    return "blocked";
  }

  if (/[\r\n]/.test(value)) {
    return "blocked";
  }

  return "pass";
}

function createHeader(
  id: SecurityHeaderPolicy["id"],
  header: string,
  value: string,
  description: string,
  scope: SecurityHeaderPolicy["scope"]
): SecurityHeaderPolicy {
  return {
    id,
    header,
    value,
    status: validateHeaderValue(value),
    scope,
    description,
  };
}

export function getSecurityPolicy(
  input: SecurityPolicyHeaderInput = {}
): SecurityPolicy {
  const headers: SecurityHeaderPolicy[] = [
    createHeader(
      "content-security-policy",
      "Content-Security-Policy",
      SECURITY_POLICY_CSP,
      "Restricts resource origins, framing, form submission and plugin/object execution.",
      "controlled-response"
    ),
    createHeader(
      "referrer-policy",
      "Referrer-Policy",
      SECURITY_POLICY_DEFAULT_HEADERS["Referrer-Policy"],
      "Limits referrer information sent to other origins.",
      "api"
    ),
    createHeader(
      "frame-protection",
      "X-Frame-Options",
      SECURITY_POLICY_DEFAULT_HEADERS["X-Frame-Options"],
      "Prevents the protected response from being embedded in a frame.",
      "api"
    ),
    createHeader(
      "content-type-protection",
      "X-Content-Type-Options",
      SECURITY_POLICY_DEFAULT_HEADERS["X-Content-Type-Options"],
      "Prevents MIME-type sniffing.",
      "api"
    ),
    createHeader(
      "permissions-policy",
      "Permissions-Policy",
      SECURITY_POLICY_PERMISSIONS,
      "Disables selected browser capabilities for the protected response.",
      "controlled-response"
    ),
    createHeader(
      "cache-control",
      "Cache-Control",
      SECURITY_POLICY_DEFAULT_HEADERS["Cache-Control"],
      "Prevents caching of security-status and diagnostic responses.",
      "api"
    )
  ];

  if (input.includeTransportSecurity === true) {
    headers.push(
      createHeader(
        "transport-security",
        "Strict-Transport-Security",
        SECURITY_POLICY_TRANSPORT,
        "Requests HTTPS for supported production deployments.",
        "reference"
      )
    );
  }

  const passedHeaders = headers.filter(
    (header) => header.status === "pass"
  ).length;

  const warningHeaders = headers.filter(
    (header) => header.status === "warning"
  ).length;

  const blockedHeaders = headers.filter(
    (header) => header.status === "blocked"
  ).length;

  const status: SecurityPolicyStatus =
    blockedHeaders > 0
      ? "blocked"
      : warningHeaders > 0
        ? "warning"
        : "pass";

  return {
    ok: status !== "blocked",
    service: SECURITY_POLICY_SERVICE,
    version: SECURITY_POLICY_VERSION,
    timestamp: new Date().toISOString(),
    status,
    headers,
    totalHeaders: headers.length,
    passedHeaders,
    warningHeaders,
    blockedHeaders
  };
}

export function applySecurityHeaders(
  headers: Headers,
  input: SecurityPolicyHeaderInput = {}
): Headers {
  const policy = getSecurityPolicy(input);

  for (const header of policy.headers) {
    if (header.status === "pass" && header.scope !== "reference") {
      headers.set(header.header, header.value);
    }
  }

  return headers;
}
