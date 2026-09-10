import { NextResponse } from "next/server";
import { getSecurityPosture } from "@/lib/security-posture/security-posture.service";

function createSecurityHeaders(): Headers {
  const headers = new Headers();

  headers.set("Cache-Control", "no-store, max-age=0");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Frame-Options", "DENY");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");

  return headers;
}

export function GET(): NextResponse {
  try {
    const posture = getSecurityPosture();

    return NextResponse.json(posture, {
      status: posture.status === "blocked" ? 503 : 200,
      headers: createSecurityHeaders()
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        service: "MELKISM",
        version: "v6.9",
        status: "blocked",
        timestamp: new Date().toISOString()
      },
      {
        status: 503,
        headers: createSecurityHeaders()
      }
    );
  }
}
