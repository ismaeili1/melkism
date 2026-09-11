import type {
  LOG_LEVELS,
} from "./observability.constants";

export type LogLevel =
  (typeof LOG_LEVELS)[number];

export type LogAttributes =
  Record<
    string,
    unknown
  >;

export type LogEntry = {
  timestamp: string;
  level: LogLevel;
  service: string;
  environment: string;
  message: string;
  requestId?: string;
  attributes?: LogAttributes;
};

export type MetricSnapshot = {
  name: string;
  count: number;
};

export type MetricsSnapshot = {
  counters: MetricSnapshot[];
};

export type HealthPayload = {
  status: "ok";
  service: string;
  version: string;
  timestamp: string;
};

export type ReadinessPayload = {
  status: "ready";
  service: string;
  version: string;
  timestamp: string;
};
