export type OperationalCheckStatus =
  | "pass"
  | "warning"
  | "fail";

export type OperationalCheck = {
  name: string;
  status: OperationalCheckStatus;
  message: string;
};

export type OperationalReadiness = {
  ok: boolean;
  service: "MELKISM";
  version: "v6.1";
  environment: string;
  timestamp: string;
  checks: OperationalCheck[];
};
