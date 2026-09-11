import type {
  ConstructionRecommendation,
  ConstructionRecommendationCategory,
  ConstructionRecommendationPriority,
} from "./construction-recommendation.types";

export interface CreateConstructionRecommendationInput {
  projectId: string;
  category: ConstructionRecommendationCategory;
  title: string;
  explanation: string;
  priority: ConstructionRecommendationPriority;
  confidence: number;
  expectedImpact?: string;
  evidenceRefs?: string[];
}

export class ConstructionRecommendationService {
  create(
    input: CreateConstructionRecommendationInput
  ): ConstructionRecommendation {
    return {
      id: crypto.randomUUID(),
      projectId: input.projectId,
      category: input.category,
      title: input.title,
      explanation: input.explanation,
      priority: input.priority,
      confidence: input.confidence,
      expectedImpact: input.expectedImpact,
      evidenceRefs: input.evidenceRefs,
      createdAt: new Date().toISOString(),
    };
  }
}