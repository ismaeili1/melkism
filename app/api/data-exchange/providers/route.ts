import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    module: "providers",
    platform: "MELKISM",
    phase: "2.82"
  });
}
