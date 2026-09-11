import type {
  GovernancePolicy,
  GovernancePolicyStatus,
  GovernancePolicyType,
} from "./governance-policy.types";

export interface CreateGovernancePolicyInput {
  organizationId?: string;
  tenantId?: string;
  name: string;
  type: GovernancePolicyType;
  status: GovernancePolicyStatus;
  version?: number;
  description?: string;
  priority?: number;
  effectiveAt?: string;
  expiresAt?: string;
  ownerIdentityId?: string;
  controls?: string[];
}

export class GovernancePolicyService {
  create(
    input: CreateGovernancePolicyInput
  ): GovernancePolicy {
    const now = new Date().toISOString();

    return {
      id: crypto.randomUUID(),
      organizationId: input.organizationId,
      tenantId: input.tenantId,
      name: input.name,
      type: input.type,
      status: input.status,
      version: input.version ?? 1,
      description: input.description,
      priority: input.priority ?? 0,
      effectiveAt: input.effectiveAt,
      expiresAt: input.expiresAt,
      ownerIdentityId: input.ownerIdentityId,
      controls: input.controls,
      createdAt: now,
      updatedAt: now,
    };
  }

  activate(
    policy: GovernancePolicy
  ): GovernancePolicy {
    return {
      ...policy,
      status: "active",
      updatedAt: new Date().toISOString(),
    };
  }
}