import type {
  InfrastructureAssessment,
  InfrastructureAsset,
} from "./infrastructure.types";

export class InfrastructureService {
  assess(
    cityId: string | undefined,
    districtId: string | undefined,
    assets: InfrastructureAsset[]
  ): InfrastructureAssessment {
    const validUtilization = assets
      .map((asset) => asset.utilizationPercent)
      .filter(
        (value): value is number =>
          value !== undefined &&
          Number.isFinite(value)
      );

    const coverageScore =
      assets.length > 0 ? 1 : 0;

    let capacityRisk:
      InfrastructureAssessment["capacityRisk"] =
      "unknown";

    if (validUtilization.length > 0) {

      const averageUtilization =
        validUtilization.reduce(
          (sum, value) => sum + value,
          0
        ) / validUtilization.length;

      if (averageUtilization >= 90) {
        capacityRisk = "critical";
      } else if (averageUtilization >= 75) {
        capacityRisk = "high";
      } else if (averageUtilization >= 60) {
        capacityRisk = "medium";
      } else {
        capacityRisk = "low";
      }
    }

    return {
      cityId,
      districtId,
      assets,
      coverageScore,
      capacityRisk,
      observations: [],
      recommendations: [],
      assessedAt: new Date().toISOString(),
    };
  }
}