import { NextResponse } from "next/server";

export async function GET(
  request: Request
) {
  const url = new URL(request.url);

  return NextResponse.json({
    ok: true,
    resource: "market-coverage",
    countryId:
      url.searchParams.get("countryId"),
    regionId:
      url.searchParams.get("regionId"),
    data: [],
  });
}