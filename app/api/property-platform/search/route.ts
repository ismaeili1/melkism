import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const url = new URL(request.url);

  const query = url.searchParams.get("q") ?? "";
  const city = url.searchParams.get("city") ?? "";
  const propertyType = url.searchParams.get("propertyType") ?? "";

  return NextResponse.json({
    ok: true,
    resource: "property-search",
    query: {
      q: query,
      city,
      propertyType,
    },
    data: [],
  });
}