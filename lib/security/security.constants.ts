export const SECURITY_VERSION =
  "6.30.0";

export const SECURITY_HEADERS = {
  CONTENT_SECURITY_POLICY:
    "default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; object-src 'none'",
  REFERRER_POLICY:
    "strict-origin-when-cross-origin",
  X_FRAME_OPTIONS:
    "DENY",
  X_CONTENT_TYPE_OPTIONS:
    "nosniff",
  PERMISSIONS_POLICY:
    "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
  STRICT_TRANSPORT_SECURITY:
    "max-age=31536000; includeSubDomains",
} as const;

export const SECURITY_MAX_ENV_NAME_LENGTH =
  128;

export const SECURITY_SENSITIVE_ENV_PATTERNS = [
  "PASSWORD",
  "SECRET",
  "TOKEN",
  "API_KEY",
  "PRIVATE_KEY",
  "DATABASE_URL",
  "AUTH_SECRET",
  "NEXTAUTH_SECRET",
] as const;

export const SECURITY_AUDIT_LEVELS = [
  "info",
  "low",
  "moderate",
  "high",
  "critical",
] as const;
