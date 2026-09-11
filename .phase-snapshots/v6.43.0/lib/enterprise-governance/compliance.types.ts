export type ComplianceFramework =
  | "internal"
  | "contractual"
  | "regulatory"
  | "industry"
  | "privacy"
  | "security"
  | "financial"
  | "environmental"
  | "custom";

export type ComplianceStatus =
  | "not_assessed"
  | "compliant"
  | "partially_compliant"
  | "non_compliant"
  | "under_review"
  | "not_applicable";

export interface ComplianceControl {
  id: string;
  framework: ComplianceFramework;
  code: string;
  title: string;
  description?: string;
  required: boolean;
  status: ComplianceStatus;
  ownerIdentityId?: string;
  evidenceRefs?: string[];
  assessedAt?: string;
  nextReviewAt?: string;
}

export interface ComplianceAssessment {
  id: string;
  organizationId?: string;
  tenantId?: string;
  framework: ComplianceFramework;
  status: ComplianceStatus;
  score: number;
  controls: ComplianceControl[];
  findings: string[];
  recommendations: string[];
  assessedAt: string;
}