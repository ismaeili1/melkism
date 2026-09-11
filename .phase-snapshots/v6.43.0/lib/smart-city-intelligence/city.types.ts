export type CityId = string;

export type CityStatus =
  | "active"
  | "inactive"
  | "developing"
  | "planned"
  | "archived";

export interface CityRecord {
  id: CityId;
  countryCode: string;
  name: string;
  slug: string;
  status: CityStatus;
  latitude?: number;
  longitude?: number;
  population?: number;
  areaKm2?: number;
  timezone?: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}