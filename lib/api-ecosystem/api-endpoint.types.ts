export type ApiHttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface ApiEndpoint {
  id: string;
  apiId: string;
  version: string;
  path: string;
  method: ApiHttpMethod;
  name: string;
  description: string;
  authRequired: boolean;
  scopes: string[];
  rateLimitPolicyId?: string;
  lifecycle: 'beta' | 'stable' | 'deprecated';
}