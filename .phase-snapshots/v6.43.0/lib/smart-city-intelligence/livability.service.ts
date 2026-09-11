import type {
  LivabilityAssessment,
  LivabilityDimension,
} from "./livability.types";

export class LivabilityService {
  assess(
    cityId: string | undefined,
    districtId: string | undefined,
    dimensions: LivabilityDimension[]
  ): LivabilityAssessment {
    const scores = dimensions
      .map((dimension) => dimension.score)
      .filter((value) => Number.isFinite(value));

    const overallScore =
      scores.length > 0
        ? scores.reduce(
            (sum, value) => sum + value,
            0
          ) / scores.length
        : 0;

    return {
      cityId,
      districtId,
      dimensions,
      overallScore,
      observations: [],
      recommendations: [],
      assessedAt: new Date().toISOString(),
    };
  }
}