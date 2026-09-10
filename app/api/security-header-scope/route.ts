import { NextResponse } from "next/server";
import { getSecurityHeaderScopeVerification } from "@/lib/security-header-scope/security-header-scope.service";
import { applySecurityHeaders } from "@/lib/security-global-headers/security-global-headers.next";

export function GET(): NextResponse {
  const headers = new Headers();

  applySecurityHeaders(headers);
  headers.set("Cache-Control", "no-store, max-age=0");

  const verification = getSecurityHeaderScopeVerification();

  return NextResponse.json(verification, {
    status: verification.status === "blocked" ? 503 : 200,
    headers
  });
}
