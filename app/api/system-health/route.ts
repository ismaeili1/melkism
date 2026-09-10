import { NextResponse } from "next/server";

import {
  getProductionHealth,
} from "@/lib/production-release";

export function GET() {
  const health =
    getProductionHealth();

  return NextResponse.json(
    health,
    {
      status: health.ok ? 200 : 503,
      headers: {
        "Cache-Control":
          "no-store, max-age=0",
      },
    },
  );
}
