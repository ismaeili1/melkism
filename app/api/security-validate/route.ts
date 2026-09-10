import { NextResponse } from "next/server";

import {
  validateRequest,
} from "@/lib/application-security";

export async function POST(
  request: Request,
) {
  const url =
    new URL(request.url);

  const contentType =
    request.headers.get(
      "content-type",
    );

  const origin =
    request.headers.get(
      "origin",
    );

  const result =
    validateRequest({
      method: request.method,
      contentType,
      origin,
      requestPath: url.pathname,
    });

  return NextResponse.json(
    result,
    {
      status:
        result.ok
          ? 200
          : 400,
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
