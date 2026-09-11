import {
  SECURITY_HEADER_HTTP_SMOKE_EXPECTATIONS,
  SECURITY_HEADER_HTTP_SMOKE_POLICY
} from "./security-header-http-smoke.constants";
import type {
  HttpHeaderCheckResult,
  HttpSmokeReport
} from "./security-header-http-smoke.types";

export function buildHttpSmokeReport(
  headers: Record<string, string | null>
): HttpSmokeReport {
  const checks: HttpHeaderCheckResult[] =
    SECURITY_HEADER_HTTP_SMOKE_EXPECTATIONS.map((expectation) => {
      const actualValue = headers[expectation.name.toLowerCase()] ?? null;

      return {
        name: expectation.name,
        expectedValue: expectation.expectedValue,
        actualValue,
        matched: actualValue === expectation.expectedValue
      };
    });

  const matched = checks.every((check) => check.matched);

  return {
    phase: "v6.16",
    status: matched ? "pass" : "fail",
    generatedAt: new Date().toISOString(),
    expectations: SECURITY_HEADER_HTTP_SMOKE_EXPECTATIONS,
    checks
  };
}

export function getHttpSmokePolicy() {
  return SECURITY_HEADER_HTTP_SMOKE_POLICY;
}
