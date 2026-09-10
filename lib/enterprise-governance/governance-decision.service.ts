import type {
  GovernanceDecision,
  GovernanceDecisionStatus,
  GovernanceDecisionType,
} from "./governance-decision.types";

export interface CreateGovernanceDecisionInput {
  organizationId?: string;
  tenantId?: string;
  type: GovernanceDecisionType;
  title: string;
  rationale: string;
  status?: GovernanceDecisionStatus;
  requestedBy?: string;
  evidenceRefs?: string[];
}

export class GovernanceDecisionService {
  create(
    input: CreateGovernanceDecisionInput
  ): GovernanceDecision {
    return {
      id: crypto.randomUUID(),
      organizationId: input.organizationId,
      tenantId: input.tenantId,
      type: input.type,
      title: input.title,
      rationale: input.rationale,
      status: input.status ?? "proposed",
      requestedBy: input.requestedBy,
      evidenceRefs: input.evidenceRefs,
      createdAt: new Date().toISOString(),
    };
  }

  approve(
    decision: GovernanceDecision,
    decidedBy: string
  ): GovernanceDecision {
    return {
      ...decision,
      status: "approved",
      decidedBy,
      decidedAt: new Date().toISOString(),
    };
  }

  reject(
    decision: GovernanceDecision,
    decidedBy: string
  ): GovernanceDecision {
    return {
      ...decision,
      status: "rejected",
      decidedBy,
      decidedAt: new Date().toISOString(),
    };
  }
}