"use client";

import {
  useState,
} from "react";

import type {
  BusinessLocale,
} from "@/lib/business-subscription-platform";

type SecurityControlReport = {
  ok: boolean;
  service: "MELKISM";
  version: "v6.7";
  timestamp: string;
  controls: {
    methodPolicy: boolean;
    originPolicy: boolean;
    csrfBoundary: boolean;
    rateLimitPolicy: boolean;
  };
};

type Props = {
  locale: BusinessLocale;
};

type Copy = {
  title: string;
  subtitle: string;
  check: string;
  checking: string;
  pass: string;
  fail: string;
  error: string;
  method: string;
  origin: string;
  csrf: string;
  rate: string;
};

const COPY: Record<
  BusinessLocale,
  Copy
> = {
  fa: {
    title:
      "محافظت از درخواست‌های MELKISM",
    subtitle:
      "کنترل روش درخواست، Origin، CSRF و محدودسازی نرخ.",
    check:
      "بررسی امنیت درخواست",
    checking:
      "در حال بررسی...",
    pass:
      "فعال",
    fail:
      "غیرفعال",
    error:
      "دریافت گزارش امنیتی ناموفق بود.",
    method:
      "سیاست Method",
    origin:
      "سیاست Origin",
    csrf:
      "مرز CSRF",
    rate:
      "محدودسازی نرخ",
  },

  en: {
    title:
      "MELKISM Request Protection",
    subtitle:
      "HTTP method, origin, CSRF and rate-limit protection baseline.",
    check:
      "Check Protection",
    checking:
      "Checking...",
    pass:
      "Active",
    fail:
      "Inactive",
    error:
      "Failed to retrieve security controls.",
    method:
      "Method Policy",
    origin:
      "Origin Policy",
    csrf:
      "CSRF Boundary",
    rate:
      "Rate Limiting",
  },

  ar: {
    title:
      "حماية طلبات MELKISM",
    subtitle:
      "خط أساس لحماية الطريقة وOrigin وCSRF ومعدل الطلبات.",
    check:
      "فحص الحماية",
    checking:
      "جار الفحص...",
    pass:
      "نشط",
    fail:
      "غير نشط",
    error:
      "تعذر الحصول على ضوابط الأمان.",
    method:
      "سياسة الطريقة",
    origin:
      "سياسة Origin",
    csrf:
      "حد CSRF",
    rate:
      "تحديد المعدل",
  },

  tr: {
    title:
      "MELKISM İstek Koruması",
    subtitle:
      "HTTP yöntemi, origin, CSRF ve hız sınırlama güvenlik temeli.",
    check:
      "Korumayı Kontrol Et",
    checking:
      "Kontrol ediliyor...",
    pass:
      "Aktif",
    fail:
      "Pasif",
    error:
      "Güvenlik kontrolleri alınamadı.",
    method:
      "Method Politikası",
    origin:
      "Origin Politikası",
    csrf:
      "CSRF Sınırı",
    rate:
      "Hız Sınırlama",
  },
};

export function RequestProtectionStatus({
  locale,
}: Props) {
  const copy =
    COPY[locale];

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [report, setReport] =
    useState<SecurityControlReport | null>(
      null,
    );

  async function checkProtection() {
    setLoading(true);
    setError("");

    try {
      const response =
        await fetch(
          "/api/request-protection?report=true",
          {
            cache: "no-store",
          },
        );

      const data =
        (await response.json()) as SecurityControlReport;

      if (!response.ok) {
        throw new Error(
          "Security controls request failed.",
        );
      }

      setReport(data);
    } catch {
      setError(copy.error);
    } finally {
      setLoading(false);
    }
  }

  const controls = report
    ? [
        {
          name:
            copy.method,
          value:
            report.controls
              .methodPolicy,
        },
        {
          name:
            copy.origin,
          value:
            report.controls
              .originPolicy,
        },
        {
          name:
            copy.csrf,
          value:
            report.controls
              .csrfBoundary,
        },
        {
          name:
            copy.rate,
          value:
            report.controls
              .rateLimitPolicy,
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
          MELKISM v6.7
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
        onClick={checkProtection}
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
                  ? copy.pass
                  : copy.fail}
              </span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {controls.map(
              (control) => (
                <article
                  key={control.name}
                  className="rounded-2xl border p-5"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold">
                      {control.name}
                    </h2>

                    <span className="text-sm">
                      {control.value
                        ? copy.pass
                        : copy.fail}
                    </span>
                  </div>
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

