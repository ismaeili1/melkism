export type MobilityMode =
  | "walking"
  | "cycling"
  | "micromobility"
  | "bus"
  | "tram"
  | "metro"
  | "rail"
  | "car"
  | "taxi"
  | "ride_hailing"
  | "other";

export interface MobilityMetric {
  mode: MobilityMode;
  tripCount?: number;
  averageTravelMinutes?: number;
  averageSpeedKmh?: number;
  accessibilityScore?: number;
  coverageScore?: number;
}

export interface MobilityAssessment {
  cityId?: string;
  districtId?: string;
  metrics: MobilityMetric[];
  congestionLevel: "low" | "medium" | "high" | "critical" | "unknown";
  accessibilityScore: number;
  observations: string[];
  recommendations: string[];
  assessedAt: string;
}