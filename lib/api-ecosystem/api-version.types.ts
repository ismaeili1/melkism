export type ApiVersionStatus = 'current' | 'supported' | 'deprecated' | 'retired';

export interface ApiVersion {
  apiId: string;
  version: string;
  status: ApiVersionStatus;
  releasedAt: string;
  sunsetAt?: string;
  changelogUrl?: string;
}