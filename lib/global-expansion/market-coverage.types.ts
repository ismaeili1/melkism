export type CoverageStatus =
  | "not_available"
  | "planned"
  | "beta"
  | "available"
  | "limited"
  | "restricted"
  | "suspended";

export interface MarketCoverage {
  id: string;
  countryId?: string;
  regionId?: string;
  marketCode: string;
  status: CoverageStatus;
  propertyCoverage: boolean;
  transactionCoverage: boolean;
  architectureCoverage: boolean;
  constructionCoverage: boolean;
  cityIntelligenceCoverage: boolean;
  dataCoverage: boolean;
  localeCoverage: boolean;
  currencyCoverage: boolean;
  updatedAt: string;
}