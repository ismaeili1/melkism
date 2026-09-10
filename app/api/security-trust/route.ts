import { NextResponse } from "next/server";
import { SECURITY_TRUST_VERSION } from "@/lib/security-trust/security.constants";

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "security-trust",
    version: SECURITY_TRUST_VERSION,
    status: "ready",
  });
}