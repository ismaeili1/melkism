import { NextResponse } from "next/server";
import { getSecurityDeploymentAudit } from "@/lib/security-deployment-audit/security-deployment-audit.service";
import { enforceSecurityHeaders } from "@/lib/security-enforcement/security-enforcement.service";

export function GET(): NextResponse {
  const responseHeaders = new Headers();

  enforceSecurityHeaders(responseHeaders, {
    mode: "api",
    allowTransportSecurity: false
  });

  const audit = getSecurityDeploymentAudit();

  return NextResponse.json(audit, {
    status: audit.status === "blocked" ? 503 : 200,
    headers: responseHeaders
  });
}

