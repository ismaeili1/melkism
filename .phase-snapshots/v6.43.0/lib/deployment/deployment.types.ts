/**
 * MELKISM v6.32.0
 * Production deployment readiness types.
 */

export type DeploymentReadinessLevel =
  | "ready"
  | "warning"
  | "blocked";

export interface DeploymentCheck {
  name: string;
  level: DeploymentReadinessLevel;
  message: string;
}

export interface DeploymentReadinessReport {
  level: DeploymentReadinessLevel;
  generatedAt: string;
  checks: DeploymentCheck[];
  summary: {
    ready: number;
    warning: number;
    blocked: number;
  };
}

export interface DeploymentEnvironmentAudit {
  referencedVariables: string[];
  secretLikeVariables: string[];
  hasLocalEnvFile: boolean;
  hasLocalEnvExample: boolean;
}
