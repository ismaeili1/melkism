import type {
  MessageKey,
  TranslationMessages,
} from "./i18n.types";
import type { Locale } from "./config";

export type TranslationDictionary =
  TranslationMessages;

export type TranslationLoader =
  (locale: Locale) => TranslationDictionary;

export type TranslateOptions = {
  fallback?: string;
};

export type Translator = (
  key: MessageKey,
  options?: TranslateOptions
) => string;
