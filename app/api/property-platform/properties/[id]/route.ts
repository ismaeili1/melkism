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
    resource: "property",
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
    resource: "property",
    id,
    mode: "foundation",
    updated: body,
  });
}