"use client";

import { useState } from "react";

import type {
  MarketplaceLocale,
} from "@/lib/property-marketplace-platform";

type Listing = {
  id: string;
  title: string;
  description: string;
  listingType: string;
  verification: string;
  location: {
    city: string;
    district: string;
  };
  areaM2: number;
  bedrooms?: number;
  bathrooms?: number;
  price: number;
  currency: string;
  featured: boolean;
};

type MarketplaceResponse = {
  ok: true;
  total: number;
  listings: Listing[];
};

type Props = {
  locale: MarketplaceLocale;
};

const COPY = {
  fa: {
    title: "بازار هوشمند املاک",
    subtitle:
      "جست‌وجوی یکپارچه برای خرید، اجاره، سرمایه‌گذاری و دارایی‌های حرفه‌ای.",
    search: "جست‌وجو",
    placeholder:
      "شهر، منطقه یا نوع ملک...",
    all: "همه",
    sale: "فروش",
    rent: "اجاره",
    lease: "لیز",
    investment: "سرمایه‌گذاری",
    featured: "ویژه",
    verified: "تأییدشده",
    results: "نتیجه",
    noResults: "موردی پیدا نشد.",
    error: "خطا در ارتباط با بازار املاک.",
  },

  en: {
    title: "Property Marketplace",
    subtitle:
      "Unified discovery for buying, renting, investing and professional property assets.",
    search: "Search",
    placeholder:
      "City, district or property type...",
    all: "All",
    sale: "Sale",
    rent: "Rent",
    lease: "Lease",
    investment: "Investment",
    featured: "Featured",
    verified: "Verified",
    results: "results",
    noResults: "No properties found.",
    error: "Marketplace request failed.",
  },

  ar: {
    title: "سوق العقارات",
    subtitle:
      "اكتشاف موحد للبيع والإيجار والاستثمار والأصول العقارية المهنية.",
    search: "بحث",
    placeholder:
      "المدينة أو المنطقة أو نوع العقار...",
    all: "الكل",
    sale: "بيع",
    rent: "إيجار",
    lease: "تأجير",
    investment: "استثمار",
    featured: "مميز",
    verified: "موثوق",
    results: "نتيجة",
    noResults: "لم يتم العثور على عقارات.",
    error: "فشل طلب سوق العقارات.",
  },

  tr: {
    title: "Gayrimenkul Pazarı",
    subtitle:
      "Satış, kiralama, yatırım ve profesyonel gayrimenkul varlıkları için birleşik keşif.",
    search: "Ara",
    placeholder:
      "Şehir, ilçe veya mülk türü...",
    all: "Tümü",
    sale: "Satılık",
    rent: "Kiralık",
    lease: "Kiralama",
    investment: "Yatırım",
    featured: "Öne çıkan",
    verified: "Doğrulanmış",
    results: "sonuç",
    noResults: "Gayrimenkul bulunamadı.",
    error: "Gayrimenkul pazarı isteği başarısız.",
  },
} as const;

function formatPrice(
  value: number,
  currency: string,
): string {
  return (
    new Intl.NumberFormat(
      "en-US",
      {
        maximumFractionDigits: 0,
      },
    ).format(value) +
    ` ${currency}`
  );
}

