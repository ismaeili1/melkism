import { NextResponse } from "next/server";
import { GLOBAL_EXPANSION_VERSION } from "@/lib/global-expansion/global-expansion.constants";

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "global-expansion",
    version: GLOBAL_EXPANSION_VERSION,
    status: "ready",
  });
}