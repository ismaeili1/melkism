import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    resource: "media",
    data: [],
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json(
    {
      ok: true,
      resource: "media",
      accepted: body,
    },
    { status: 201 }
  );
}