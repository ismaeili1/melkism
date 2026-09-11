export type UrbanDevelopmentType =
  | "densification"
  | "regeneration"
  | "expansion"
  | "mixed_use"
  | "transit_oriented"
  | "residential"
  | "commercial"
  | "industrial"
  | "public_realm"
  | "green_infrastructure"
  | "infrastructure"
  | "other";

export interface UrbanDevelopmentSignal {
  id: string;
  cityId?: string;
  districtId?: string;
  type: UrbanDevelopmentType;
  title: string;
  description?: string;
  confidence: number;
  evidenceRefs?: string[];
  detectedAt: string;
}