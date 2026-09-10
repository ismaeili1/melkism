export const SECURITY_POLICY_SERVICE = "MELKISM";

export const SECURITY_POLICY_VERSION = "v6.10";

export const SECURITY_POLICY_MAX_HEADER_VALUE_LENGTH = 4096;

export const SECURITY_POLICY_DEFAULT_HEADERS = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Cache-Control": "no-store, max-age=0"
} as const;

export const SECURITY_POLICY_CSP =
  "default-src 'self'; " +
  "base-uri 'self'; " +
  "form-action 'self'; " +
  "frame-ancestors 'none'; " +
  "object-src 'none';";

export const SECURITY_POLICY_PERMISSIONS =
  "camera=(), microphone=(), geolocation=(), payment=(), usb=()";

export const SECURITY_POLICY_TRANSPORT =
  "max-age=31536000; includeSubDomains";
