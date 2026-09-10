import {
  NextResponse,
} from "next/server";

import {
  getSecurityAuditSummary,
} from "@/lib/security-audit";

export function GET() {
  const summary =
    getSecurityAuditSummary();

  return NextResponse.json(
    summary,
    {
      status:
        summary.ok
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
