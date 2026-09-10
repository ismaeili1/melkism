import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    module: "market",
    platform: "MELKISM",
    phase: "2.83"
  });
}
