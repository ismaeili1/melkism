import type {
  PolicyEvaluation,
  SecurityPolicy,
} from "./security-policy.types";

export interface PolicyEvaluationContext {
  resource?: string;
  action?: string;
  roles?: string[];
  verificationTypes?: string[];
}

export class SecurityPolicyService {
  evaluate(
    policy: SecurityPolicy,
    context: PolicyEvaluationContext
  ): PolicyEvaluation {
    const resourceMatch =
      !policy.resource ||
      policy.resource === context.resource;

    const actionMatch =
      !policy.action ||
      policy.action === context.action;

    const roleMatch =
      !policy.requiredRoles ||
      policy.requiredRoles.length === 0 ||
      policy.requiredRoles.some((role) =>
        context.roles?.includes(role)
      );

    const verificationMatch =
      !policy.requiredVerificationTypes ||
      policy.requiredVerificationTypes.length === 0 ||
      policy.requiredVerificationTypes.every(
        (type) =>
          context.verificationTypes?.includes(type)
      );

    const matched =
      policy.active &&
      resourceMatch &&
      actionMatch &&
      roleMatch &&
      verificationMatch;

    return {
      policyId: policy.id,
      effect: matched
        ? policy.effect
        : "deny",
      matched,
      reason: matched
        ? "policy_matched"
        : "policy_not_matched",
      evaluatedAt: new Date().toISOString(),
    };
  }
}