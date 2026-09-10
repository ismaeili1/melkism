import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    module: "property",
    platform: "MELKISM",
    phase: "2.83"
  });
}
