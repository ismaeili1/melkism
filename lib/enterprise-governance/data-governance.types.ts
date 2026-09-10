export type DataClassification =
  | "public"
  | "internal"
  | "confidential"
  | "restricted"
  | "highly_restricted";

export type DataLifecycleStatus =
  | "active"
  | "archived"
  | "scheduled_deletion"
  | "deleted"
  | "legal_hold";

export interface DataGovernanceRecord {
  id: string;
  tenantId?: string;
  resourceType: string;
  resourceId: string;
  classification: DataClassification;
  lifecycleStatus: DataLifecycleStatus;
  ownerIdentityId?: string;
  stewardIdentityId?: string;
  retentionUntil?: string;
  residency?: string;
  purpose?: string;
  createdAt: string;
  updatedAt: string;
}