export type AvailabilityScope =
  | "country"
  | "region"
  | "market"
  | "service";

export interface GlobalAvailability {
  id: string;
  scope: AvailabilityScope;
  scopeId: string;
  service: string;
  status:
    | "available"
    | "limited"
    | "planned"
    | "restricted"
    | "unavailable";
  reason?: string;
  effectiveAt?: string;
  expiresAt?: string;
  updatedAt: string;
}