import { NextResponse } from "next/server";
import { getSecurityPolicy } from "@/lib/security-policy/security-policy.service";

export function GET(): NextResponse {
  try {
    const policy = getSecurityPolicy({
      includeTransportSecurity: false
    });

    return NextResponse.json(policy, {
      status: policy.status === "blocked" ? 503 : 200,
      headers: {
        "Cache-Control": "no-store, max-age=0",
        "X-Content-Type-Options": "nosniff",
        "X-Frame-Options": "DENY",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      }
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        service: "MELKISM",
        version: "v6.10",
        status: "blocked",
        timestamp: new Date().toISOString()
      },
      {
        status: 503,
        headers: {
          "Cache-Control": "no-store, max-age=0",
          "X-Content-Type-Options": "nosniff",
          "X-Frame-Options": "DENY",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        }
      }
    );
  }
}
