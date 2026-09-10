import type {
  ConstructionInspection,
  ConstructionQualityAssessment,
} from "./construction-quality.types";

export class ConstructionQualityService {
  assess(
    projectId: string,
    inspections: ConstructionInspection[]
  ): ConstructionQualityAssessment {
    const approvedItems = inspections.filter(
      (item) => item.status === "approved"
    ).length;

    const rejectedItems = inspections.filter(
      (item) => item.status === "rejected"
    ).length;

    const correctiveItems = inspections.filter(
      (item) => item.status === "corrective_action"
    ).length;

    const inspectedItems = inspections.filter(
      (item) =>
        item.status === "inspected" ||
        item.status === "approved" ||
        item.status === "rejected" ||
        item.status === "corrective_action"
    ).length;

    const qualityScore =
      inspectedItems > 0
        ? (approvedItems / inspectedItems) * 100
        : 0;

    return {
      projectId,
      inspectedItems,
      approvedItems,
      rejectedItems,
      correctiveItems,
      qualityScore,
      observations: [],
      assessedAt: new Date().toISOString(),
    };
  }
}