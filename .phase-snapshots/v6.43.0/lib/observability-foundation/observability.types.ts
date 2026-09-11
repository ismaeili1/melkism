export type ObservabilityLevel =
  | "debug"
  | "info"
  | "warning"
  | "error";

export type ObservabilityEvent = {
  id: string;
  timestamp: string;
  level: ObservabilityLevel;
  name: string;
  message: string;
  source: string;
};

export type RuntimeMetrics = {
  uptimeSeconds: number;
  rssBytes: number;
  heapTotalBytes: number;
  heapUsedBytes: number;
  externalBytes: number;
  arrayBuffersBytes: number;
};

export type ObservabilityReport = {
  ok: boolean;
  service: "MELKISM";
  version: "v6.5";
  environment: string;
  timestamp: string;
  runtime: RuntimeMetrics;
  events: ObservabilityEvent[];
};
