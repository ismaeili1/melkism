import {
  SECURITY_DEPLOYMENT_AUDIT_CONFIG_FILES,
  SECURITY_DEPLOYMENT_AUDIT_KNOWN_HEADERS,
  SECURITY_DEPLOYMENT_AUDIT_SERVICE,
  SECURITY_DEPLOYMENT_AUDIT_VERSION,
} from "./security-deployment-audit.constants";
import type {
  SecurityConfigurationAudit,
  SecurityConfigurationKind,
  SecurityDeploymentAudit,
  SecurityDeploymentAuditStatus,
} from "./security-deployment-audit.types";

function getConfigurationKind(
  file: string
): SecurityConfigurationKind {
  return file.includes("middleware")
    ? "middleware"
    : "next-config";
}

function getCandidateFiles(): string[] {
  return [...SECURITY_DEPLOYMENT_AUDIT_CONFIG_FILES];
}

function getDetectedHeaders(): string[] {
  return [];
}

export function getSecurityDeploymentAudit(): SecurityDeploymentAudit {
  const files = getCandidateFiles();
  const detectedHeaders = getDetectedHeaders();

  const middlewareFiles = files.filter((file) =>
    file.includes("middleware")
  );

  const nextConfigFiles = files.filter((file) =>
    file.includes("next.config")
  );

  const configuration: SecurityConfigurationAudit = {
    exists: false,
    kind: middlewareFiles.length > 0
      ? getConfigurationKind(middlewareFiles[0])
      : "next-config",
    files: [],
    detectedHeaders
  };

  const knownSecurityHeaders = [...SECURITY_DEPLOYMENT_AUDIT_KNOWN_HEADERS];

  const notes: string[] = [
    "Global configuration is audited by the deployment PowerShell validator.",
    "The runtime service does not inspect source files.",
    "No global middleware or Next.js configuration is modified by v6.12.",
    "Global CSP activation remains a controlled deployment decision."
  ];

  const status: SecurityDeploymentAuditStatus = "review";

  return {
    ok: true,
    service: SECURITY_DEPLOYMENT_AUDIT_SERVICE,
    version: SECURITY_DEPLOYMENT_AUDIT_VERSION,
    timestamp: new Date().toISOString(),
    status,
    globalConfigurationPresent: false,
    globalHeaderDefinitionsDetected: 0,
    knownSecurityHeaders,
    configuration,
    enforcementReady: false,
    requiresManualReview: true,
    notes
  };
}
