import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    module: "signals",
    platform: "MELKISM",
    phase: "2.83"
  });
}
