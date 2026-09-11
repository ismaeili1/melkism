"use client";

import { useState } from "react";

import type {
  BusinessLocale,
} from "@/lib/business-subscription-platform";

type Plan = {
  id: string;
  tier: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  currency: string;
  features: string[];
};

type Account = {
  id: string;
  name: string;
  accountType: string;
  verification: string;
};

type Subscription = {
  id: string;
  businessId: string;
  planId: string;
  status: string;
  interval: string;
};

type ResponseData = {
  ok: true;
  accounts: Account[];
  plans: Plan[];
  subscriptions: Subscription[];
};

type Props = {
  locale: BusinessLocale;
};

const COPY = {
  fa: {
    title: "کسب‌وکار و اشتراک",
    subtitle:
      "زیرساخت سازمانی MELKISM برای حرفه‌ای‌ها، آژانس‌ها و سازمان‌ها.",
    load: "بارگذاری",
    loading: "در حال بارگذاری...",
    accounts: "حساب‌های کسب‌وکار",
    plans: "طرح‌های اشتراک",
    active: "فعال",
    trial: "آزمایشی",
    monthly: "ماهانه",
    yearly: "سالانه",
    error: "خطا در دریافت اطلاعات.",
  },

  en: {
    title: "Business & Subscription",
    subtitle:
      "MELKISM business infrastructure for professionals, agencies and organizations.",
    load: "Load",
    loading: "Loading...",
    accounts: "Business accounts",
    plans: "Subscription plans",
    active: "Active",
    trial: "Trial",
    monthly: "Monthly",
    yearly: "Yearly",
    error: "Failed to load business data.",
  },

  ar: {
    title: "الأعمال والاشتراك",
    subtitle:
      "بنية MELKISM للمحترفين والوكالات والمؤسسات.",
    load: "تحميل",
    loading: "جار التحميل...",
    accounts: "حسابات الأعمال",
    plans: "خطط الاشتراك",
    active: "نشط",
    trial: "تجريبي",
    monthly: "شهري",
    yearly: "سنوي",
    error: "فشل تحميل بيانات الأعمال.",
  },

  tr: {
    title: "İşletme ve Abonelik",
    subtitle:
      "Profesyoneller, ajanslar ve kuruluşlar için MELKISM işletme altyapısı.",
    load: "Yükle",
    loading: "Yükleniyor...",
    accounts: "İşletme hesapları",
    plans: "Abonelik planları",
    active: "Aktif",
    trial: "Deneme",
    monthly: "Aylık",
    yearly: "Yıllık",
    error: "İşletme verileri yüklenemedi.",
  },
} as const;

export function BusinessSubscription({
  locale,
}: Props) {
  const copy = COPY[locale];

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [data, setData] =
    useState<ResponseData | null>(
      null,
    );

  async function loadData() {
    setLoading(true);
    setError("");

    try {
      const response =
        await fetch(
          "/api/business-subscription",
        );

      if (!response.ok) {
        throw new Error(
          "Business request failed.",
        );
      }

      const result =
        (await response.json()) as ResponseData;

      setData(result);
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
          MELKISM v5.9
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {copy.title}
        </h1>

        <p className="mt-3 max-w-3xl text-base opacity-75">
          {copy.subtitle}
        </p>
      </div>

      <button
        type="button"
        onClick={loadData}
        disabled={loading}
        className="rounded-xl border px-5 py-3 font-semibold"
      >
        {loading
          ? copy.loading
          : copy.load}
      </button>

      {error ? (
        <p className="mt-4 rounded-xl border p-4 text-sm">
          {error}
        </p>
      ) : null}

      {data ? (
        <div className="mt-8 space-y-8">
          <div>
            <h2 className="text-xl font-semibold">
              {copy.accounts}
            </h2>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {data.accounts.map(
                (account) => (
                  <article
                    key={account.id}
                    className="rounded-2xl border p-5 shadow-sm"
                  >
                    <h3 className="font-semibold">
                      {account.name}
                    </h3>

                    <p className="mt-2 text-sm opacity-70">
                      {account.accountType}
                    </p>

                    <p className="mt-2 text-sm">
                      {account.verification}
                    </p>
                  </article>
                ),
              )}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              {copy.plans}
            </h2>

            <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {data.plans.map(
                (plan) => (
                  <article
                    key={plan.id}
                    className="rounded-2xl border p-5 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold">
                      {plan.name}
                    </h3>

                    <p className="mt-2 text-sm opacity-70">
                      {plan.description}
                    </p>

                    <div className="mt-4 text-xl font-bold">
                      {plan.monthlyPrice ===
                      0
                        ? "Free"
                        : `${plan.monthlyPrice} ${plan.currency}`}
                    </div>

                    <div className="mt-2 text-sm opacity-70">
                      {copy.monthly}
                    </div>

                    <div className="mt-4 space-y-1 text-sm">
                      {plan.features.map(
                        (feature) => (
                          <div
                            key={feature}
                          >
                            {feature}
                          </div>
                        ),
                      )}
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              Subscriptions
            </h2>

            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {data.subscriptions.map(
                (subscription) => (
                  <article
                    key={subscription.id}
                    className="rounded-2xl border p-5"
                  >
                    <div className="flex items-center justify-between">
                      <span>
                        {
                          subscription.planId
                        }
                      </span>

                      <span>
                        {
                          subscription.status
                        }
                      </span>
                    </div>

                    <p className="mt-3 text-sm opacity-70">
                      {
                        subscription.interval
                      }
                    </p>
                  </article>
                ),
              )}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

