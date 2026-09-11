import type {
  DesignAssessment,
  DesignAnalysisResult,
  DesignDimension,
} from "./design-analysis.types";

export class DesignAnalysisService {
  assess(
    projectId: string,
    dimensions: DesignDimension[] = []
  ): DesignAnalysisResult {
    const selected: DesignDimension[] =
      dimensions.length > 0
        ? dimensions
        : [
            "function",
            "space",
            "context",
            "climate",
            "sustainability",
          ];

    const assessments: DesignAssessment[] =
      selected.map((dimension): DesignAssessment => ({
        dimension,
        score: 0,
        confidence: 0,
        strengths: [],
        weaknesses: [],
        recommendations: [],
      }));

    const overallScore = assessments.length
      ? assessments.reduce((sum, item) => sum + item.score, 0) /
        assessments.length
      : 0;

    const overallConfidence = assessments.length
      ? assessments.reduce(
          (sum, item) => sum + item.confidence,
          0
        ) / assessments.length
      : 0;

    return {
      projectId,
      assessments,
      overallScore,
      overallConfidence,
      analyzedAt: new Date().toISOString(),
    };
  }
}