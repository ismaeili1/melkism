/**
 * MELKISM v6.35.0
 * Pre-launch audit types.
 */

export type PreLaunchGateStatus =
  | "PASS"
  | "WARNING"
  | "BLOCKED";

export interface PreLaunchGate {
  id: string;
  name: string;
  status: PreLaunchGateStatus;
  detail: string;
}

export interface PreLaunchAuditReport {
  phase: string;
  stage: string;
  generatedAt: string;
  overall:
    "PASS" |
    "WARNING" |
    "BLOCKED";
  gates: PreLaunchGate[];
  summary: {
    pass: number;
    warning: number;
    blocked: number;
  };
}
