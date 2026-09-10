import { NextResponse } from "next/server";

import {
  getObservabilityReport,
} from "@/lib/observability-foundation";

export function GET() {
  const report =
    getObservabilityReport();

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
