import type {
  ConstructionCostAssessment,
  ConstructionCostItem,
} from "./construction-cost.types";

export class ConstructionCostService {
  assess(
    projectId: string,
    items: ConstructionCostItem[],
    currency: string
  ): ConstructionCostAssessment {
    const estimatedTotal = items.reduce(
      (sum, item) => sum + (item.estimatedAmount ?? 0),
      0
    );

    const actualValues = items
      .map((item) => item.actualAmount)
      .filter(
        (value): value is number =>
          value !== undefined && Number.isFinite(value)
      );

    const actualTotal =
      actualValues.length > 0
        ? actualValues.reduce((sum, value) => sum + value, 0)
        : undefined;

    const variance =
      actualTotal !== undefined
        ? actualTotal - estimatedTotal
        : undefined;

    let riskLevel: ConstructionCostAssessment["riskLevel"] =
      "low";

    if (
      variance !== undefined &&
      estimatedTotal > 0
    ) {
      const varianceRatio =
        Math.abs(variance) / estimatedTotal;

      if (varianceRatio >= 0.25) {
        riskLevel = "critical";
      } else if (varianceRatio >= 0.15) {
        riskLevel = "high";
      } else if (varianceRatio >= 0.05) {
        riskLevel = "medium";
      }
    }

    return {
      projectId,
      estimatedTotal,
      actualTotal,
      variance,
      currency,
      riskLevel,
      observations: [],
    };
  }
}