import type {
  GovernanceDataAccessDecision,
  GovernanceDataAccessRequest,
} from "./data-access.types";

import type { DataClassification } from "./data-governance.types";

export class DataAccessGovernanceService {
  evaluate(
    request: GovernanceDataAccessRequest,
    classification: DataClassification,
    expectedTenantId?: string
  ): GovernanceDataAccessDecision {
    const now = new Date().toISOString();

    if (!request.identityId) {
      return {
        allowed: false,
        reason: "anonymous",
        evaluatedAt: now,
      };
    }

    if (
      expectedTenantId &&
      request.tenantId !== expectedTenantId
    ) {
      return {
        allowed: false,
        reason: "tenant_mismatch",
        evaluatedAt: now,
      };
    }

    if (
      classification === "highly_restricted" &&
      request.action !== "read"
    ) {
      return {
        allowed: false,
        reason: "review_required",
        evaluatedAt: now,
      };
    }

    if (
      classification === "restricted" &&
      (request.action === "export" ||
        request.action === "share")
    ) {
      return {
        allowed: false,
        reason: "classification_restricted",
        evaluatedAt: now,
      };
    }

    if (
      (request.action === "export" ||
        request.action === "share") &&
      !request.purpose
    ) {
      return {
        allowed: false,
        reason: "purpose_required",
        evaluatedAt: now,
      };
    }

    return {
      allowed: true,
      reason: "allowed",
      evaluatedAt: now,
    };
  }
}