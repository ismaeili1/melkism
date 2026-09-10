import {
  SECURITY_HEADER_SCOPE_API_CACHE_VALUE,
  SECURITY_HEADER_SCOPE_API_HEADERS,
  SECURITY_HEADER_SCOPE_GLOBAL_HEADERS,
  SECURITY_HEADER_SCOPE_SERVICE,
  SECURITY_HEADER_SCOPE_VERSION,
} from "./security-header-scope.constants";
import type {
  SecurityHeaderScopeVerification,
} from "./security-header-scope.types";

export function getSecurityHeaderScopeVerification(): SecurityHeaderScopeVerification {
  const globalHeaders = [...SECURITY_HEADER_SCOPE_GLOBAL_HEADERS];
  const apiOnlyHeaders = [...SECURITY_HEADER_SCOPE_API_HEADERS];

  const globalCacheControlEnabled = false;

  const apiCacheControlEnabled =
    apiOnlyHeaders.includes("Cache-Control") &&
    SECURITY_HEADER_SCOPE_API_CACHE_VALUE === "no-store, max-age=0";

  const hstsEnabled = false;

  const status =
    globalHeaders.length === 5 &&
    apiCacheControlEnabled &&
    !globalCacheControlEnabled &&
    !hstsEnabled
      ? "pass"
      : "blocked";

  return {
    ok: status !== "blocked",
    service: SECURITY_HEADER_SCOPE_SERVICE,
    version: SECURITY_HEADER_SCOPE_VERSION,
    timestamp: new Date().toISOString(),
    status,
    globalHeaders,
    apiOnlyHeaders,
    globalCacheControlEnabled,
    apiCacheControlEnabled,
    hstsEnabled
  };
}
