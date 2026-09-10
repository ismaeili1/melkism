import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    module: "subscriptions",
    platform: "MELKISM",
    phase: "2.83"
  });
}
