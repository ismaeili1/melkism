import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json({
    ok: true,
    resource: "construction-progress-analysis",
    mode: "foundation",
    accepted: body,
  });
}