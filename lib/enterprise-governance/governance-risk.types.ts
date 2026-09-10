export type GovernanceRiskCategory =
  | "strategic"
  | "operational"
  | "financial"
  | "security"
  | "privacy"
  | "compliance"
  | "technology"
  | "reputation"
  | "vendor"
  | "data"
  | "other";

export interface GovernanceRisk {
  id: string;
  organizationId?: string;
  tenantId?: string;
  category: GovernanceRiskCategory;
  title: string;
  description: string;
  probability: number;
  impact: number;
  score: number;
  severity: "low" | "medium" | "high" | "critical";
  ownerIdentityId?: string;
  mitigation?: string[];
  status: "open" | "monitoring" | "mitigated" | "accepted" | "closed";
  createdAt: string;
  updatedAt: string;
}