import type {
  UrbanRecommendation,
  UrbanRecommendationCategory,
  UrbanRecommendationPriority,
} from "./urban-recommendation.types";

export interface CreateUrbanRecommendationInput {
  cityId?: string;
  districtId?: string;
  category: UrbanRecommendationCategory;
  title: string;
  explanation: string;
  priority: UrbanRecommendationPriority;
  confidence: number;
  expectedImpact?: string;
  evidenceRefs?: string[];
}

export class UrbanRecommendationService {
  create(
    input: CreateUrbanRecommendationInput
  ): UrbanRecommendation {
    return {
      id: crypto.randomUUID(),
      cityId: input.cityId,
      districtId: input.districtId,
      category: input.category,
      title: input.title,
      explanation: input.explanation,
      priority: input.priority,
      confidence: Math.max(
        0,
        Math.min(1, input.confidence)
      ),
      expectedImpact: input.expectedImpact,
      evidenceRefs: input.evidenceRefs,
      createdAt: new Date().toISOString(),
    };
  }
}