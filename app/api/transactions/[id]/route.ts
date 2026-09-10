import { NextResponse } from "next/server";

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  _request: Request,
  context: RouteContext
) {
  const { id } = await context.params;

  return NextResponse.json({
    ok: true,
    resource: "transaction",
    id,
    data: null,
  });
}

export async function PATCH(
  request: Request,
  context: RouteContext
) {
  const { id } = await context.params;
  const body = await request.json();

  return NextResponse.json({
    ok: true,
    resource: "transaction",
    id,
    mode: "foundation",
    updated: body,
  });
}