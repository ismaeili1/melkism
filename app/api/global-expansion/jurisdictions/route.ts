import { NextResponse } from "next/server";

export async function GET(
  request: Request
) {
  const url = new URL(request.url);

  return NextResponse.json({
    ok: true,
    resource: "jurisdictions",
    countryId:
      url.searchParams.get("countryId"),
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
      resource: "jurisdiction",
      mode: "foundation",
      accepted: body,
    },
    { status: 201 }
  );
}