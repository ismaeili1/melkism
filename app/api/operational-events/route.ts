import { NextResponse } from "next/server";

import {
  getObservabilityReport,
} from "@/lib/observability-foundation";

export function GET() {
  const report =
    getObservabilityReport();

  return NextResponse.json(
    {
      service:
        report.service,
      version:
        report.version,
      timestamp:
        report.timestamp,
      events:
        report.events,
    },
    {
      status: 200,
      headers: {
        "Cache-Control":
          "no-store, max-age=0",
      },
    },
  );
}
