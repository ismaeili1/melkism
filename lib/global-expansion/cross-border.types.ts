export interface CrossBorderContext {
  sourceCountryId: string;
  targetCountryId: string;
  sourceCurrency?: string;
  targetCurrency?: string;
  sourceLocale?: string;
  targetLocale?: string;
  sourceJurisdictionId?: string;
  targetJurisdictionId?: string;
  supported: boolean;
  limitations?: string[];
  evaluatedAt: string;
}