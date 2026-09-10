export type PolicyEffect =
  | "allow"
  | "deny"
  | "challenge"
  | "review";

export interface SecurityPolicy {
  id: string;
  name: string;
  description?: string;
  effect: PolicyEffect;
  resource?: string;
  action?: string;
  requiredRoles?: string[];
  requiredVerificationTypes?: string[];
  priority: number;
  active: boolean;
}

export interface PolicyEvaluation {
  policyId: string;
  effect: PolicyEffect;
  matched: boolean;
  reason: string;
  evaluatedAt: string;
}