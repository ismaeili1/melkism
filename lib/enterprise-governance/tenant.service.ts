import type {
  TenantRecord,
  TenantStatus,
} from "./tenant.types";

export type CreateTenantInput =
  Omit<TenantRecord, "createdAt" | "updatedAt">;

export class TenantService {
  create(
    input: CreateTenantInput
  ): TenantRecord {
    const now = new Date().toISOString();

    return {
      ...input,
      createdAt: now,
      updatedAt: now,
    };
  }

  changeStatus(
    tenant: TenantRecord,
    status: TenantStatus
  ): TenantRecord {
    return {
      ...tenant,
      status,
      updatedAt: new Date().toISOString(),
    };
  }

  belongsToOrganization(
    tenant: TenantRecord,
    organizationId: string
  ): boolean {
    return tenant.organizationId === organizationId;
  }
}