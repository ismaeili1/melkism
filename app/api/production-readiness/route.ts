import { NextResponse } from "next/server";

import {
  getOperationalReadiness,
} from "@/lib/production-operations";

export function GET() {
  const result =
    getOperationalReadiness();

  return NextResponse.json(
    result,
    {
      status: result.ok
        ? 200
        : 503,
      headers: {
        "Cache-Control":
          "no-store, max-age=0",
      },
    },
  );
}
