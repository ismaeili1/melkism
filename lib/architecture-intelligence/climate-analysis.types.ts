export type ClimateZoneCategory =
  | "tropical"
  | "arid"
  | "semi_arid"
  | "temperate"
  | "continental"
  | "cold"
  | "polar"
  | "highland"
  | "marine"
  | "unknown";

export interface ClimateContext {
  zone: ClimateZoneCategory;
  averageTemperature?: number;
  heatingDegreeDays?: number;
  coolingDegreeDays?: number;
  solarExposure?: number;
  prevailingWind?: string;
  precipitation?: number;
  humidity?: number;
}

export interface ClimateDesignSignal {
  category:
    | "solar"
    | "thermal"
    | "wind"
    | "water"
    | "humidity"
    | "envelope"
    | "shading"
    | "ventilation";
  direction: "positive" | "negative" | "neutral";
  importance: "low" | "medium" | "high" | "critical";
  recommendation: string;
}