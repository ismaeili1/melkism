"use client";

import { useState } from "react";

import type {
  BusinessLocale,
} from "@/lib/business-subscription-platform";

type SecurityCheck = {
  name: string;
  status: string;
  message: string;
};

type SecurityReport = {
  ok: boolean;
  service: "MELKISM";
  version: "v6.6";
  timestamp: string;
  checks: SecurityCheck[];
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
  failed: string;
  error: string;
};

const COPY: Record<
  BusinessLocale,
  Copy
> = {
  fa: {
    title:
      "سخت‌سازی امنیتی MELKISM",
    subtitle:
      "بررسی لایه امنیت کاربردی، سیاست درخواست و ایمنی تشخیصی.",
    check:
      "بررسی امنیت",
    checking:
      "در حال بررسی...",
    healthy:
      "سالم",
    warning:
      "هشدار",
    failed:
      "ناموفق",
    error:
      "دریافت گزارش امنیتی ناموفق بود.",
  },

  en: {
    title:
      "MELKISM Security Hardening",
    subtitle:
      "Application security, request policy and diagnostic safety baseline.",
    check:
      "Check Security",
    checking:
      "Checking...",
    healthy:
      "Healthy",
    warning:
      "Warning",
    failed:
      "Failed",
    error:
      "Failed to retrieve security report.",
  },

  ar: {
    title:
      "تقوية أمان MELKISM",
    subtitle:
      "خط أساس لأمان التطبيق وسياسة الطلبات وسلامة التشخيص.",
    check:
      "فحص الأمان",
    checking:
      "جار الفحص...",
    healthy:
      "سليم",
    warning:
      "تحذير",
    failed:
      "فشل",
    error:
      "تعذر الحصول على تقرير الأمان.",
  },

  tr: {
    title:
      "MELKISM Güvenlik Sertleştirmesi",
    subtitle:
      "Uygulama güvenliği, istek politikası ve tanılama güvenliği temeli.",
    check:
      "Güvenliği Kontrol Et",
    checking:
      "Kontrol ediliyor...",
    healthy:
      "Sağlıklı",
    warning:
      "Uyarı",
    failed:
      "Başarısız",
    error:
      "Güvenlik raporu alınamadı.",
  },
};

function statusLabel(
  status: string,
  copy: Copy,
): string {
  if (
    status === "pass" ||
    status === "info"
  ) {
    return copy.healthy;
  }

  if (status === "warning") {
    return copy.warning;
  }

  return copy.failed;
}

export function ApplicationSecurityStatus({
  locale,
}: Props) {
  const copy =
    COPY[locale];

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [report, setReport] =
    useState<SecurityReport | null>(
      null,
    );

  async function checkSecurity() {
    setLoading(true);
    setError("");

    try {
      const response =
        await fetch(
          "/api/security-status",
          {
            cache: "no-store",
          },
        );

      const data =
        (await response.json()) as SecurityReport;

      if (!response.ok) {
        throw new Error(
          "Security endpoint failed.",
        );
      }

      setReport(data);
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
          MELKISM v6.6
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
        onClick={checkSecurity}
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

      {report ? (
        <div className="mt-8 space-y-5">
          <div className="rounded-2xl border p-5">
            <div className="flex flex-wrap gap-4 text-sm">
              <span>
                {report.service}
              </span>

              <span>
                {report.version}
              </span>

              <span>
                {report.ok
                  ? copy.healthy
                  : copy.failed}
              </span>
            </div>
          </div>

          <div className="grid gap-4">
            {report.checks.map(
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
            {report.timestamp}
          </p>
        </div>
      ) : null}
    </section>
  );
}
