import type {
  ConstructionRisk,
  ConstructionRiskCategory,
} from "./construction-risk.types";

export interface CreateConstructionRiskInput {
  projectId: string;
  category: ConstructionRiskCategory;
  title: string;
  description: string;
  probability: number;
  impact: number;
  mitigation?: string[];
}

export class ConstructionRiskService {
  create(
    input: CreateConstructionRiskInput
  ): ConstructionRisk {
    const probability = Math.max(
      0,
      Math.min(1, input.probability)
    );

    const impact = Math.max(
      0,
      Math.min(1, input.impact)
    );

    const score = probability * impact;

    let severity: ConstructionRisk["severity"] = "low";

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
      projectId: input.projectId,
      category: input.category,
      title: input.title,
      description: input.description,
      probability,
      impact,
      score,
      severity,
      mitigation: input.mitigation,
      status: "open",
      createdAt: now,
      updatedAt: now,
    };
  }
}