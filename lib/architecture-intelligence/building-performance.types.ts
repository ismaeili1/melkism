export type PerformanceCategory =
  | "energy"
  | "water"
  | "carbon"
  | "thermal"
  | "daylight"
  | "indoor_air"
  | "comfort"
  | "acoustics"
  | "materials"
  | "operations";

export interface PerformanceMetric {
  category: PerformanceCategory;
  name: string;
  value?: number;
  unit?: string;
  target?: number;
  benchmark?: number;
}

export interface BuildingPerformanceAssessment {
  projectId: string;
  metrics: PerformanceMetric[];
  strengths: string[];
  gaps: string[];
  recommendations: string[];
  confidence: number;
  assessedAt: string;
}