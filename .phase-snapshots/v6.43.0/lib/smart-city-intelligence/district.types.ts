export type DistrictId = string;

export type DistrictType =
  | "neighborhood"
  | "district"
  | "municipality"
  | "suburb"
  | "urban_core"
  | "industrial_zone"
  | "special_zone"
  | "other";

export interface DistrictRecord {
  id: DistrictId;
  cityId: string;
  name: string;
  slug: string;
  type: DistrictType;
  latitude?: number;
  longitude?: number;
  areaKm2?: number;
  population?: number;
  metadata?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}