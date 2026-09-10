import {
  GLOBAL_SECURITY_HEADERS_CACHE_CONTROL,
  GLOBAL_SECURITY_HEADERS_CONTENT_TYPE_POLICY,
  GLOBAL_SECURITY_HEADERS_CSP,
  GLOBAL_SECURITY_HEADERS_FRAME_POLICY,
  GLOBAL_SECURITY_HEADERS_PERMISSIONS_POLICY,
  GLOBAL_SECURITY_HEADERS_REFERRER_POLICY,
  GLOBAL_SECURITY_HEADERS_SERVICE,
  GLOBAL_SECURITY_HEADERS_VERSION,
} from "./security-global-headers.constants";
import type {
  GlobalSecurityHeader,
  GlobalSecurityHeaderSet,
  GlobalSecurityHeaderVerification,
} from "./security-global-headers.types";

export function getGlobalSecurityHeaderSet(): GlobalSecurityHeaderSet {
  const headers: GlobalSecurityHeader[] = [
    {
      id: "content-security-policy",
      key: "Content-Security-Policy",
      value: GLOBAL_SECURITY_HEADERS_CSP
    },
    {
      id: "referrer-policy",
      key: "Referrer-Policy",
      value: GLOBAL_SECURITY_HEADERS_REFERRER_POLICY
    },
    {
      id: "frame-protection",
      key: "X-Frame-Options",
      value: GLOBAL_SECURITY_HEADERS_FRAME_POLICY
    },
    {
      id: "content-type-protection",
      key: "X-Content-Type-Options",
      value: GLOBAL_SECURITY_HEADERS_CONTENT_TYPE_POLICY
    },
    {
      id: "permissions-policy",
      key: "Permissions-Policy",
      value: GLOBAL_SECURITY_HEADERS_PERMISSIONS_POLICY
    },
    {
      id: "cache-control",
      key: "Cache-Control",
      value: GLOBAL_SECURITY_HEADERS_CACHE_CONTROL
    }
  ];

  return {
    service: GLOBAL_SECURITY_HEADERS_SERVICE,
    version: GLOBAL_SECURITY_HEADERS_VERSION,
    headers
  };
}

export function verifyGlobalSecurityHeaders(): GlobalSecurityHeaderVerification {
  const set = getGlobalSecurityHeaderSet();

  const expectedHeaders = set.headers.map((header) => header.key);

  return {
    ok: expectedHeaders.length === 6,
    service: GLOBAL_SECURITY_HEADERS_SERVICE,
    version: GLOBAL_SECURITY_HEADERS_VERSION,
    timestamp: new Date().toISOString(),
    expectedHeaders,
    globalEnforcementEnabled: true,
    transportSecurityEnabled: false,
    status: expectedHeaders.length === 6 ? "pass" : "blocked"
  };
}
