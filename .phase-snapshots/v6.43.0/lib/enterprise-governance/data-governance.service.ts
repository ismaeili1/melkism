import type {
  DataClassification,
  DataGovernanceRecord,
  DataLifecycleStatus,
} from "./data-governance.types";

export interface CreateDataGovernanceInput {
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
}

export class DataGovernanceService {
  create(
    input: CreateDataGovernanceInput
  ): DataGovernanceRecord {
    const now = new Date().toISOString();

    return {
      id: crypto.randomUUID(),
      tenantId: input.tenantId,
      resourceType: input.resourceType,
      resourceId: input.resourceId,
      classification: input.classification,
      lifecycleStatus: input.lifecycleStatus,
      ownerIdentityId: input.ownerIdentityId,
      stewardIdentityId: input.stewardIdentityId,
      retentionUntil: input.retentionUntil,
      residency: input.residency,
      purpose: input.purpose,
      createdAt: now,
      updatedAt: now,
    };
  }

  isRestricted(
    classification: DataClassification
  ): boolean {
    return (
      classification === "restricted" ||
      classification === "highly_restricted"
    );
  }
}