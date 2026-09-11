import type { ArchitectureAssessment } from "./architecture-assessment.types";

export class ArchitectureAssessmentService {
  assess(
    projectId: string,
    categories: Record<string, number> = {}
  ): ArchitectureAssessment {
    const values = Object.values(categories);

    const score =
      values.length > 0
        ? values.reduce((sum, value) => sum + value, 0) /
          values.length
        : 0;

    return {
      projectId,
      score,
      confidence: values.length > 0 ? 0.5 : 0,
      categories,
      keyFindings: [],
      recommendations: [],
      assessedAt: new Date().toISOString(),
    };
  }
}