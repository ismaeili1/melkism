import type { CrossBorderContext } from "./cross-border.types";

export class CrossBorderService {
  evaluate(
    context: Omit<CrossBorderContext, "evaluatedAt">
  ): CrossBorderContext {
    const limitations = [
      ...(context.limitations ?? []),
    ];

    if (
      !context.sourceCurrency ||
      !context.targetCurrency
    ) {
      limitations.push("currency_context_missing");
    }

    if (
      !context.sourceLocale ||
      !context.targetLocale
    ) {
      limitations.push("locale_context_missing");
    }

    if (
      !context.sourceJurisdictionId ||
      !context.targetJurisdictionId
    ) {
      limitations.push("jurisdiction_context_missing");
    }

    const supported =
      context.supported &&
      limitations.length === 0;

    return {
      ...context,
      supported,
      limitations,
      evaluatedAt: new Date().toISOString(),
    };
  }
}