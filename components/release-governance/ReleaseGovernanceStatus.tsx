"use client";

import { useState } from "react";

import type {
  BusinessLocale,
} from "@/lib/business-subscription-platform";

type ReleaseCheck = {
  name: string;
  status: string;
  message: string;
};

type ReleaseManifest = {
  service: "MELKISM";
  version: "v6.3";
  status: string;
  generatedAt: string;
  checks: ReleaseCheck[];
};

type Props = {
  locale: BusinessLocale;
};

type Copy = {
  title: string;
  subtitle: string;
  check: string;
  checking: string;
  ready: string;
  warning: string;
  blocked: string;
  error: string;
};

const COPY: Record<
  BusinessLocale,
  Copy
> = {
  fa: {
    title:
      "آمادگی انتشار MELKISM",
    subtitle:
      "وضعیت نهایی قرارداد انتشار و آمادگی استقرار.",
    check:
      "بررسی انتشار",
    checking:
      "در حال بررسی...",
    ready:
      "آماده",
    warning:
      "هشدار",
    blocked:
      "مسدود",
    error:
      "دریافت وضعیت انتشار ناموفق بود.",
  },

  en: {
    title:
      "MELKISM Release Readiness",
    subtitle:
      "Final release governance and deployment-readiness status.",
    check:
      "Check Release",
    checking:
      "Checking...",
    ready:
      "Ready",
    warning:
      "Warning",
    blocked:
      "Blocked",
    error:
      "Failed to retrieve release status.",
  },

  ar: {
    title:
      "جاهزية إصدار MELKISM",
    subtitle:
      "الحالة النهائية لجاهزية الإصدار والنشر.",
    check:
      "فحص الإصدار",
    checking:
      "جار الفحص...",
    ready:
      "جاهز",
    warning:
      "تحذير",
    blocked:
      "محظور",
    error:
      "تعذر الحصول على حالة الإصدار.",
  },

  tr: {
    title:
      "MELKISM Sürüm Hazırlığı",
    subtitle:
      "Son sürüm yönetişimi ve dağıtım hazırlığı durumu.",
    check:
      "Sürümü Kontrol Et",
    checking:
      "Kontrol ediliyor...",
    ready:
      "Hazır",
    warning:
      "Uyarı",
    blocked:
      "Engellendi",
    error:
      "Sürüm durumu alınamadı.",
  },
};

function statusLabel(
  status: string,
  copy: Copy,
): string {
  if (status === "ready") {
    return copy.ready;
  }

  if (status === "warning") {
    return copy.warning;
  }

  return copy.blocked;
}

export function ReleaseGovernanceStatus({
  locale,
}: Props) {
  const copy = COPY[locale];

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [manifest, setManifest] =
    useState<ReleaseManifest | null>(
      null,
    );

  async function checkRelease() {
    setLoading(true);
    setError("");

    try {
      const response =
        await fetch(
          "/api/release-status",
          {
            cache: "no-store",
          },
        );

      const data =
        (await response.json()) as ReleaseManifest;

      if (!response.ok) {
        throw new Error(
          "Release status request failed.",
        );
      }

      setManifest(data);
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
          MELKISM v6.3
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
        onClick={checkRelease}
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

      {manifest ? (
        <div className="mt-8 space-y-5">
          <div className="rounded-2xl border p-5">
            <div className="flex flex-wrap gap-4 text-sm">
              <span>
                {manifest.service}
              </span>

              <span>
                {manifest.version}
              </span>

              <span>
                {statusLabel(
                  manifest.status,
                  copy,
                )}
              </span>
            </div>
          </div>

          <div className="grid gap-4">
            {manifest.checks.map(
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
            {manifest.generatedAt}
          </p>
        </div>
      ) : null}
    </section>
  );
}
