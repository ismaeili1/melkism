import { NextResponse } from "next/server";

import {
  getReliabilityReport,
} from "@/lib/production-reliability";

export function GET() {
  const report =
    getReliabilityReport();

  return NextResponse.json(
    report,
    {
      status:
        report.ok
          ? 200
          : 503,
      headers: {
        "Cache-Control":
          "no-store, max-age=0",
      },
    },
  );
}
