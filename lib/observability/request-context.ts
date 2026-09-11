import {
  REQUEST_ID_HEADER,
  RESPONSE_REQUEST_ID_HEADER,
} from "./observability.constants";

import {
  incrementMetric,
} from "./metrics";

export function getRequestId(
  request: Request
): string {
  const supplied =
    request.headers.get(
      REQUEST_ID_HEADER
    );

  if (
    supplied &&
    /^[A-Za-z0-9._:-]{1,128}$/.test(
      supplied
    )
  ) {
    return supplied;
  }

  return crypto.randomUUID();
}

export function createRequestTimer():
  () => number {
  const startedAt =
    performance.now();

  return () =>
    Math.max(
      0,
      performance.now() -
        startedAt
    );
}

export function recordRequestMetric(
  method: string,
  route: string,
  status: number,
  durationMs: number
): void {
  const normalizedMethod =
    method
      .toUpperCase()
      .replace(
        /[^A-Z]/g,
        ""
      );

  const normalizedRoute =
    route
      .replace(
        /[^A-Za-z0-9/_\-:[\].]/g,
        "_"
      )
      .slice(0, 160);

  incrementMetric(
    `http.requests.${normalizedMethod}`
  );

  incrementMetric(
    `http.status.${status}`
  );

  incrementMetric(
    `http.route.${normalizedRoute}.requests`
  );

  if (
    durationMs >= 1000
  ) {
    incrementMetric(
      "http.latency.over_1s"
    );
  }

  if (
    durationMs >= 3000
  ) {
    incrementMetric(
      "http.latency.over_3s"
    );
  }
}

export function withRequestId(
  response: Response,
  requestId: string
): Response {
  response.headers.set(
    RESPONSE_REQUEST_ID_HEADER,
    requestId
  );

  return response;
}
