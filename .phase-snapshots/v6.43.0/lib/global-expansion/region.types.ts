export type RegionId = string;

export type RegionType =
  | "continent"
  | "subregion"
  | "economic_area"
  | "market_region"
  | "administrative_region"
  | "custom";

export interface RegionRecord {
  id: RegionId;
  name: string;
  type: RegionType;
  countryIds?: string[];
  parentRegionId?: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}