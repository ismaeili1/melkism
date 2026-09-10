import { NextResponse } from "next/server";

export async function GET(
  request: Request
) {
  const url = new URL(request.url);
  const transactionId =
    url.searchParams.get("transactionId");

  return NextResponse.json({
    ok: true,
    resource: "offers",
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
      resource: "offer",
      mode: "foundation",
      accepted: body,
    },
    { status: 201 }
  );
}