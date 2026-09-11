"use client";

import { useState } from "react";

type SecurityPolicy = {
  ok: boolean;
  service: "MELKISM";
  version: "v6.10";
  timestamp: string;
  status: "pass" | "warning" | "blocked";
  headers: Array<{
    id: string;
    header: string;
    value: string;
    status: "pass" | "warning" | "blocked";
    scope: "api" | "controlled-response" | "reference";
    description: string;
  }>;
  totalHeaders: number;
  passedHeaders: number;
  warningHeaders: number;
  blockedHeaders: number;
};

type Copy = {
  title: string;
  description: string;
  load: string;
  status: string;
  headers: string;
  notLoaded: string;
};

const COPY: Record<"fa" | "en" | "ar" | "tr", Copy> = {
  fa: {
    title: "سیاست امنیتی MELKISM",
    description: "مرجع مرکزی Secure Headers و Security Policy در MELKISM v6.10",
    load: "دریافت Policy",
    status: "وضعیت",
    headers: "هدرها",
    notLoaded: "وضعیت Policy هنوز دریافت نشده است."
  },
  en: {
    title: "MELKISM Security Policy",
    description: "Central Secure Headers and Security Policy for MELKISM v6.10",
    load: "Load Policy",
    status: "Status",
    headers: "Headers",
    notLoaded: "Security policy has not been loaded yet."
  },
  ar: {
    title: "سياسة أمان MELKISM",
    description: "المرجع المركزي للرؤوس وسياسة الأمان في MELKISM v6.10",
    load: "تحميل السياسة",
    status: "الحالة",
    headers: "الرؤوس",
    notLoaded: "لم يتم تحميل سياسة الأمان بعد."
  },
  tr: {
    title: "MELKISM Güvenlik Politikası",
    description: "MELKISM v6.10 merkezi Secure Headers ve Security Policy",
    load: "Politikayı Yükle",
    status: "Durum",
    headers: "Başlıklar",
    notLoaded: "Güvenlik politikası henüz yüklenmedi."
  }
};

function getCopy(locale: string): Copy {
  if (locale === "fa" || locale === "ar" || locale === "tr") {
    return COPY[locale];
  }

  return COPY.en;
}

export function SecurityPolicyStatus({
  locale
}: {
  locale: string;
}) {
  const copy = getCopy(locale);
  const [data, setData] = useState<SecurityPolicy | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function loadPolicy() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/security-policy", {
        method: "GET",
        cache: "no-store"
      });

      const payload = (await response.json()) as SecurityPolicy;

      if (!response.ok) {
        throw new Error("Security policy request failed.");
      }

      setData(payload);
    } catch {
      setError("Unable to load security policy.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      dir={locale === "fa" || locale === "ar" ? "rtl" : "ltr"}
      style={{
        display: "grid",
        gap: "1rem",
        padding: "2rem",
        maxWidth: "1000px",
        margin: "0 auto"
      }}
    >
      <div>
        <h1>{copy.title}</h1>
        <p>{copy.description}</p>
      </div>

      <button
        type="button"
        onClick={loadPolicy}
        disabled={loading}
        style={{
          width: "fit-content",
          padding: "0.7rem 1rem"
        }}
      >
        {loading ? "..." : copy.load}
      </button>

      {error ? (
        <p role="alert">{error}</p>
      ) : null}

      {!data && !loading && !error ? (
        <p>{copy.notLoaded}</p>
      ) : null}

      {data ? (
        <div
          style={{
            display: "grid",
            gap: "1rem"
          }}
        >
          <strong>
            {copy.status}: {data.status}
          </strong>

          <strong>
            {copy.headers}: {data.passedHeaders}/{data.totalHeaders}
          </strong>

          <div
            style={{
              display: "grid",
              gap: "0.75rem"
            }}
          >
            {data.headers.map((header) => (
              <article
                key={header.id}
                style={{
                  border: "1px solid currentColor",
                  padding: "1rem"
                }}
              >
                <strong>
                  {header.header} — {header.status}
                </strong>

                <div>
                  Scope: {header.scope}
                </div>

                <p>{header.description}</p>
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

