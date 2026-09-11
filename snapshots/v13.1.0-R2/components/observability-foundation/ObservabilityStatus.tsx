"use client";

import { useState } from "react";

import type {
  BusinessLocale,
} from "@/lib/business-subscription-platform";

type RuntimeMetrics = {
  uptimeSeconds: number;
  rssBytes: number;
  heapTotalBytes: number;
  heapUsedBytes: number;
};

type EventItem = {
  id: string;
  timestamp: string;
  level: string;
  name: string;
  message: string;
};

type ObservabilityReport = {
  ok: boolean;
  service: "MELKISM";
  version: "v6.5";
  environment: string;
  timestamp: string;
  runtime: RuntimeMetrics;
  events: EventItem[];
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
  uptime: string;
  memory: string;
  events: string;
};

const COPY: Record<
  BusinessLocale,
  Copy
> = {
  fa: {
    title:
      "مانیتورینگ MELKISM",
    subtitle:
      "بررسی مشاهده‌پذیری Runtime، منابع و رویدادهای عملیاتی.",
    check:
      "بررسی وضعیت",
    checking:
      "در حال بررسی...",
    healthy:
      "سالم",
    warning:
      "هشدار",
    failed:
      "ناموفق",
    error:
      "دریافت اطلاعات مانیتورینگ ناموفق بود.",
    uptime:
      "زمان فعالیت",
    memory:
      "حافظه",
    events:
      "رویدادهای عملیاتی",
  },

  en: {
    title:
      "MELKISM Observability",
    subtitle:
      "Runtime, resource and operational-event observability.",
    check:
      "Check Status",
    checking:
      "Checking...",
    healthy:
      "Healthy",
    warning:
      "Warning",
    failed:
      "Failed",
    error:
      "Failed to retrieve observability data.",
    uptime:
      "Uptime",
    memory:
      "Memory",
    events:
      "Operational Events",
  },

  ar: {
    title:
      "مراقبة MELKISM",
    subtitle:
      "مراقبة وقت التشغيل والموارد والأحداث التشغيلية.",
    check:
      "فحص الحالة",
    checking:
      "جار الفحص...",
    healthy:
      "سليم",
    warning:
      "تحذير",
    failed:
      "فشل",
    error:
      "تعذر الحصول على بيانات المراقبة.",
    uptime:
      "وقت التشغيل",
    memory:
      "الذاكرة",
    events:
      "الأحداث التشغيلية",
  },

  tr: {
    title:
      "MELKISM Gözlemlenebilirlik",
    subtitle:
      "Çalışma zamanı, kaynak ve operasyonel olay gözlemlenebilirliği.",
    check:
      "Durumu Kontrol Et",
    checking:
      "Kontrol ediliyor...",
    healthy:
      "Sağlıklı",
    warning:
      "Uyarı",
    failed:
      "Başarısız",
    error:
      "Gözlemlenebilirlik verileri alınamadı.",
    uptime:
      "Çalışma süresi",
    memory:
      "Bellek",
    events:
      "Operasyonel Olaylar",
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

  if (
    status === "warning"
  ) {
    return copy.warning;
  }

  return copy.failed;
}

function megabytes(
  value: number,
): string {
  return (
    value /
    1024 /
    1024
  ).toFixed(1) +
    " MB";
}

export function ObservabilityStatus({
  locale,
}: Props) {
  const copy = COPY[locale];

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [report, setReport] =
    useState<ObservabilityReport | null>(
      null,
    );

  async function checkStatus() {
    setLoading(true);
    setError("");

    try {
      const response =
        await fetch(
          "/api/observability-status",
          {
            cache: "no-store",
          },
        );

      const data =
        (await response.json()) as ObservabilityReport;

      if (!response.ok) {
        throw new Error(
          "Observability endpoint failed.",
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
      className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8"
    >
      <div className="mb-8">
        <p className="mb-2 text-sm opacity-70">
          MELKISM v6.5
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
          ? copy.checking
          : copy.check}
      </button>

      {error ? (
        <p className="mt-4 rounded-xl border p-4 text-sm">
          {error}
        </p>
      ) : null}

      {report ? (
        <div className="mt-8 space-y-6">
          <div className="rounded-2xl border p-5">
            <div className="flex flex-wrap gap-4 text-sm">
              <span>
                {report.service}
              </span>

              <span>
                {report.version}
              </span>

              <span>
                {report.environment}
              </span>

              <span>
                {report.ok
                  ? copy.healthy
                  : copy.failed}
              </span>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border p-5">
              <p className="text-sm opacity-60">
                {copy.uptime}
              </p>

              <p className="mt-2 text-2xl font-bold">
                {report.runtime.uptimeSeconds.toFixed(
                  1,
                )}{" "}
                s
              </p>
            </article>

            <article className="rounded-2xl border p-5">
              <p className="text-sm opacity-60">
                {copy.memory}
              </p>

              <p className="mt-2 text-2xl font-bold">
                {megabytes(
                  report.runtime.heapUsedBytes,
                )}
              </p>

              <p className="mt-1 text-xs opacity-60">
                /
                {" "}
                {megabytes(
                  report.runtime.heapTotalBytes,
                )}
              </p>
            </article>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              {copy.events}
            </h2>

            <div className="mt-4 grid gap-4">
              {report.events.map(
                (event) => (
                  <article
                    key={event.id}
                    className="rounded-2xl border p-5"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="font-semibold">
                        {event.name}
                      </h3>

                      <span className="text-sm">
                        {statusLabel(
                          event.level,
                          copy,
                        )}
                      </span>
                    </div>

                    <p className="mt-2 text-sm opacity-70">
                      {event.message}
                    </p>

                    <p className="mt-2 text-xs opacity-50">
                      {event.timestamp}
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

