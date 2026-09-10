import { NextResponse } from "next/server";

export async function GET(
  request: Request
) {
  const url = new URL(request.url);

  return NextResponse.json({
    ok: true,
    resource: "data-governance",
    tenantId:
      url.searchParams.get("tenantId"),
    resourceType:
      url.searchParams.get("resourceType"),
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
      resource: "data-governance-record",
      mode: "foundation",
      accepted: body,
    },
    { status: 201 }
  );
}