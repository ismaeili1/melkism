import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    module: "quality",
    platform: "MELKISM",
    phase: "2.82"
  });
}
