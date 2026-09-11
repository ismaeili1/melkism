export type JurisdictionType =
  | "country"
  | "state"
  | "province"
  | "municipality"
  | "special_zone"
  | "custom";

export interface JurisdictionRecord {
  id: string;
  name: string;
  type: JurisdictionType;
  countryId?: string;
  parentJurisdictionId?: string;
  legalSystem?: string;
  active: boolean;
  metadata?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}