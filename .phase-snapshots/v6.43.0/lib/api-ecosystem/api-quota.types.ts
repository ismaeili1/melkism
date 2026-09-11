export interface ApiQuotaPolicy {
  id: string;
  name: string;
  period: 'day' | 'month' | 'rolling';
  units: number;
  unitName: 'requests' | 'credits' | 'data';
  appliesTo: 'consumer' | 'application';
  enabled: boolean;
}