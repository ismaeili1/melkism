export type ProductionEnvironment =
  | "development"
  | "test"
  | "production"
  | "unknown";

export type ProductionCheckStatus =
  | "pass"
  | "warning"
  | "fail";

export type ProductionCheck = {
  name: string;
  status: ProductionCheckStatus;
  message: string;
};

export type ProductionHealth = {
  ok: boolean;
  service: "MELKISM";
  version: "v6.0";
  environment: ProductionEnvironment;
  timestamp: string;
  checks: ProductionCheck[];
};
