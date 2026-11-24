export type CurrencyCode =
  | "IRT"
  | "USD"
  | "EUR"
  | "TRY"
  | "AED"
  | "GBP"
  | "SAR"
  | "CNY";

export interface CurrencyOption {
  code: CurrencyCode;
  labelFa: string;
  labelEn: string;
  symbol: string;
}

export const SUPPORTED_CURRENCIES: CurrencyOption[] = [
  { code: "IRT", labelFa: "تومان (IRT)", labelEn: "Toman (IRT)", symbol: "تومان" },
  { code: "EUR", labelFa: "یورو (EUR)", labelEn: "Euro (EUR)", symbol: "€" },
  { code: "USD", labelFa: "دلار (USD)", labelEn: "US Dollar (USD)", symbol: "$" },
  { code: "TRY", labelFa: "لیر ترکیه (TRY)", labelEn: "Turkish Lira (TRY)", symbol: "₺" },
  { code: "AED", labelFa: "درهم امارات (AED)", labelEn: "UAE Dirham (AED)", symbol: "د.إ" },
  { code: "GBP", labelFa: "پوند (GBP)", labelEn: "British Pound (GBP)", symbol: "£" },
  { code: "SAR", labelFa: "ریال عربستان (SAR)", labelEn: "Saudi Riyal (SAR)", symbol: "﷼" },
  { code: "CNY", labelFa: "یوان چین (CNY)", labelEn: "Chinese Yuan (CNY)", symbol: "¥" },
];

export interface ManualCurrencyQuoteMessage {
  id: string;
  listingOrItemTitle: string;
  declaredAmount: string;
  declaredCurrency: CurrencyCode;
  requestedCurrency: CurrencyCode;
  manualConvertedAmount: string;
  originNote: string;
  createdAt: string;
}

const CURRENCY_PREF_KEY = "melkism_preferred_currency_v1";
const CURRENCY_QUOTES_KEY = "melkism_manual_currency_quotes_v1";

export function getCurrencyMeta(code: string): CurrencyOption {
  const normalized = String(code || "IRT").toUpperCase() as CurrencyCode;
  return (
    SUPPORTED_CURRENCIES.find((c) => c.code === normalized) || SUPPORTED_CURRENCIES[0]
  );
}

export function formatDeclaredMoney(
  amount: string | number,
  currencyCode: string,
  isRtl = true
): string {
  const meta = getCurrencyMeta(currencyCode);
  const rawStr = String(amount ?? "").trim();
  if (!rawStr) return "-";

  const numeric = Number(rawStr.replace(/,/g, ""));
  const formattedNum = Number.isFinite(numeric)
    ? numeric.toLocaleString(isRtl ? "fa-IR" : "en-US")
    : rawStr;

  if (meta.code === "IRT") {
    return `${formattedNum} ${isRtl ? "تومان" : "Toman"}`;
  }

  return `${formattedNum} ${meta.symbol} (${meta.code})`;
}

export function loadPreferredCurrency(): CurrencyCode {
  if (typeof window === "undefined") return "IRT";
  try {
    const saved = window.localStorage.getItem(CURRENCY_PREF_KEY);
    if (saved) {
      return getCurrencyMeta(saved).code;
    }
  } catch {
    // نادیده گرفتن خطا
  }
  return "IRT";
}

export function savePreferredCurrency(code: CurrencyCode): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CURRENCY_PREF_KEY, code);
  } catch {
    // نادیده گرفتن خطا
  }
}

export function loadManualCurrencyQuotes(): ManualCurrencyQuoteMessage[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(CURRENCY_QUOTES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveManualCurrencyQuotes(list: ManualCurrencyQuoteMessage[]): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CURRENCY_QUOTES_KEY, JSON.stringify(list));
  } catch {
    // نادیده گرفتن خطا
  }
}
