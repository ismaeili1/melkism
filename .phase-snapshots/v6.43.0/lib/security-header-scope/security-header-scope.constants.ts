export const SECURITY_HEADER_SCOPE_SERVICE = "MELKISM";

export const SECURITY_HEADER_SCOPE_VERSION = "v6.14";

export const SECURITY_HEADER_SCOPE_GLOBAL_HEADERS = [
  "Content-Security-Policy",
  "Referrer-Policy",
  "X-Frame-Options",
  "X-Content-Type-Options",
  "Permissions-Policy"
] as const;

export const SECURITY_HEADER_SCOPE_API_HEADERS = [
  "Cache-Control"
] as const;

export const SECURITY_HEADER_SCOPE_API_CACHE_VALUE =
  "no-store, max-age=0";
