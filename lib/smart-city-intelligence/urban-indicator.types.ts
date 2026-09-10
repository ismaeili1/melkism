export type UrbanIndicatorCategory =
  | "housing"
  | "economy"
  | "population"
  | "mobility"
  | "infrastructure"
  | "environment"
  | "health"
  | "education"
  | "safety"
  | "livability"
  | "development"
  | "energy"
  | "water"
  | "waste"
  | "digital"
  | "other";

export interface UrbanIndicator {
  id: string;
  cityId?: string;
  districtId?: string;
  category: UrbanIndicatorCategory;
  name: string;
  value?: number;
  unit?: string;
  period?: string;
  sourceId?: string;
  benchmark?: number;
  target?: number;
  confidence?: number;
  measuredAt: string;
}