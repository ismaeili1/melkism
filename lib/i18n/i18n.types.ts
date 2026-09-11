import type { Locale } from "./config";

export type MessageKey =
  | "site.name"
  | "site.tagline"
  | "site.description"
  | "language.label"
  | "language.select"
  | "language.fa"
  | "language.en"
  | "language.ar"
  | "language.tr"
  | "navigation.news"
  | "navigation.articles"
  | "navigation.research"
  | "navigation.markets"
  | "navigation.cities"
  | "navigation.countries"
  | "navigation.trends"
  | "navigation.data"
  | "navigation.reports"
  | "common.home"
  | "common.search"
  | "common.intelligence"
  | "common.architecture"
  | "common.reports"
  | "common.data"
  | "common.cities"
  | "common.menu";

export type TranslationMessages = Record<
  MessageKey,
  string
>;

export type TranslationContext = {
  locale: Locale;
};

export type LocalizedPath = {
  locale: Locale;
  pathname: string;
};
