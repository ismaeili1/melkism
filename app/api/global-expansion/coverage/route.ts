import { NextResponse } from "next/server";

export async function GET(
  request: Request
) {
  const url = new URL(request.url);

  return NextResponse.json({
    ok: true,
    resource: "global-coverage",
    scope:
      url.searchParams.get("scope"),
    scopeId:
      url.searchParams.get("scopeId"),
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
      resource: "global-coverage",
      mode: "foundation",
      accepted: body,
    },
    { status: 201 }
  );
}