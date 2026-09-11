export type UrbanEnvironmentCategory =
  | "air"
  | "noise"
  | "heat"
  | "water"
  | "green_space"
  | "biodiversity"
  | "carbon"
  | "energy"
  | "waste"
  | "climate"
  | "other";

export interface UrbanEnvironmentMetric {
  category: UrbanEnvironmentCategory;
  name: string;
  value?: number;
  unit?: string;
  threshold?: number;
  benchmark?: number;
  measuredAt: string;
  sourceId?: string;
}

export interface UrbanEnvironmentAssessment {
  cityId?: string;
  districtId?: string;
  metrics: UrbanEnvironmentMetric[];
  environmentalRisk:
    | "low"
    | "medium"
    | "high"
    | "critical"
    | "unknown";
  observations: string[];
  recommendations: string[];
  assessedAt: string;
}