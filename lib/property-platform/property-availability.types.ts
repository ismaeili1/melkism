export type PropertyAvailabilityStatus =
  | "available"
  | "reserved"
  | "occupied"
  | "under_contract"
  | "unavailable";

export interface PropertyAvailabilityRecord {
  propertyId: string;
  status: PropertyAvailabilityStatus;
  availableFrom?: string;
  availableTo?: string;
  updatedAt: string;
}