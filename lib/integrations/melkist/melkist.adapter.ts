import { melkistIntegrationConfig } from "./melkist.config";

export function isMelkistIntegrationEnabled(): boolean {
  return melkistIntegrationConfig.enabled;
}
