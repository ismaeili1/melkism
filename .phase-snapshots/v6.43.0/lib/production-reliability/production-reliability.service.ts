import {
  RELIABILITY_MAX_HEAP_WARNING_RATIO,
  RELIABILITY_MIN_UPTIME_SECONDS,
  RELIABILITY_SERVICE_NAME,
  RELIABILITY_VERSION,
} from "./production-reliability.constants";

import type {
  ReliabilityCheck,
  ReliabilityReport,
  RuntimeSnapshot,
} from "./production-reliability.types";

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

function getRuntimeSnapshot(): RuntimeSnapshot {
  const memory = process.memoryUsage();

  return {
    uptimeSeconds: process.uptime(),
    rssBytes: memory.rss,
    heapUsedBytes: memory.heapUsed,
    heapTotalBytes: memory.heapTotal,
  };
}

function createChecks(
  environment: string,
  runtime: RuntimeSnapshot,
): ReliabilityCheck[] {
  const heapRatio =
    runtime.heapTotalBytes > 0
      ? runtime.heapUsedBytes /
        runtime.heapTotalBytes
      : 0;

  return [
    {
      name: "runtime",
      status: "pass",
      message:
        "MELKISM runtime is responding.",
    },
    {
      name: "release-contract",
      status: "pass",
      message:
        `Production reliability contract ${RELIABILITY_VERSION} is active.`,
    },
    {
      name: "environment",
      status:
        environment === "unknown"
          ? "warning"
          : "pass",
      message:
        environment === "unknown"
          ? "NODE_ENV is not explicitly recognized."
          : `Environment detected as ${environment}.`,
    },
    {
      name: "uptime",
      status:
        runtime.uptimeSeconds >=
        RELIABILITY_MIN_UPTIME_SECONDS
          ? "pass"
          : "fail",
      message:
        runtime.uptimeSeconds >=
        RELIABILITY_MIN_UPTIME_SECONDS
          ? "Runtime uptime measurement is valid."
          : "Runtime uptime measurement is invalid.",
    },
    {
      name: "memory",
      status:
        heapRatio >=
        RELIABILITY_MAX_HEAP_WARNING_RATIO
          ? "warning"
          : "pass",
      message:
        heapRatio >=
        RELIABILITY_MAX_HEAP_WARNING_RATIO
          ? "Runtime heap usage is approaching the configured warning threshold."
          : "Runtime heap usage is within the configured baseline.",
    },
    {
      name: "secret-safety",
      status: "pass",
      message:
        "Reliability reporting does not expose environment secret values.",
    },
    {
      name: "schema-safety",
      status: "pass",
      message:
        "Reliability reporting performs no database migration.",
    },
  ];
}

export function getReliabilityReport(): ReliabilityReport {
  const environment =
    getEnvironment();

  const runtime =
    getRuntimeSnapshot();

  const checks =
    createChecks(
      environment,
      runtime,
    );

  const ok = checks.every(
    (check) =>
      check.status === "pass" ||
      check.status === "warning",
  );

  return {
    ok,
    service:
      RELIABILITY_SERVICE_NAME,
    version:
      RELIABILITY_VERSION,
    environment,
    timestamp:
      new Date().toISOString(),
    runtime,
    checks,
  };
}
