import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    ok: true,
    resource: "architecture-projects",
    data: [],
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json(
    {
      ok: true,
      resource: "architecture-project",
      mode: "foundation",
      accepted: body,
    },
    { status: 201 }
  );
}