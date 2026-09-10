import { NextResponse } from "next/server";
import { SMART_CITY_INTELLIGENCE_VERSION } from "@/lib/smart-city-intelligence/smart-city.constants";

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "smart-city-intelligence",
    version: SMART_CITY_INTELLIGENCE_VERSION,
    status: "ready",
  });
}