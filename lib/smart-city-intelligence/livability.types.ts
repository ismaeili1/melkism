export interface LivabilityDimension {
  name:
    | "housing"
    | "mobility"
    | "environment"
    | "services"
    | "safety"
    | "economy"
    | "public_space"
    | "culture"
    | "health"
    | "education";
  score: number;
  confidence: number;
}

export interface LivabilityAssessment {
  cityId?: string;
  districtId?: string;
  dimensions: LivabilityDimension[];
  overallScore: number;
  observations: string[];
  recommendations: string[];
  assessedAt: string;
}