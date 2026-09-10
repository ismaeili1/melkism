export type ConstructionRecommendationPriority =
  | "low"
  | "medium"
  | "high"
  | "critical";

export type ConstructionRecommendationCategory =
  | "cost"
  | "schedule"
  | "quality"
  | "risk"
  | "procurement"
  | "materials"
  | "safety"
  | "sustainability"
  | "productivity"
  | "coordination";

export interface ConstructionRecommendation {
  id: string;
  projectId: string;
  category: ConstructionRecommendationCategory;
  title: string;
  explanation: string;
  priority: ConstructionRecommendationPriority;
  confidence: number;
  expectedImpact?: string;
  evidenceRefs?: string[];
  createdAt: string;
}