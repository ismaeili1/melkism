import { NextResponse } from "next/server";
import { TRANSACTION_CORE_VERSION } from "@/lib/transactions/transaction.constants";

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "transactions",
    version: TRANSACTION_CORE_VERSION,
    status: "ready",
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  return NextResponse.json(
    {
      ok: true,
      resource: "transaction",
      mode: "foundation",
      accepted: body,
    },
    { status: 201 }
  );
}