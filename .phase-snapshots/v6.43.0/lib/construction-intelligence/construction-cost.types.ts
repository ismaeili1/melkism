export type ConstructionCostCategory =
  | "land"
  | "design"
  | "pre_construction"
  | "materials"
  | "labor"
  | "equipment"
  | "subcontract"
  | "logistics"
  | "permits"
  | "financing"
  | "contingency"
  | "operations"
  | "other";

export interface ConstructionCostItem {
  id: string;
  projectId: string;
  category: ConstructionCostCategory;
  description: string;
  estimatedAmount?: number;
  actualAmount?: number;
  currency: string;
  variance?: number;
}

export interface ConstructionCostAssessment {
  projectId: string;
  estimatedTotal: number;
  actualTotal?: number;
  variance?: number;
  currency: string;
  riskLevel: "low" | "medium" | "high" | "critical";
  observations: string[];
}