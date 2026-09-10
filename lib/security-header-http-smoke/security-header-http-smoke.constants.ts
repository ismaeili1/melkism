import type { HttpHeaderExpectation } from "./security-header-http-smoke.types";

export const SECURITY_HEADER_HTTP_SMOKE_EXPECTATIONS: HttpHeaderExpectation[] = [
  {
    name: "Content-Security-Policy",
    expectedValue:
      "default-src 'self'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; object-src 'none';",
    requiredOn: "global"
  },
  {
    name: "Referrer-Policy",
    expectedValue: "strict-origin-when-cross-origin",
    requiredOn: "global"
  },
  {
    name: "X-Frame-Options",
    expectedValue: "DENY",
    requiredOn: "global"
  },
  {
    name: "X-Content-Type-Options",
    expectedValue: "nosniff",
    requiredOn: "global"
  },
  {
    name: "Permissions-Policy",
    expectedValue:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
    requiredOn: "global"
  },
  {
    name: "Cache-Control",
    expectedValue: "no-store, max-age=0",
    requiredOn: "api"
  }
];

export const SECURITY_HEADER_HTTP_SMOKE_POLICY = {
  hstsEnabled: false,
  testRoutes: {
    global: "/fa",
    api: "/api/security-header-http-smoke"
  }
} as const;
