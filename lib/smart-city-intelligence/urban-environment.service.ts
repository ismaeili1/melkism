import type {
  UrbanEnvironmentAssessment,
  UrbanEnvironmentMetric,
} from "./urban-environment.types";

export class UrbanEnvironmentService {
  assess(
    cityId: string | undefined,
    districtId: string | undefined,
    metrics: UrbanEnvironmentMetric[]
  ): UrbanEnvironmentAssessment {
    const thresholdBreaches = metrics.filter(
      (metric) =>
        metric.value !== undefined &&
        metric.threshold !== undefined &&
        metric.value > metric.threshold
    ).length;

    let environmentalRisk:
      UrbanEnvironmentAssessment["environmentalRisk"] =
      "unknown";

    if (metrics.length > 0) {
      if (thresholdBreaches >= 3) {
        environmentalRisk = "critical";
      } else if (thresholdBreaches === 2) {
        environmentalRisk = "high";
      } else if (thresholdBreaches === 1) {
        environmentalRisk = "medium";
      } else {
        environmentalRisk = "low";
      }
    }

    return {
      cityId,
      districtId,
      metrics,
      environmentalRisk,
      observations: [],
      recommendations: [],
      assessedAt: new Date().toISOString(),
    };
  }
}