import { NextResponse } from "next/server";

export async function GET(
  request: Request
) {
  const url = new URL(request.url);
  const transactionId =
    url.searchParams.get("transactionId");

  return NextResponse.json({
    ok: true,
    resource: "transaction-parties",
    transactionId,
    data: [],
  });
}