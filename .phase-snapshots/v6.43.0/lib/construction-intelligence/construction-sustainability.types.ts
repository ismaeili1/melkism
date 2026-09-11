export interface ConstructionSustainabilityMetric {
  name: string;
  value?: number;
  unit?: string;
  target?: number;
  benchmark?: number;
}

export interface ConstructionSustainabilityAssessment {
  projectId: string;
  metrics: ConstructionSustainabilityMetric[];
  strengths: string[];
  gaps: string[];
  recommendations: string[];
  confidence: number;
  assessedAt: string;
}