export type RuntimeEnvironment = "development" | "test" | "production" | "unknown";

export type RuntimeConfigurationStatus = {
  phase: "v6.17";
  environment: RuntimeEnvironment;
  productionReady: boolean;
  hasPackageJson: boolean;
  hasStartScript: boolean;
  hasBuildScript: boolean;
  hasEnvironmentContract: boolean;
};

export type EnvironmentVariableContract = {
  name: string;
  sourceCount: number;
  exposedToBrowser: boolean;
  documented: boolean;
};
