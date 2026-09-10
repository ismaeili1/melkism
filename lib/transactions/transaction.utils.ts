export function normalizeCurrency(
  currency: string
): string {
  return currency.trim().toUpperCase();
}

export function isValidTransactionAmount(
  amount: number | undefined
): boolean {
  if (amount === undefined) {
    return true;
  }

  return Number.isFinite(amount) && amount >= 0;
}

export function calculatePercentageAmount(
  amount: number,
  percentage: number
): number {
  if (!Number.isFinite(amount) || !Number.isFinite(percentage)) {
    return 0;
  }

  return amount * (percentage / 100);
}