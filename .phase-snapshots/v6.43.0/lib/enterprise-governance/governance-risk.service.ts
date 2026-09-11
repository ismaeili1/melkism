import type {
  GovernanceRisk,
  GovernanceRiskCategory,
} from "./governance-risk.types";

export interface CreateGovernanceRiskInput {
  organizationId?: string;
  tenantId?: string;
  category: GovernanceRiskCategory;
  title: string;
  description: string;
  probability: number;
  impact: number;
  ownerIdentityId?: string;
  mitigation?: string[];
}

export class GovernanceRiskService {
  create(
    input: CreateGovernanceRiskInput
  ): GovernanceRisk {
    const probability = Math.max(
      0,
      Math.min(1, input.probability)
    );

    const impact = Math.max(
      0,
      Math.min(1, input.impact)
    );

    const score =
      probability * impact;

    let severity: GovernanceRisk["severity"] =
      "low";

    if (score >= 0.75) {
      severity = "critical";
    } else if (score >= 0.5) {
      severity = "high";
    } else if (score >= 0.25) {
      severity = "medium";
    }

    const now = new Date().toISOString();

    return {
      id: crypto.randomUUID(),
      organizationId: input.organizationId,
      tenantId: input.tenantId,
      category: input.category,
      title: input.title,
      description: input.description,
      probability,
      impact,
      score,
      severity,
      ownerIdentityId: input.ownerIdentityId,
      mitigation: input.mitigation,
      status: "open",
      createdAt: now,
      updatedAt: now,
    };
  }
}