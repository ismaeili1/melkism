import {
  NextResponse,
} from "next/server";

import {
  getSecurityControlReport,
  protectRequest,
  type RequestIdentity,
} from "@/lib/request-protection";

function getIdentity(
  request: Request,
): RequestIdentity {
  const forwarded =
    request.headers.get(
      "x-forwarded-for",
    );

  const realIp =
    request.headers.get(
      "x-real-ip",
    );

  const identity =
    forwarded
      ?.split(",")[0]
      ?.trim() ||
    realIp?.trim() ||
    "anonymous";

  return {
    key: identity,
    source:
      forwarded || realIp
        ? "forwarded"
        : "anonymous",
  };
}

export async function GET(
  request: Request,
) {
  const url =
    new URL(request.url);

  if (
    url.searchParams.get(
      "report",
    ) === "true"
  ) {
    return NextResponse.json(
      getSecurityControlReport(),
      {
        status: 200,
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

  const result =
    protectRequest({
      method: request.method,
      pathname:
        url.pathname,
      origin:
        request.headers.get(
          "origin",
        ),
      referer:
        request.headers.get(
          "referer",
        ),
      contentType:
        request.headers.get(
          "content-type",
        ),
      identity:
        getIdentity(request),
    });

  return NextResponse.json(
    result,
    {
      status:
        result.ok
          ? 200
          : result.status ===
            "rate-limited"
            ? 429
            : 403,
      headers: {
        "Cache-Control":
          "no-store, max-age=0",
        "X-Content-Type-Options":
          "nosniff",
        "X-Frame-Options":
          "DENY",
        "Referrer-Policy":
          "strict-origin-when-cross-origin",
        ...(result.retryAfterSeconds
          ? {
              "Retry-After":
                String(
                  result.retryAfterSeconds,
                ),
            }
          : {}),
      },
    },
  );
}

export async function POST(
  request: Request,
) {
  const url =
    new URL(request.url);

  const forwarded =
    request.headers.get(
      "x-forwarded-for",
    );

  const realIp =
    request.headers.get(
      "x-real-ip",
    );

  const identity =
    forwarded
      ?.split(",")[0]
      ?.trim() ||
    realIp?.trim() ||
    "anonymous";

  const result =
    protectRequest({
      method:
        request.method,
      pathname:
        url.pathname,
      origin:
        request.headers.get(
          "origin",
        ),
      referer:
        request.headers.get(
          "referer",
        ),
      contentType:
        request.headers.get(
          "content-type",
        ),
      identity: {
        key: identity,
        source:
          forwarded || realIp
            ? "forwarded"
            : "anonymous",
      },
    });

  return NextResponse.json(
    result,
    {
      status:
        result.ok
          ? 200
          : result.status ===
            "rate-limited"
            ? 429
            : 403,
      headers: {
        "Cache-Control":
          "no-store, max-age=0",
        "X-Content-Type-Options":
          "nosniff",
        "X-Frame-Options":
          "DENY",
        "Referrer-Policy":
          "strict-origin-when-cross-origin",
        ...(result.retryAfterSeconds
          ? {
              "Retry-After":
                String(
                  result.retryAfterSeconds,
                ),
            }
          : {}),
      },
    },
  );
}
