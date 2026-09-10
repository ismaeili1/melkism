import { NextResponse } from "next/server";

export async function GET(
  request: Request
) {
  const url = new URL(request.url);
  const transactionId =
    url.searchParams.get("transactionId");

  return NextResponse.json({
    ok: true,
    resource: "payments",
    transactionId,
    data: [],
    mode: "contract-only",
  });
}

export async function POST(
  request: Request
) {
  const body = await request.json();

  return NextResponse.json(
    {
      ok: true,
      resource: "payment",
      mode: "contract-only",
      accepted: body,
    },
    { status: 201 }
  );
}