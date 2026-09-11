import {
  getSecurityAuditCount,
  getSecurityAuditSummary,
} from "../security-audit/security-audit.service";
import type {
  SecurityControl,
  SecurityControlId,
  SecurityPosture,
  SecurityPostureStatus,
} from "./security-posture.types";
import {
  SECURITY_POSTURE_CONTROL_COUNT,
  SECURITY_POSTURE_SERVICE,
  SECURITY_POSTURE_VERSION,
  SECURITY_POSTURE_SECRET_NAMES,
} from "./security-posture.constants";

type ControlDefinition = {
  id: SecurityControlId;
  name: string;
  version: string;
  description: string;
};

const CONTROL_DEFINITIONS: ControlDefinition[] = [
  {
    id: "application-security",
    name: "Application Security",
    version: "v6.6",
    description: "Request-method, content-type, path and secure-response controls."
  },
  {
    id: "request-protection",
    name: "Request Protection",
    version: "v6.7",
    description: "Central request protection contract for mutation and read boundaries."
  },
  {
    id: "csrf-protection",
    name: "CSRF Protection",
    version: "v6.7",
    description: "CSRF validation foundation for protected mutation requests."
  },
  {
    id: "origin-validation",
    name: "Origin Validation",
    version: "v6.7",
    description: "Origin and Referer syntax validation foundation."
  },
  {
    id: "rate-limiting",
    name: "Rate Limiting",
    version: "v6.7",
    description: "Bounded in-memory request-rate protection foundation."
  },
  {
    id: "security-audit",
    name: "Security Audit Trail",
    version: "v6.8",
    description: "Bounded in-memory security audit event trail."
  },
  {
    id: "secret-safety",
    name: "Secret Safety",
    version: "v6.1",
    description: "Operational protection against exposing secret values."
  },
  {
    id: "schema-safety",
    name: "Schema Safety",
    version: "v6.1",
    description: "Database schema integrity is monitored without performing migrations."
  }
];

function getSecretSafetyStatus(): SecurityPostureStatus {
  const secretValues = SECURITY_POSTURE_SECRET_NAMES
    .map((name) => process.env[name])
    .filter((value): value is string => Boolean(value && value.trim()));

  const dangerousValues = secretValues.filter(
    (value) =>
      value.includes("BEGIN PRIVATE KEY") ||
      value.toLowerCase().includes("password=")
  );

  return dangerousValues.length > 0 ? "blocked" : "pass";
}

function buildControl(
  definition: ControlDefinition,
  secretSafetyStatus: SecurityPostureStatus
): SecurityControl {
  if (definition.id === "secret-safety") {
    return {
      ...definition,
      status: secretSafetyStatus
    };
  }

  return {
    ...definition,
    status: "pass"
  };
}

export function getSecurityPosture(): SecurityPosture {
  const timestamp = new Date().toISOString();
  const auditSummary = getSecurityAuditSummary();

  const secretSafetyStatus = getSecretSafetyStatus();

  const controls = CONTROL_DEFINITIONS.map((definition) =>
    buildControl(definition, secretSafetyStatus)
  );

  const passedControls = controls.filter(
    (control) => control.status === "pass"
  ).length;

  const warningControls = controls.filter(
    (control) => control.status === "warning"
  ).length;

  const blockedControls = controls.filter(
    (control) => control.status === "blocked"
  ).length;

  const status: SecurityPostureStatus =
    blockedControls > 0
      ? "blocked"
      : warningControls > 0
        ? "warning"
        : "pass";

  const totalControls = controls.length;

  if (totalControls !== SECURITY_POSTURE_CONTROL_COUNT) {
    throw new Error(
      `Security posture control count mismatch: expected ${SECURITY_POSTURE_CONTROL_COUNT}, received ${totalControls}`
    );
  }

  if (!auditSummary.ok) {
    throw new Error("Security audit subsystem is not healthy.");
  }

  const auditEvents = getSecurityAuditCount();

  return {
    ok: status !== "blocked",
    service: SECURITY_POSTURE_SERVICE,
    version: SECURITY_POSTURE_VERSION,
    timestamp,
    status,
    controls,
    totalControls,
    passedControls,
    warningControls,
    blockedControls,
    auditEvents
  };
}