export function PropertyMarketplace({
  locale,
}: Props) {
  const copy = COPY[locale];

  const [query, setQuery] =
    useState("");

  const [listingType, setListingType] =
    useState("");

  const [verifiedOnly, setVerifiedOnly] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [response, setResponse] =
    useState<MarketplaceResponse | null>(
      null,
    );

  const [error, setError] =
    useState("");

  async function runSearch() {
    setLoading(true);
    setError("");

    try {
      const payload: Record<
        string,
        string | boolean
      > = {
        query,
        verifiedOnly,
      };

      if (listingType) {
        payload.listingType =
          listingType;
      }

      const httpResponse =
        await fetch(
          "/api/property-marketplace",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify(
              payload,
            ),
          },
        );

      if (!httpResponse.ok) {
        throw new Error(
          "Marketplace request failed.",
        );
      }

      const data =
        (await httpResponse.json()) as MarketplaceResponse;

      setResponse(data);
    } catch {
      setError(copy.error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      dir={
        locale === "fa" ||
        locale === "ar"
          ? "rtl"
          : "ltr"
      }
      className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mb-8">
        <p className="mb-2 text-sm font-medium opacity-70">
          MELKISM v5.8
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {copy.title}
        </h1>

        <p className="mt-3 max-w-3xl text-base opacity-75">
          {copy.subtitle}
        </p>
      </div>

      <div className="rounded-2xl border p-4 shadow-sm">
        <div className="grid gap-3 md:grid-cols-[1fr_auto_auto_auto]">
          <input
            value={query}
            onChange={(event) =>
              setQuery(
                event.target.value,
              )
            }
            placeholder={
              copy.placeholder
            }
            className="rounded-xl border px-4 py-3 outline-none"
            aria-label={
              copy.placeholder
            }
          />

          <select
            value={listingType}
            onChange={(event) =>
              setListingType(
                event.target.value,
              )
            }
            className="rounded-xl border px-4 py-3"
            aria-label={copy.all}
          >
            <option value="">
              {copy.all}
            </option>
            <option value="sale">
              {copy.sale}
            </option>
            <option value="rent">
              {copy.rent}
            </option>
            <option value="investment">
              {copy.investment}
            </option>
            <option value="lease">
              {copy.lease}
            </option>
          </select>

          <label className="flex items-center gap-2 rounded-xl border px-4 py-3 text-sm">
            <input
              type="checkbox"
              checked={
                verifiedOnly
              }
              onChange={(event) =>
                setVerifiedOnly(
                  event.target.checked,
                )
              }
            />
            {copy.verified}
          </label>

          <button
            type="button"
            onClick={runSearch}
            disabled={loading}
            className="rounded-xl border px-5 py-3 font-semibold"
          >
            {loading
              ? "..."
              : copy.search}
          </button>
        </div>
      </div>

      {error ? (
        <p className="mt-4 rounded-xl border p-4 text-sm">
          {error}
        </p>
      ) : null}

      {response ? (
        <div className="mt-8">
          <p className="mb-4 text-sm opacity-70">
            {response.total}{" "}
            {copy.results}
          </p>

          {response.listings.length ===
          0 ? (
            <div className="rounded-2xl border p-8 text-center">
              {copy.noResults}
            </div>
          ) : (
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {response.listings.map(
                (listing) => (
                  <article
                    key={listing.id}
                    className="overflow-hidden rounded-2xl border shadow-sm"
                  >
                    <div className="flex items-center justify-between border-b px-5 py-3 text-xs">
                      <span>
                        {
                          listing.listingType
                        }
                      </span>

                      <div className="flex gap-2">
                        {listing.featured ? (
                          <span className="rounded-full border px-2 py-1">
                            {
                              copy.featured
                            }
                          </span>
                        ) : null}

                        {listing.verification ===
                          "verified" ||
                        listing.verification ===
                          "trusted" ? (
                          <span className="rounded-full border px-2 py-1">
                            {
                              copy.verified
                            }
                          </span>
                        ) : null}
                      </div>
                    </div>

                    <div className="p-5">
                      <h2 className="text-lg font-semibold">
                        {listing.title}
                      </h2>

                      <p className="mt-2 text-sm opacity-70">
                        {
                          listing.description
                        }
                      </p>

                      <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <span className="opacity-60">
                            Location
                          </span>

                          <p className="font-medium">
                            {
                              listing.location
                                .city
                            }
                            {" · "}
                            {
                              listing.location
                                .district
                            }
                          </p>
                        </div>

                        <div>
                          <span className="opacity-60">
                            Area
                          </span>

                          <p className="font-medium">
                            {
                              listing.areaM2
                            }{" "}
                            m²
                          </p>
                        </div>

                        {typeof listing.bedrooms ===
                        "number" ? (
                          <div>
                            <span className="opacity-60">
                              Bedrooms
                            </span>

                            <p className="font-medium">
                              {
                                listing.bedrooms
                              }
                            </p>
                          </div>
                        ) : null}

                        {typeof listing.bathrooms ===
                        "number" ? (
                          <div>
                            <span className="opacity-60">
                              Bathrooms
                            </span>

                            <p className="font-medium">
                              {
                                listing.bathrooms
                              }
                            </p>
                          </div>
                        ) : null}
                      </div>

                      <div className="mt-5 border-t pt-4 text-lg font-bold">
                        {formatPrice(
                          listing.price,
                          listing.currency,
                        )}
                      </div>
                    </div>
                  </article>
                ),
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl border p-8 text-center text-sm opacity-70">
          {copy.search}
        </div>
      )}
    </section>
  );
}

