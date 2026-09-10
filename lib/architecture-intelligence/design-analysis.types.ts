export type DesignDimension =
  | "function"
  | "form"
  | "space"
  | "circulation"
  | "context"
  | "climate"
  | "material"
  | "structure"
  | "energy"
  | "daylight"
  | "acoustics"
  | "accessibility"
  | "identity"
  | "sustainability";

export interface DesignAssessment {
  dimension: DesignDimension;
  score: number;
  confidence: number;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
}

export interface DesignAnalysisResult {
  projectId: string;
  assessments: DesignAssessment[];
  overallScore: number;
  overallConfidence: number;
  analyzedAt: string;
}