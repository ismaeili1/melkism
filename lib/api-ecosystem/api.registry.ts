import type { ApiEndpoint } from './api-endpoint.types';
import type { ApiRecord } from './api.types';
import { DEFAULT_API_VERSION } from './api-ecosystem.constants';

const now = new Date().toISOString();

const apiRegistry: ApiRecord[] = [
  {
    id: 'api-property-platform',
    key: 'property-platform',
    name: 'Property Platform API',
    description: 'Property discovery, listings, pricing, media and availability services.',
    version: DEFAULT_API_VERSION,
    basePath: '/api/property-platform',
    status: 'active',
    visibility: 'public',
    lifecycle: 'stable',
    owner: 'MELKISM Property Platform',
    domain: 'property',
    tags: ['property', 'listing', 'search'],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 'api-transactions',
    key: 'transactions',
    name: 'Transactions API',
    description: 'Transaction, offer, negotiation, agreement and milestone services.',
    version: DEFAULT_API_VERSION,
    basePath: '/api/transactions',
    status: 'active',
    visibility: 'partner',
    lifecycle: 'stable',
    owner: 'MELKISM Transactions',
    domain: 'transactions',
    tags: ['transactions', 'offers', 'workflow'],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 'api-architecture-intelligence',
    key: 'architecture-intelligence',
    name: 'Architecture Intelligence API',
    description: 'Architecture analysis, performance and recommendation services.',
    version: DEFAULT_API_VERSION,
    basePath: '/api/architecture-intelligence',
    status: 'active',
    visibility: 'partner',
    lifecycle: 'stable',
    owner: 'MELKISM Architecture Intelligence',
    domain: 'architecture',
    tags: ['architecture', 'design', 'performance'],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 'api-construction-intelligence',
    key: 'construction-intelligence',
    name: 'Construction Intelligence API',
    description: 'Construction project, material, cost, schedule, risk and quality intelligence.',
    version: DEFAULT_API_VERSION,
    basePath: '/api/construction-intelligence',
    status: 'active',
    visibility: 'partner',
    lifecycle: 'stable',
    owner: 'MELKISM Construction Intelligence',
    domain: 'construction',
    tags: ['construction', 'cost', 'schedule'],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 'api-smart-city-intelligence',
    key: 'smart-city-intelligence',
    name: 'Smart City Intelligence API',
    description: 'Urban indicators, mobility, infrastructure, environment and livability intelligence.',
    version: DEFAULT_API_VERSION,
    basePath: '/api/smart-city-intelligence',
    status: 'active',
    visibility: 'public',
    lifecycle: 'stable',
    owner: 'MELKISM Smart City Intelligence',
    domain: 'smart-city',
    tags: ['city', 'mobility', 'infrastructure'],
    createdAt: now,
    updatedAt: now,
  },
  {
    id: 'api-global-expansion',
    key: 'global-expansion',
    name: 'Global Expansion API',
    description: 'Country, region, localization, currency, jurisdiction and market coverage services.',
    version: DEFAULT_API_VERSION,
    basePath: '/api/global-expansion',
    status: 'active',
    visibility: 'public',
    lifecycle: 'stable',
    owner: 'MELKISM Global Expansion',
    domain: 'global-expansion',
    tags: ['global', 'localization', 'jurisdiction'],
    createdAt: now,
    updatedAt: now,
  },
];

const endpointRegistry: ApiEndpoint[] = [
  {
    id: 'property-search',
    apiId: 'api-property-platform',
    version: DEFAULT_API_VERSION,
    path: '/search',
    method: 'GET',
    name: 'Property Search',
    description: 'Search and discover properties.',
    authRequired: false,
    scopes: ['property.read'],
    rateLimitPolicyId: 'rl-standard-v1',
    lifecycle: 'stable',
  },
  {
    id: 'property-detail',
    apiId: 'api-property-platform',
    version: DEFAULT_API_VERSION,
    path: '/properties/:id',
    method: 'GET',
    name: 'Property Detail',
    description: 'Read a single property record.',
    authRequired: false,
    scopes: ['property.read'],
    rateLimitPolicyId: 'rl-standard-v1',
    lifecycle: 'stable',
  },
  {
    id: 'transaction-list',
    apiId: 'api-transactions',
    version: DEFAULT_API_VERSION,
    path: '/',
    method: 'GET',
    name: 'Transaction List',
    description: 'Read transaction workflows available to the consumer.',
    authRequired: true,
    scopes: ['transaction.read'],
    rateLimitPolicyId: 'rl-standard-v1',
    lifecycle: 'stable',
  },
  {
    id: 'architecture-analysis',
    apiId: 'api-architecture-intelligence',
    version: DEFAULT_API_VERSION,
    path: '/analysis',
    method: 'GET',
    name: 'Architecture Analysis',
    description: 'Retrieve architecture intelligence analysis.',
    authRequired: true,
    scopes: ['architecture.read'],
    rateLimitPolicyId: 'rl-standard-v1',
    lifecycle: 'stable',
  },
  {
    id: 'construction-intelligence',
    apiId: 'api-construction-intelligence',
    version: DEFAULT_API_VERSION,
    path: '/',
    method: 'GET',
    name: 'Construction Intelligence',
    description: 'Retrieve construction intelligence summaries.',
    authRequired: true,
    scopes: ['construction.read'],
    rateLimitPolicyId: 'rl-standard-v1',
    lifecycle: 'stable',
  },
  {
    id: 'smart-city-overview',
    apiId: 'api-smart-city-intelligence',
    version: DEFAULT_API_VERSION,
    path: '/',
    method: 'GET',
    name: 'Smart City Overview',
    description: 'Retrieve smart city intelligence overview.',
    authRequired: false,
    scopes: ['city.read'],
    rateLimitPolicyId: 'rl-standard-v1',
    lifecycle: 'stable',
  },
  {
    id: 'global-country-coverage',
    apiId: 'api-global-expansion',
    version: DEFAULT_API_VERSION,
    path: '/countries',
    method: 'GET',
    name: 'Country Coverage',
    description: 'Retrieve country intelligence coverage.',
    authRequired: false,
    scopes: ['global.read'],
    rateLimitPolicyId: 'rl-standard-v1',
    lifecycle: 'stable',
  },
];

export function listApis(): ApiRecord[] {
  return [...apiRegistry];
}

export function findApiById(id: string): ApiRecord | undefined {
  return apiRegistry.find((item) => item.id === id);
}

export function findApiByKey(key: string): ApiRecord | undefined {
  return apiRegistry.find((item) => item.key === key);
}

export function listEndpoints(): ApiEndpoint[] {
  return [...endpointRegistry];
}

export function listEndpointsForApi(apiId: string): ApiEndpoint[] {
  return endpointRegistry.filter((item) => item.apiId === apiId);
}