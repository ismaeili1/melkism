export type ConstructionRiskCategory =
  | "schedule"
  | "cost"
  | "quality"
  | "safety"
  | "procurement"
  | "labor"
  | "materials"
  | "design"
  | "regulatory"
  | "environmental"
  | "weather"
  | "logistics"
  | "technology"
  | "other";

export interface ConstructionRisk {
  id: string;
  projectId: string;
  category: ConstructionRiskCategory;
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