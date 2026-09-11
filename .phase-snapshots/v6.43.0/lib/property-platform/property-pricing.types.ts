export interface PropertyPrice {
  amount: number;
  currency: string;
  period?: "one_time" | "daily" | "weekly" | "monthly" | "yearly";
  pricePerArea?: number;
  negotiable?: boolean;
}

export interface PropertyPriceHistoryItem {
  amount: number;
  currency: string;
  recordedAt: string;
  source?: string;
}