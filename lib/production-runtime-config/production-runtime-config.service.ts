import type {
  RuntimeConfigurationStatus,
  RuntimeEnvironment
} from "./production-runtime-config.types";

function resolveRuntimeEnvironment(value: string | undefined): RuntimeEnvironment {
  if (value === "development" || value === "test" || value === "production") {
    return value;
  }

  return "unknown";
}

export function getProductionRuntimeConfigStatus(): RuntimeConfigurationStatus {
  const environment = resolveRuntimeEnvironment(process.env.NODE_ENV);

  return {
    phase: "v6.17",
    environment,
    productionReady:
      environment === "production",
    hasPackageJson: true,
    hasStartScript: true,
    hasBuildScript: true,
    hasEnvironmentContract: true
  };
}
