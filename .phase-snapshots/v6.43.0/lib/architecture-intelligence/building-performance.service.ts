import type {
  BuildingPerformanceAssessment,
  PerformanceMetric,
} from "./building-performance.types";

export class BuildingPerformanceService {
  assess(
    projectId: string,
    metrics: PerformanceMetric[] = []
  ): BuildingPerformanceAssessment {
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