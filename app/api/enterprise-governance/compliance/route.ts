import { NextResponse } from "next/server";

export async function GET(
  request: Request
) {
  const url = new URL(request.url);

  return NextResponse.json({
    ok: true,
    resource: "compliance",
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

  return NextResponse.json({
    ok: true,
    resource: "compliance-assessment",
    mode: "foundation",
    accepted: body,
  });
}