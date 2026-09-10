import type {
  ArchitectureRecommendation,
  RecommendationCategory,
  RecommendationPriority,
} from "./architecture-recommendation.types";

export interface CreateArchitectureRecommendationInput {
  projectId: string;
  category: RecommendationCategory;
  title: string;
  explanation: string;
  priority: RecommendationPriority;
  confidence: number;
  expectedImpact?: string;
  evidenceRefs?: string[];
}

export class ArchitectureRecommendationService {
  create(
    input: CreateArchitectureRecommendationInput
  ): ArchitectureRecommendation {
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