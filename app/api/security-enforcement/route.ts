import { NextResponse } from "next/server";
import { enforceSecurityHeaders } from "@/lib/security-enforcement/security-enforcement.service";

export function GET(): NextResponse {
  const responseHeaders = new Headers();

  const enforcement = enforceSecurityHeaders(responseHeaders, {
    mode: "api",
    allowTransportSecurity: false
  });

  const payload = {
    ...enforcement,
    policyReady: enforcement.status !== "blocked",
    globalEnforcement: false
  };

  return NextResponse.json(payload, {
    status: enforcement.status === "blocked" ? 503 : 200,
    headers: responseHeaders
  });
}
