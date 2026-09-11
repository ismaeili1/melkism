import type {
  CurrencyConversionContext,
  CurrencyDefinition,
} from "./currency.types";

export class CurrencyService {
  find(
    code: string,
    currencies: CurrencyDefinition[]
  ): CurrencyDefinition | null {
    const normalized =
      code.trim().toUpperCase();

    return (
      currencies.find(
        (currency) =>
          currency.code.toUpperCase() === normalized
      ) ?? null
    );
  }

  convert(
    amount: number,
    context: CurrencyConversionContext
  ): number | null {
    if (
      !Number.isFinite(amount) ||
      context.rate === undefined ||
      !Number.isFinite(context.rate)
    ) {
      return null;
    }

    return amount * context.rate;
  }
}