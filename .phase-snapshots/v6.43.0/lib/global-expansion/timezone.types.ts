export interface TimezoneDefinition {
  id: string;
  name: string;
  countryIds?: string[];
  utcOffset?: string;
  active: boolean;
}

export interface LocalTimeContext {
  timezone: string;
  localDateTime: string;
  utcDateTime: string;
}