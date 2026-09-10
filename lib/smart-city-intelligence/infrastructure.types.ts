export type InfrastructureCategory =
  | "transport"
  | "energy"
  | "water"
  | "waste"
  | "telecom"
  | "public_space"
  | "healthcare"
  | "education"
  | "emergency"
  | "utilities"
  | "other";

export interface InfrastructureAsset {
  id: string;
  cityId?: string;
  districtId?: string;
  category: InfrastructureCategory;
  name: string;
  condition?: "excellent" | "good" | "fair" | "poor" | "critical" | "unknown";
  capacity?: number;
  utilizationPercent?: number;
  latitude?: number;
  longitude?: number;
  metadata?: Record<string, unknown>;
}

export interface InfrastructureAssessment {
  cityId?: string;
  districtId?: string;
  assets: InfrastructureAsset[];
  coverageScore: number;
  capacityRisk: "low" | "medium" | "high" | "critical" | "unknown";
  observations: string[];
  recommendations: string[];
  assessedAt: string;
}