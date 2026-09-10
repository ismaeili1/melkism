"use client";

import {
  useState,
} from "react";

import type {
  BusinessLocale,
} from "@/lib/business-subscription-platform";

type HealthCheck = {
  name: string;
  status: string;
  message: string;
};

type HealthResponse = {
  ok: boolean;
  service: "MELKISM";
  version: "v6.0";
  environment: string;
  timestamp: string;
  checks: HealthCheck[];
};

type Props = {
  locale: BusinessLocale;
};

type Copy = typeof COPY[keyof typeof COPY];

const COPY = {
  fa: {
    title: "وضعیت انتشار MELKISM",
    subtitle:
      "بررسی نهایی آمادگی زیرساخت برای انتشار.",
    check: "بررسی وضعیت",
    loading: "در حال بررسی...",
    healthy: "سالم",
    warning: "هشدار",
    failed: "ناموفق",
    error:
      "دریافت وضعیت سیستم ناموفق بود.",
  },

  en: {
    title: "MELKISM Release Status",
    subtitle:
      "Final production-readiness status for the MELKISM platform.",
    check: "Check Status",
    loading: "Checking...",
    healthy: "Healthy",
    warning: "Warning",
    failed: "Failed",
    error:
      "Failed to retrieve system status.",
  },

  ar: {
    title: "حالة إصدار MELKISM",
    subtitle:
      "التحقق النهائي من جاهزية المنصة للإنتاج.",
    check: "فحص الحالة",
    loading: "جار الفحص...",
    healthy: "سليم",
    warning: "تحذير",
    failed: "فشل",
    error:
      "تعذر الحصول على حالة النظام.",
  },

  tr: {
    title: "MELKISM Sürüm Durumu",
    subtitle:
      "MELKISM platformunun üretim hazırlığı için son durum.",
    check: "Durumu Kontrol Et",
    loading: "Kontrol ediliyor...",
    healthy: "Sağlıklı",
    warning: "Uyarı",
    failed: "Başarısız",
    error:
      "Sistem durumu alınamadı.",
  },
} as const;

function statusLabel(
  status: string,
  copy: Copy,
): string {
  if (status === "pass") {
    return copy.healthy;
  }

  if (status === "warning") {
    return copy.warning;
  }

  return copy.failed;
}

export function ProductionReleaseStatus({
  locale,
}: Props) {
  const copy = COPY[locale];

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [health, setHealth] =
    useState<HealthResponse | null>(
      null,
    );

  async function checkStatus() {
    setLoading(true);
    setError("");

    try {
      const response =
        await fetch(
          "/api/system-health",
          {
            cache: "no-store",
          },
        );

      const result =
        (await response.json()) as HealthResponse;

      if (!response.ok) {
        throw new Error(
          "Health endpoint failed.",
        );
      }

      setHealth(result);
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
      className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mb-8">
        <p className="mb-2 text-sm opacity-70">
          MELKISM v6.0
        </p>

        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {copy.title}
        </h1>

        <p className="mt-3 max-w-3xl opacity-75">
          {copy.subtitle}
        </p>
      </div>

      <button
        type="button"
        onClick={checkStatus}
        disabled={loading}
        className="rounded-xl border px-5 py-3 font-semibold"
      >
        {loading
          ? copy.loading
          : copy.check}
      </button>

      {error ? (
        <p className="mt-4 rounded-xl border p-4 text-sm">
          {error}
        </p>
      ) : null}

      {health ? (
        <div className="mt-8 space-y-5">
          <div className="rounded-2xl border p-5">
            <div className="flex flex-wrap gap-4 text-sm">
              <span>
                {health.service}
              </span>

              <span>
                {health.version}
              </span>

              <span>
                {health.environment}
              </span>

              <span>
                {health.ok
                  ? copy.healthy
                  : copy.failed}
              </span>
            </div>
          </div>

          <div className="grid gap-4">
            {health.checks.map(
              (check) => (
                <article
                  key={check.name}
                  className="rounded-2xl border p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="font-semibold">
                      {check.name}
                    </h2>

                    <span className="text-sm">
                      {statusLabel(
                        check.status,
                        copy,
                      )}
                    </span>
                  </div>

                  <p className="mt-2 text-sm opacity-70">
                    {check.message}
                  </p>
                </article>
              ),
            )}
          </div>

          <p className="text-xs opacity-60">
            {health.timestamp}
          </p>
        </div>
      ) : null}
    </section>
  );
}
