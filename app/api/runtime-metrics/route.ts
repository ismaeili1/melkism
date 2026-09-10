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
      environment:
        report.environment,
      timestamp:
        report.timestamp,
      runtime:
        report.runtime,
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
