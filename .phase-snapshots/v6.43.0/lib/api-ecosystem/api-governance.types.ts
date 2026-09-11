export interface ApiGovernancePolicy {
  id: string;
  name: string;
  description: string;
  requiredControls: string[];
  appliesTo: 'api' | 'endpoint' | 'consumer' | 'application';
  enabled: boolean;
}

export interface ApiGovernanceReview {
  id: string;
  apiId: string;
  reviewedAt: string;
  reviewer: string;
  status: 'passed' | 'conditional' | 'failed';
  findings: string[];
}