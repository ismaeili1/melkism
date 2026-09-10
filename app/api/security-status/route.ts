import { NextResponse } from "next/server";

import {
  getSecurityReport,
} from "@/lib/application-security";

export function GET() {
  const report =
    getSecurityReport();

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
        "X-Content-Type-Options":
          "nosniff",
        "X-Frame-Options":
          "DENY",
        "Referrer-Policy":
          "strict-origin-when-cross-origin",
      },
    },
  );
}
