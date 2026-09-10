import type {
  MobilityAssessment,
  MobilityMetric,
} from "./mobility.types";

export class MobilityService {
  assess(
    cityId: string | undefined,
    districtId: string | undefined,
    metrics: MobilityMetric[]
  ): MobilityAssessment {
    const accessibilityValues = metrics
      .map((metric) => metric.accessibilityScore)
      .filter(
        (value): value is number =>
          value !== undefined && Number.isFinite(value)
      );

    const accessibilityScore =
      accessibilityValues.length > 0
        ? accessibilityValues.reduce(
            (sum, value) => sum + value,
            0
          ) / accessibilityValues.length
        : 0;

    return {
      cityId,
      districtId,
      metrics,
      congestionLevel: "unknown",
      accessibilityScore,
      observations: [],
      recommendations: [],
      assessedAt: new Date().toISOString(),
    };
  }
}