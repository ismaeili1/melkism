import { NextResponse } from "next/server";
import { PROPERTY_PLATFORM_VERSION } from "@/lib/property-platform/property.constants";

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "property-platform",
    version: PROPERTY_PLATFORM_VERSION,
    status: "ready",
  });
}