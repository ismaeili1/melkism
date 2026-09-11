export const OBSERVABILITY_VERSION =
  "6.29.0";

export const SERVICE_NAME =
  "melkism";

export const SERVICE_ENVIRONMENT =
  process.env.NODE_ENV ?? "development";

export const LOG_LEVELS = [
  "debug",
  "info",
  "warn",
  "error",
] as const;

export const DEFAULT_LOG_LEVEL =
  "info";

export const MAX_LOG_MESSAGE_LENGTH =
  4000;

export const MAX_LOG_ATTRIBUTES =
  32;

export const REQUEST_ID_HEADER =
  "x-request-id";

export const RESPONSE_REQUEST_ID_HEADER =
  "x-request-id";

export const HEALTH_STATUS =
  "ok";

export const READINESS_STATUS =
  "ready";

export const MAX_METRIC_NAMES =
  128;

export const MAX_METRIC_COUNTERS =
  1024;
