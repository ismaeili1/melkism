export type ApiStatus = 'active' | 'deprecated' | 'disabled';
export type ApiVisibility = 'public' | 'partner' | 'private';
export type ApiLifecycle = 'design' | 'beta' | 'stable' | 'deprecated';

export interface ApiRecord {
  id: string;
  key: string;
  name: string;
  description: string;
  version: string;
  basePath: string;
  status: ApiStatus;
  visibility: ApiVisibility;
  lifecycle: ApiLifecycle;
  owner: string;
  domain: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}