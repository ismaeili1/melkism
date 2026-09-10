export type CitySignalCategory =
  | "market"
  | "mobility"
  | "environment"
  | "housing"
  | "development"
  | "infrastructure"
  | "safety"
  | "climate"
  | "population"
  | "livability"
  | "other";

export type CitySignalDirection =
  | "positive"
  | "negative"
  | "neutral"
  | "unknown";

export interface CitySignal {
  id: string;
  cityId?: string;
  districtId?: string;
  category: CitySignalCategory;
  direction: CitySignalDirection;
  title: string;
  value?: number;
  unit?: string;
  confidence: number;
  evidenceRefs?: string[];
  detectedAt: string;
}