import type {
  ConstructionSustainabilityAssessment,
  ConstructionSustainabilityMetric,
} from "./construction-sustainability.types";

export class ConstructionSustainabilityService {
  assess(
    projectId: string,
    metrics: ConstructionSustainabilityMetric[]
  ): ConstructionSustainabilityAssessment {
    return {
      projectId,
      metrics,
      strengths: [],
      gaps: [],
      recommendations: [],
      confidence: metrics.length > 0 ? 0.5 : 0,
      assessedAt: new Date().toISOString(),
    };
  }
}