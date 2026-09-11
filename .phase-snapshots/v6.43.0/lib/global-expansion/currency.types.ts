export interface CurrencyDefinition {
  code: string;
  numericCode?: string;
  name: string;
  symbol?: string;
  decimals: number;
  active: boolean;
}

export interface CurrencyConversionContext {
  baseCurrency: string;
  quoteCurrency: string;
  rate?: number;
  sourceId?: string;
  asOf?: string;
  confidence?: number;
}