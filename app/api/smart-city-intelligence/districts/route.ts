import { NextResponse } from "next/server";

export async function GET(
  request: Request
) {
  const url = new URL(request.url);
  const cityId = url.searchParams.get("cityId");

  return NextResponse.json({
    ok: true,
    resource: "districts",
    cityId,
    data: [],
  });
}