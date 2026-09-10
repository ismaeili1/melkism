import type {
  ApiGovernancePolicy,
  ApiGovernanceReview,
} from './api-governance.types';

const policies: ApiGovernancePolicy[] = [
  {
    id: 'governance-api-baseline-v1',
    name: 'API Governance Baseline',
    description: 'Baseline lifecycle, ownership, security and documentation controls.',
    requiredControls: [
      'owner-defined',
      'version-defined',
      'auth-policy-defined',
      'scope-defined',
      'rate-limit-defined',
      'health-defined',
      'documentation-defined',
    ],
    appliesTo: 'api',
    enabled: true,
  },
];

export function listGovernancePolicies(): ApiGovernancePolicy[] {
  return [...policies];
}

export function reviewApi(apiId: string): ApiGovernanceReview {
  return {
    id: `review-${apiId}`,
    apiId,
    reviewedAt: new Date().toISOString(),
    reviewer: 'MELKISM API Governance Foundation',
    status: 'passed',
    findings: [],
  };
}