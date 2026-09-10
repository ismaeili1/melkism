import type {
  SecurityRisk,
  SecurityRiskCategory,
} from "./security-risk.types";

export interface CreateSecurityRiskInput {
  subjectId?: string;
  category: SecurityRiskCategory;
  score: number;
  indicators: string[];
  recommendations?: string[];
}

export class SecurityRiskService {
  create(
    input: CreateSecurityRiskInput
  ): SecurityRisk {
    const score = Math.max(
      0,
      Math.min(1, input.score)
    );

    let severity: SecurityRisk["severity"] =
      "low";

    if (score >= 0.75) {
      severity = "critical";
    } else if (score >= 0.5) {
      severity = "high";
    } else if (score >= 0.25) {
      severity = "medium";
    }

    return {
      id: crypto.randomUUID(),
      subjectId: input.subjectId,
      category: input.category,
      score,
      severity,
      indicators: input.indicators,
      recommendations: input.recommendations,
      detectedAt: new Date().toISOString(),
    };
  }
}