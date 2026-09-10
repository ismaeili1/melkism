import { NextResponse } from "next/server";
import { CONSTRUCTION_INTELLIGENCE_VERSION } from "@/lib/construction-intelligence/construction.constants";

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "construction-intelligence",
    version: CONSTRUCTION_INTELLIGENCE_VERSION,
    status: "ready",
  });
}