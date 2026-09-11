import type {
  UrbanRisk,
  UrbanRiskCategory,
} from "./urban-risk.types";

export interface CreateUrbanRiskInput {
  cityId?: string;
  districtId?: string;
  category: UrbanRiskCategory;
  title: string;
  description: string;
  probability: number;
  impact: number;
  mitigation?: string[];
}

export class UrbanRiskService {
  create(
    input: CreateUrbanRiskInput
  ): UrbanRisk {
    const probability = Math.max(
      0,
      Math.min(1, input.probability)
    );

    const impact = Math.max(
      0,
      Math.min(1, input.impact)
    );

    const score = probability * impact;

    let severity: UrbanRisk["severity"] = "low";

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
      cityId: input.cityId,
      districtId: input.districtId,
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