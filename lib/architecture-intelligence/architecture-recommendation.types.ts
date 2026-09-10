export type RecommendationPriority =
  | "low"
  | "medium"
  | "high"
  | "critical";

export type RecommendationCategory =
  | "site"
  | "typology"
  | "space"
  | "climate"
  | "energy"
  | "material"
  | "structure"
  | "circulation"
  | "performance"
  | "sustainability"
  | "accessibility";

export interface ArchitectureRecommendation {
  id: string;
  projectId: string;
  category: RecommendationCategory;
  title: string;
  explanation: string;
  priority: RecommendationPriority;
  confidence: number;
  expectedImpact?: string;
  evidenceRefs?: string[];
  createdAt: string;
}