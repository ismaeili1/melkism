export type ReliabilityStatus =
  | "pass"
  | "warning"
  | "fail";

export type ReliabilityCheck = {
  name: string;
  status: ReliabilityStatus;
  message: string;
};

export type RuntimeSnapshot = {
  uptimeSeconds: number;
  rssBytes: number;
  heapUsedBytes: number;
  heapTotalBytes: number;
};

export type ReliabilityReport = {
  ok: boolean;
  service: "MELKISM";
  version: "v6.2";
  environment: string;
  timestamp: string;
  runtime: RuntimeSnapshot;
  checks: ReliabilityCheck[];
};
