export const GLOBAL_SECURITY_HEADERS_SERVICE = "MELKISM";

export const GLOBAL_SECURITY_HEADERS_VERSION = "v6.13";

export const GLOBAL_SECURITY_HEADERS_CSP =
  "default-src 'self'; " +
  "base-uri 'self'; " +
  "form-action 'self'; " +
  "frame-ancestors 'none'; " +
  "object-src 'none';";

export const GLOBAL_SECURITY_HEADERS_REFERRER_POLICY =
  "strict-origin-when-cross-origin";

export const GLOBAL_SECURITY_HEADERS_FRAME_POLICY =
  "DENY";

export const GLOBAL_SECURITY_HEADERS_CONTENT_TYPE_POLICY =
  "nosniff";

export const GLOBAL_SECURITY_HEADERS_PERMISSIONS_POLICY =
  "camera=(), microphone=(), geolocation=(), payment=(), usb=()";

export const GLOBAL_SECURITY_HEADERS_CACHE_CONTROL =
  "no-store, max-age=0";
