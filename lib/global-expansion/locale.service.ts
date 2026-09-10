import type {
  LocaleDefinition,
  LocaleResolution,
} from "./locale.types";

export class LocaleService {
  resolve(
    requestedLocale: string | undefined,
    available: LocaleDefinition[],
    fallbackLocale = "en"
  ): LocaleResolution {
    const normalized =
      requestedLocale?.trim().toLowerCase() ?? "";

    const exact =
      available.find(
        (locale) => locale.code.toLowerCase() === normalized
      );

    if (exact) {
      return {
        requestedLocale,
        resolvedLocale: exact.code,
        fallbackChain: [exact.code],
        direction: exact.direction,
      };
    }

    const languageCode =
      normalized.split("-")[0];

    const languageMatch =
      available.find(
        (locale) =>
          locale.languageCode.toLowerCase() ===
          languageCode
      );

    if (languageMatch) {
      return {
        requestedLocale,
        resolvedLocale: languageMatch.code,
        fallbackChain: [
          normalized,
          languageMatch.code,
          fallbackLocale,
        ],
        direction: languageMatch.direction,
      };
    }

    const fallback =
      available.find(
        (locale) =>
          locale.code.toLowerCase() ===
          fallbackLocale.toLowerCase()
      );

    const resolved =
      fallback ?? available[0];

    return {
      requestedLocale,
      resolvedLocale: resolved?.code ?? fallbackLocale,
      fallbackChain: [
        normalized,
        fallbackLocale,
      ],
      direction:
        resolved?.direction ?? "ltr",
    };
  }
}