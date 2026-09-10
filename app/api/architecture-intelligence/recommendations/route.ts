import { NextResponse } from "next/server";

export async function GET(
  request: Request
) {
  const url = new URL(request.url);
  const projectId =
    url.searchParams.get("projectId");

  return NextResponse.json({
    ok: true,
    resource: "architecture-recommendations",
    projectId,
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
      resource: "architecture-recommendation",
      mode: "foundation",
      accepted: body,
    },
    { status: 201 }
  );
}