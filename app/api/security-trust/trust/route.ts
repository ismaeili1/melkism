import { NextResponse } from "next/server";

export async function GET(
  request: Request
) {
  const url = new URL(request.url);

  return NextResponse.json({
    ok: true,
    resource: "trust",
    subjectId: url.searchParams.get("subjectId"),
    data: null,
  });
}

export async function POST(
  request: Request
) {
  const body = await request.json();

  return NextResponse.json(
    {
      ok: true,
      resource: "trust",
      mode: "foundation",
      accepted: body,
    },
    { status: 201 }
  );
}