export type UrbanRecommendationPriority =
  | "low"
  | "medium"
  | "high"
  | "critical";

export type UrbanRecommendationCategory =
  | "planning"
  | "mobility"
  | "infrastructure"
  | "environment"
  | "housing"
  | "development"
  | "livability"
  | "risk"
  | "services"
  | "sustainability";

export interface UrbanRecommendation {
  id: string;
  cityId?: string;
  districtId?: string;
  category: UrbanRecommendationCategory;
  title: string;
  explanation: string;
  priority: UrbanRecommendationPriority;
  confidence: number;
  expectedImpact?: string;
  evidenceRefs?: string[];
  createdAt: string;
}