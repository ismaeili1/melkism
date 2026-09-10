export const SECURITY_DEPLOYMENT_AUDIT_SERVICE = "MELKISM";

export const SECURITY_DEPLOYMENT_AUDIT_VERSION = "v6.12";

export const SECURITY_DEPLOYMENT_AUDIT_KNOWN_HEADERS = [
  "Content-Security-Policy",
  "Referrer-Policy",
  "X-Frame-Options",
  "X-Content-Type-Options",
  "Permissions-Policy",
  "Strict-Transport-Security",
  "Cache-Control"
] as const;

export const SECURITY_DEPLOYMENT_AUDIT_CONFIG_FILES = [
  "middleware.ts",
  "middleware.js",
  "middleware.mjs",
  "middleware.cjs",
  "src/middleware.ts",
  "src/middleware.js",
  "src/middleware.mjs",
  "src/middleware.cjs",
  "next.config.ts",
  "next.config.js",
  "next.config.mjs",
  "next.config.cjs"
] as const;
