export const SECURITY_ENFORCEMENT_SERVICE = "MELKISM";

export const SECURITY_ENFORCEMENT_VERSION = "v6.11";

export const SECURITY_ENFORCEMENT_MAX_HEADER_NAME_LENGTH = 128;

export const SECURITY_ENFORCEMENT_MAX_HEADER_VALUE_LENGTH = 4096;

export const SECURITY_ENFORCEMENT_ALLOWED_HEADER_NAMES = [
  "Content-Security-Policy",
  "Referrer-Policy",
  "X-Frame-Options",
  "X-Content-Type-Options",
  "Permissions-Policy",
  "Cache-Control",
  "Strict-Transport-Security"
] as const;

export const SECURITY_ENFORCEMENT_TRANSPORT_HEADER =
  "max-age=31536000; includeSubDomains";
