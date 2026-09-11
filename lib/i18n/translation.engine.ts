import {
  isLocale,
  type Locale,
} from "./config";

import type {
  MessageKey,
} from "./i18n.types";

import {
  faMessages,
} from "./messages/fa";

import {
  enMessages,
} from "./messages/en";

import {
  arMessages,
} from "./messages/ar";

import {
  trMessages,
} from "./messages/tr";

import type {
  TranslationDictionary,
  Translator,
} from "./translation.types";

export function getDictionary(
  locale: Locale
): TranslationDictionary {
  switch (locale) {
    case "fa":
      return faMessages;

    case "en":
      return enMessages;

    case "ar":
      return arMessages;

    case "tr":
      return trMessages;

    default:
      return faMessages;
  }
}

export function translate(
  locale: Locale,
  key: MessageKey,
  fallback?: string
): string {
  const dictionary = getDictionary(locale);
  const value = dictionary[key];

  if (typeof value === "string" && value.length > 0) {
    return value;
  }

  return fallback ?? key;
}

export function createTranslator(
  locale: Locale
): Translator {
  return (
    key: MessageKey,
    options
  ) => translate(
    locale,
    key,
    options?.fallback
  );
}

export function resolveLocale(
  value: string | null | undefined
): Locale {
  if (
    typeof value === "string" &&
    isLocale(value)
  ) {
    return value;
  }

  return "fa";
}
