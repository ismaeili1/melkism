import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    resource: "security-policies",
    data: [],
  });
}

export async function POST(
  request: Request
) {
  const body = await request.json();

  return NextResponse.json(
    {
      ok: true,
      resource: "security-policy",
      mode: "foundation",
      accepted: body,
    },
    { status: 201 }
  );
}