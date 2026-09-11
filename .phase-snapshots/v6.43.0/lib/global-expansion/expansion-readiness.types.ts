export type ReadinessLevel =
  | "not_ready"
  | "planning"
  | "early"
  | "ready"
  | "operational";

export interface ExpansionReadiness {
  countryId: string;
  level: ReadinessLevel;
  score: number;
  dimensions: {
    localization: number;
    currency: number;
    timezone: number;
    legalContext: number;
    marketCoverage: number;
    dataCoverage: number;
    serviceCoverage: number;
  };
  blockers: string[];
  recommendations: string[];
  evaluatedAt: string;
}