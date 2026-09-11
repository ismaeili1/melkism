"use client";

import { useState } from "react";

import type {
  BusinessLocale,
} from "@/lib/business-subscription-platform";

type ReliabilityCheck = {
  name: string;
  status: string;
  message: string;
};

type RuntimeSnapshot = {
  uptimeSeconds: number;
  rssBytes: number;
  heapUsedBytes: number;
  heapTotalBytes: number;
};

type ReliabilityReport = {
  ok: boolean;
  service: "MELKISM";
  version: "v6.2";
  environment: string;
  timestamp: string;
  runtime: RuntimeSnapshot;
  checks: ReliabilityCheck[];
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
};

const COPY: Record<
  BusinessLocale,
  Copy
> = {
  fa: {
    title:
      "پایش پایداری MELKISM",
    subtitle:
      "بررسی Runtime، حافظه و وضعیت عملیاتی پلتفرم.",
    check:
      "بررسی پایداری",
    checking:
      "در حال بررسی...",
    healthy:
      "سالم",
    warning:
      "هشدار",
    failed:
      "ناموفق",
    error:
      "دریافت گزارش پایداری ناموفق بود.",
    uptime:
      "زمان فعالیت",
    memory:
      "حافظه",
  },

  en: {
    title:
      "MELKISM Reliability",
    subtitle:
      "Runtime, memory and operational reliability diagnostics.",
    check:
      "Check Reliability",
    checking:
      "Checking...",
    healthy:
      "Healthy",
    warning:
      "Warning",
    failed:
      "Failed",
    error:
      "Failed to retrieve reliability report.",
    uptime:
      "Uptime",
    memory:
      "Memory",
  },

  ar: {
    title:
      "موثوقية MELKISM",
    subtitle:
      "تشخيص وقت التشغيل والذاكرة والحالة التشغيلية.",
    check:
      "فحص الموثوقية",
    checking:
      "جار الفحص...",
    healthy:
      "سليم",
    warning:
      "تحذير",
    failed:
      "فشل",
    error:
      "تعذر الحصول على تقرير الموثوقية.",
    uptime:
      "وقت التشغيل",
    memory:
      "الذاكرة",
  },

  tr: {
    title:
      "MELKISM Güvenilirliği",
    subtitle:
      "Çalışma zamanı, bellek ve operasyonel güvenilirlik tanılaması.",
    check:
      "Güvenilirliği Kontrol Et",
    checking:
      "Kontrol ediliyor...",
    healthy:
      "Sağlıklı",
    warning:
      "Uyarı",
    failed:
      "Başarısız",
    error:
      "Güvenilirlik raporu alınamadı.",
    uptime:
      "Çalışma süresi",
    memory:
      "Bellek",
  },
};

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

function megabytes(
  value: number,
): string {
  return (
    value /
    1024 /
    1024
  ).toFixed(1) + " MB";
}

export function ProductionReliabilityStatus({
  locale,
}: Props) {
  const copy =
    COPY[locale];

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [report, setReport] =
    useState<ReliabilityReport | null>(
      null,
    );

  async function checkReliability() {
    setLoading(true);
    setError("");

    try {
      const response =
        await fetch(
          "/api/reliability-status",
          {
            cache: "no-store",
          },
        );

      const data =
        (await response.json()) as ReliabilityReport;

      if (!response.ok) {
        throw new Error(
          "Reliability endpoint failed.",
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
          MELKISM v6.2
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
        onClick={checkReliability}
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
                {report.environment}
              </span>

              <span>
                {report.ok
                  ? copy.healthy
                  : copy.failed}
              </span>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
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

