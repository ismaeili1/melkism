import { NextResponse } from "next/server";

export async function GET(
  request: Request
) {
  const url = new URL(request.url);

  return NextResponse.json({
    ok: true,
    resource: "governance-decisions",
    organizationId:
      url.searchParams.get("organizationId"),
    tenantId:
      url.searchParams.get("tenantId"),
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
      resource: "governance-decision",
      mode: "foundation",
      accepted: body,
    },
    { status: 201 }
  );
}