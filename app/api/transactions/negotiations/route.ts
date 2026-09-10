import { NextResponse } from "next/server";

export async function GET(
  request: Request
) {
  const url = new URL(request.url);
  const transactionId =
    url.searchParams.get("transactionId");

  return NextResponse.json({
    ok: true,
    resource: "negotiations",
    transactionId,
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
      resource: "negotiation",
      mode: "foundation",
      accepted: body,
    },
    { status: 201 }
  );
}