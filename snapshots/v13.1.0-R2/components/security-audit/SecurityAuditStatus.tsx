"use client";

import {
  useState,
} from "react";

import type {
  BusinessLocale,
} from "@/lib/business-subscription-platform";

type SecurityAuditSummary = {
  ok: boolean;
  service: "MELKISM";
  version: "v6.8";
  timestamp: string;
  totalEvents: number;
  infoEvents: number;
  warningEvents: number;
  criticalEvents: number;
  failedEvents: number;
};

type Props = {
  locale: BusinessLocale;
};

type Copy = {
  title: string;
  subtitle: string;
  check: string;
  checking: string;
  healthy: string;
  warning: string;
  critical: string;
  total: string;
  info: string;
  warnings: string;
  failures: string;
  error: string;
};

const COPY: Record<
  BusinessLocale,
  Copy
> = {
  fa: {
    title:
      "گزارش امنیتی MELKISM",
    subtitle:
      "خلاصه‌ی رویدادهای امنیتی بدون نمایش اطلاعات حساس.",
    check:
      "بررسی گزارش",
    checking:
      "در حال بررسی...",
    healthy:
      "سالم",
    warning:
      "هشدار",
    critical:
      "بحرانی",
    total:
      "کل رویدادها",
    info:
      "اطلاعاتی",
    warnings:
      "هشدارها",
    failures:
      "خطاها",
    error:
      "دریافت گزارش امنیتی ناموفق بود.",
  },

  en: {
    title:
      "MELKISM Security Audit",
    subtitle:
      "Sanitized security-event summary without sensitive payload exposure.",
    check:
      "Check Audit",
    checking:
      "Checking...",
    healthy:
      "Healthy",
    warning:
      "Warning",
    critical:
      "Critical",
    total:
      "Total Events",
    info:
      "Informational",
    warnings:
      "Warnings",
    failures:
      "Failures",
    error:
      "Failed to retrieve security audit.",
  },

  ar: {
    title:
      "تدقيق أمان MELKISM",
    subtitle:
      "ملخص آمن للأحداث دون عرض البيانات الحساسة.",
    check:
      "فحص التدقيق",
    checking:
      "جار الفحص...",
    healthy:
      "سليم",
    warning:
      "تحذير",
    critical:
      "حرج",
    total:
      "إجمالي الأحداث",
    info:
      "معلومات",
    warnings:
      "تحذيرات",
    failures:
      "إخفاقات",
    error:
      "تعذر الحصول على تدقيق الأمان.",
  },

  tr: {
    title:
      "MELKISM Güvenlik Denetimi",
    subtitle:
      "Hassas veri göstermeden temizlenmiş güvenlik olayı özeti.",
    check:
      "Denetimi Kontrol Et",
    checking:
      "Kontrol ediliyor...",
    healthy:
      "Sağlıklı",
    warning:
      "Uyarı",
    critical:
      "Kritik",
    total:
      "Toplam Olay",
    info:
      "Bilgi",
    warnings:
      "Uyarılar",
    failures:
      "Hatalar",
    error:
      "Güvenlik denetimi alınamadı.",
  },
};

function overallLabel(
  summary: SecurityAuditSummary,
  copy: Copy,
): string {
  if (
    summary.criticalEvents > 0
  ) {
    return copy.critical;
  }

  if (
    summary.warningEvents > 0
  ) {
    return copy.warning;
  }

  return copy.healthy;
}

export function SecurityAuditStatus({
  locale,
}: Props) {
  const copy =
    COPY[locale];

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [summary, setSummary] =
    useState<SecurityAuditSummary | null>(
      null,
    );

  async function checkAudit() {
    setLoading(true);
    setError("");

    try {
      const response =
        await fetch(
          "/api/security-audit",
          {
            cache: "no-store",
          },
        );

      const data =
        (await response.json()) as SecurityAuditSummary;

      if (!response.ok) {
        throw new Error(
          "Security audit endpoint failed.",
        );
      }

      setSummary(data);
    } catch {
      setError(copy.error);
    } finally {
      setLoading(false);
    }
  }

  const cards = summary
    ? [
        {
          label: copy.total,
          value:
            summary.totalEvents,
        },
        {
          label: copy.info,
          value:
            summary.infoEvents,
        },
        {
          label: copy.warnings,
          value:
            summary.warningEvents,
        },
        {
          label: copy.failures,
          value:
            summary.failedEvents,
        },
      ]
    : [];

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
          MELKISM v6.8
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
        onClick={checkAudit}
        disabled={loading}
        className="rounded-xl border px-5 py-3 font-semibold"
      >
        {loading
          ? copy.checking
          : copy.check}
      </button>

      {error ? (
        <p className="mt-4 rounded-xl border p-4 text-sm">
          {error}
        </p>
      ) : null}

      {summary ? (
        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border p-5">
            <div className="flex flex-wrap gap-4 text-sm">
              <span>
                {summary.service}
              </span>

              <span>
                {summary.version}
              </span>

              <span>
                {overallLabel(
                  summary,
                  copy,
                )}
              </span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map(
              (card) => (
                <article
                  key={card.label}
                  className="rounded-2xl border p-5"
                >
                  <p className="text-sm opacity-60">
                    {card.label}
                  </p>

                  <p className="mt-2 text-3xl font-bold">
                    {card.value}
                  </p>
                </article>
              ),
            )}
          </div>

          <div className="rounded-2xl border p-5 text-sm">
            <p>
              {copy.critical}:{" "}
              {summary.criticalEvents}
            </p>

            <p className="mt-2">
              {summary.timestamp}
            </p>
          </div>
        </div>
      ) : null}
    </section>
  );
}

