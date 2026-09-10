import { NextResponse } from "next/server";
import { applySecurityHeaders } from "@/lib/security-global-headers/security-global-headers.next";
import { verifyGlobalSecurityHeaders } from "@/lib/security-global-headers/security-global-headers.service";

export function GET(): NextResponse {
  const headers = new Headers();

  applySecurityHeaders(headers);

  const verification = verifyGlobalSecurityHeaders();

  return NextResponse.json(verification, {
    status: verification.status === "blocked" ? 503 : 200,
    headers
  });
}
