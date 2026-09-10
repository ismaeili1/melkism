import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  const body = await request.json();

  return NextResponse.json({
    ok: true,
    resource: "authorization",
    mode: "foundation",
    decision: "not_evaluated_by_http_adapter",
    input: body,
  });
}