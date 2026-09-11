export type SecurityDeploymentAuditStatus =
  | "ready"
  | "review"
  | "blocked";

export type SecurityConfigurationKind =
  | "middleware"
  | "next-config";

export type SecurityConfigurationAudit = {
  exists: boolean;
  kind: SecurityConfigurationKind;
  files: string[];
  detectedHeaders: string[];
};

export type SecurityDeploymentAudit = {
  ok: boolean;
  service: "MELKISM";
  version: "v6.12";
  timestamp: string;
  status: SecurityDeploymentAuditStatus;
  globalConfigurationPresent: boolean;
  globalHeaderDefinitionsDetected: number;
  knownSecurityHeaders: string[];
  configuration: SecurityConfigurationAudit;
  enforcementReady: boolean;
  requiresManualReview: boolean;
  notes: string[];
};
