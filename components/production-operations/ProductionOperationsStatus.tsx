"use client";

import { useState } from "react";

import type {
  BusinessLocale,
} from "@/lib/business-subscription-platform";

type ReadinessCheck = {
  name: string;
  status: string;
  message: string;
};

type ReadinessResponse = {
  ok: boolean;
  service: "MELKISM";
  version: "v6.1";
  environment: string;
  timestamp: string;
  checks: ReadinessCheck[];
};

type Props = {
  locale: BusinessLocale;
};

type Copy = {
  title: string;
  subtitle: string;
  check: string;
  loading: string;
  healthy: string;
  warning: string;
  failed: string;
  error: string;
};

const COPY: Record<
  BusinessLocale,
  Copy
> = {
  fa: {
    title:
      "آمادگی عملیاتی MELKISM",
    subtitle:
      "بررسی نهایی زیرساخت عملیاتی، ایمنی و آمادگی انتشار.",
    check:
      "بررسی آمادگی",
    loading:
      "در حال بررسی...",
    healthy:
      "سالم",
    warning:
      "هشدار",
    failed:
      "ناموفق",
    error:
      "دریافت وضعیت آمادگی ناموفق بود.",
  },

  en: {
    title:
      "MELKISM Operational Readiness",
    subtitle:
      "Final operational, safety and release-readiness verification.",
    check:
      "Check Readiness",
    loading:
      "Checking...",
    healthy:
      "Healthy",
    warning:
      "Warning",
    failed:
      "Failed",
    error:
      "Failed to retrieve readiness status.",
  },

  ar: {
    title:
      "الجاهزية التشغيلية لـ MELKISM",
    subtitle:
      "التحقق النهائي من الجاهزية التشغيلية والأمان والإصدار.",
    check:
      "فحص الجاهزية",
    loading:
      "جار الفحص...",
    healthy:
      "سليم",
    warning:
      "تحذير",
    failed:
      "فشل",
    error:
      "تعذر الحصول على حالة الجاهزية.",
  },

  tr: {
    title:
      "MELKISM Operasyonel Hazırlık",
    subtitle:
      "Operasyonel, güvenlik ve sürüm hazırlığının son doğrulaması.",
    check:
      "Hazırlığı Kontrol Et",
    loading:
      "Kontrol ediliyor...",
    healthy:
      "Sağlıklı",
    warning:
      "Uyarı",
    failed:
      "Başarısız",
    error:
      "Hazırlık durumu alınamadı.",
  },
};

function getStatusLabel(
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

export function ProductionOperationsStatus({
  locale,
}: Props) {
  const copy = COPY[locale];

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [result, setResult] =
    useState<ReadinessResponse | null>(
      null,
    );

  async function checkReadiness() {
    setLoading(true);
    setError("");

    try {
      const response =
        await fetch(
          "/api/production-readiness",
          {
            cache: "no-store",
          },
        );

      const data =
        (await response.json()) as ReadinessResponse;

      if (!response.ok) {
        throw new Error(
          "Readiness endpoint failed.",
        );
      }

      setResult(data);
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
          MELKISM v6.1
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
        onClick={checkReadiness}
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

      {result ? (
        <div className="mt-8 space-y-5">
          <div className="rounded-2xl border p-5">
            <div className="flex flex-wrap gap-4 text-sm">
              <span>
                {result.service}
              </span>

              <span>
                {result.version}
              </span>

              <span>
                {result.environment}
              </span>

              <span>
                {result.ok
                  ? copy.healthy
                  : copy.failed}
              </span>
            </div>
          </div>

          <div className="grid gap-4">
            {result.checks.map(
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
                      {getStatusLabel(
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
            {result.timestamp}
          </p>
        </div>
      ) : null}
    </section>
  );
}
