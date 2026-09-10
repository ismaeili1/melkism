export type DeploymentCheckStatus =
  | "pass"
  | "warning"
  | "fail";

export type DeploymentCheck = {
  name: string;
  status: DeploymentCheckStatus;
  message: string;
};

export type DeploymentEnvironment =
  | "development"
  | "test"
  | "production"
  | "unknown";

export type DeploymentReadiness = {
  service: "MELKISM";
  version: "v6.4";
  status: DeploymentCheckStatus;
  environment: DeploymentEnvironment;
  timestamp: string;
  checks: DeploymentCheck[];
};
