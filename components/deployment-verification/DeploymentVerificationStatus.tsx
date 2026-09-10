"use client";

import { useState } from "react";

import type {
  BusinessLocale,
} from "@/lib/business-subscription-platform";

type DeploymentCheck = {
  name: string;
  status: string;
  message: string;
};

type DeploymentReadiness = {
  service: "MELKISM";
  version: "v6.4";
  status: string;
  environment: string;
  timestamp: string;
  checks: DeploymentCheck[];
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
  warning: string;
  fail: string;
  error: string;
};

const COPY: Record<
  BusinessLocale,
  Copy
> = {
  fa: {
    title:
      "آمادگی استقرار MELKISM",
    subtitle:
      "بررسی محیط، قرارداد انتشار و آمادگی استقرار.",
    check:
      "بررسی استقرار",
    checking:
      "در حال بررسی...",
    pass:
      "آماده",
    warning:
      "هشدار",
    fail:
      "ناموفق",
    error:
      "دریافت وضعیت استقرار ناموفق بود.",
  },

  en: {
    title:
      "MELKISM Deployment Readiness",
    subtitle:
      "Environment, release-contract and deployment-readiness verification.",
    check:
      "Check Deployment",
    checking:
      "Checking...",
    pass:
      "Ready",
    warning:
      "Warning",
    fail:
      "Failed",
    error:
      "Failed to retrieve deployment readiness.",
  },

  ar: {
    title:
      "جاهزية نشر MELKISM",
    subtitle:
      "التحقق من البيئة وعقد الإصدار وجاهزية النشر.",
    check:
      "فحص النشر",
    checking:
      "جار الفحص...",
    pass:
      "جاهز",
    warning:
      "تحذير",
    fail:
      "فشل",
    error:
      "تعذر الحصول على حالة جاهزية النشر.",
  },

  tr: {
    title:
      "MELKISM Dağıtım Hazırlığı",
    subtitle:
      "Ortam, sürüm sözleşmesi ve dağıtım hazırlığının doğrulanması.",
    check:
      "Dağıtımı Kontrol Et",
    checking:
      "Kontrol ediliyor...",
    pass:
      "Hazır",
    warning:
      "Uyarı",
    fail:
      "Başarısız",
    error:
      "Dağıtım hazırlığı alınamadı.",
  },
};

function statusLabel(
  status: string,
  copy: Copy,
): string {
  if (status === "pass") {
    return copy.pass;
  }

  if (status === "warning") {
    return copy.warning;
  }

  return copy.fail;
}

export function DeploymentVerificationStatus({
  locale,
}: Props) {
  const copy = COPY[locale];

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [result, setResult] =
    useState<DeploymentReadiness | null>(
      null,
    );

  async function checkDeployment() {
    setLoading(true);
    setError("");

    try {
      const response =
        await fetch(
          "/api/deployment-readiness",
          {
            cache: "no-store",
          },
        );

      const data =
        (await response.json()) as DeploymentReadiness;

      if (!response.ok) {
        throw new Error(
          "Deployment readiness failed.",
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
          MELKISM v6.4
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
        onClick={checkDeployment}
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
                {statusLabel(
                  result.status,
                  copy,
                )}
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
            {result.timestamp}
          </p>
        </div>
      ) : null}
    </section>
  );
}
