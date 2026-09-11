import {
  SERVICE_NAME,
  OBSERVABILITY_VERSION,
} from "@/lib/observability/observability.constants";

import {
  getRequestId,
  withRequestId,
} from "@/lib/observability/request-context";

import type {
  HealthPayload,
} from "@/lib/observability/observability.types";

export const dynamic =
  "force-dynamic";

export async function GET(
  request: Request
): Promise<Response> {
  const requestId =
    getRequestId(request);

  const payload:
    HealthPayload = {
      status: "ok",
      service:
        SERVICE_NAME,
      version:
        OBSERVABILITY_VERSION,
      timestamp:
        new Date().toISOString(),
    };

  const response =
    Response.json(
      payload,
      {
        status: 200,
        headers: {
          "Cache-Control":
            "no-store, max-age=0",
        },
      }
    );

  return withRequestId(
    response,
    requestId
  );
}
