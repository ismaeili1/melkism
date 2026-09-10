export interface LocaleDefinition {
  code: string;
  languageCode: string;
  regionCode?: string;
  direction: "ltr" | "rtl";
  nativeName?: string;
  englishName?: string;
  active: boolean;
}

export interface LocaleResolution {
  requestedLocale?: string;
  resolvedLocale: string;
  fallbackChain: string[];
  direction: "ltr" | "rtl";
}