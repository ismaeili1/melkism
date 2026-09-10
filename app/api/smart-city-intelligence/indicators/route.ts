import { NextResponse } from "next/server";

export async function GET(
  request: Request
) {
  const url = new URL(request.url);

  return NextResponse.json({
    ok: true,
    resource: "urban-indicators",
    cityId: url.searchParams.get("cityId"),
    districtId: url.searchParams.get("districtId"),
    category: url.searchParams.get("category"),
    data: [],
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json(
    {
      ok: true,
      resource: "urban-indicator",
      mode: "foundation",
      accepted: body,
    },
    { status: 201 }
  );
}