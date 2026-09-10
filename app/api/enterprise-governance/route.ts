import { NextResponse } from "next/server";
import { ENTERPRISE_GOVERNANCE_VERSION } from "@/lib/enterprise-governance/governance.constants";

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "enterprise-governance",
    version: ENTERPRISE_GOVERNANCE_VERSION,
    status: "ready",
  });
}