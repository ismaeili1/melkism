export type CountryId = string;

export type CountryStatus =
  | "planned"
  | "available"
  | "limited"
  | "restricted"
  | "suspended"
  | "inactive";

export interface CountryRecord {
  id: CountryId;
  iso2: string;
  iso3?: string;
  name: string;
  nativeName?: string;
  status: CountryStatus;
  defaultLocale?: string;
  defaultCurrency?: string;
  defaultTimezone?: string;
  regionIds?: string[];
  jurisdictionId?: string;
  metadata?: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
}