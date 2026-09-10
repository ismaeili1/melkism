export type UrbanRiskCategory =
  | "flood"
  | "heat"
  | "drought"
  | "earthquake"
  | "fire"
  | "air_quality"
  | "infrastructure"
  | "mobility"
  | "housing"
  | "economic"
  | "social"
  | "climate"
  | "cyber"
  | "other";

export interface UrbanRisk {
  id: string;
  cityId?: string;
  districtId?: string;
  category: UrbanRiskCategory;
  title: string;
  description: string;
  probability: number;
  impact: number;
  score: number;
  severity: "low" | "medium" | "high" | "critical";
  mitigation?: string[];
  status: "open" | "monitoring" | "mitigated" | "closed";
  createdAt: string;
  updatedAt: string;
}