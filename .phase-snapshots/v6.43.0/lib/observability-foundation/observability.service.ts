import {
  OBSERVABILITY_EVENT_LIMIT,
  OBSERVABILITY_EVENT_SOURCE,
  OBSERVABILITY_SERVICE,
  OBSERVABILITY_VERSION,
} from "./observability.constants";

import type {
  ObservabilityEvent,
  ObservabilityReport,
  RuntimeMetrics,
} from "./observability.types";

function getEnvironment(): string {
  const value = process.env.NODE_ENV;

  if (
    value === "production" ||
    value === "development" ||
    value === "test"
  ) {
    return value;
  }

  return "unknown";
}

function getRuntimeMetrics(): RuntimeMetrics {
  const memory = process.memoryUsage();

  return {
    uptimeSeconds:
      process.uptime(),
    rssBytes:
      memory.rss,
    heapTotalBytes:
      memory.heapTotal,
    heapUsedBytes:
      memory.heapUsed,
    externalBytes:
      memory.external,
    arrayBuffersBytes:
      memory.arrayBuffers,
  };
}

function createEvent(
  level: ObservabilityEvent["level"],
  name: string,
  message: string,
): ObservabilityEvent {
  return {
    id:
      `obs-${Date.now()}-${Math.random()
        .toString(36)
        .slice(2, 10)}`,
    timestamp:
      new Date().toISOString(),
    level,
    name,
    message,
    source:
      OBSERVABILITY_EVENT_SOURCE,
  };
}

function createEvents(
  environment: string,
  runtime: RuntimeMetrics,
): ObservabilityEvent[] {
  const heapRatio =
    runtime.heapTotalBytes > 0
      ? runtime.heapUsedBytes /
        runtime.heapTotalBytes
      : 0;

  const events: ObservabilityEvent[] = [
    createEvent(
      "info",
      "runtime.available",
      "MELKISM runtime metrics are available.",
    ),
    createEvent(
      "info",
      "release.active",
      `Observability foundation ${OBSERVABILITY_VERSION} is active.`,
    ),
    createEvent(
      environment === "unknown"
        ? "warning"
        : "info",
      "environment.detected",
      environment === "unknown"
        ? "NODE_ENV is not explicitly recognized."
        : `Environment detected as ${environment}.`,
    ),
    createEvent(
      heapRatio > 0.9
        ? "warning"
        : "info",
      "runtime.memory",
      heapRatio > 0.9
        ? "Heap usage is approaching the runtime diagnostic threshold."
        : "Heap usage is within the runtime diagnostic baseline.",
    ),
  ];

  return events.slice(
    0,
    OBSERVABILITY_EVENT_LIMIT,
  );
}

export function getObservabilityReport(): ObservabilityReport {
  const environment =
    getEnvironment();

  const runtime =
    getRuntimeMetrics();

  const events =
    createEvents(
      environment,
      runtime,
    );

  const hasError =
    events.some(
      (event) =>
        event.level === "error",
    );

  return {
    ok: !hasError,
    service:
      OBSERVABILITY_SERVICE,
    version:
      OBSERVABILITY_VERSION,
    environment,
    timestamp:
      new Date().toISOString(),
    runtime,
    events,
  };
}

export function createOperationalEvent(
  name: string,
  message: string,
  level: ObservabilityEvent["level"] = "info",
): ObservabilityEvent {
  return createEvent(
    level,
    name,
    message,
  );
}
