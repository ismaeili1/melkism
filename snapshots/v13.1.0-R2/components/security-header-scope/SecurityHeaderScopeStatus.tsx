"use client";

import { useState } from "react";

type Verification = {
  ok: boolean;
  service: "MELKISM";
  version: "v6.14";
  timestamp: string;
  status: "pass" | "warning" | "blocked";
  globalHeaders: string[];
  apiOnlyHeaders: string[];
  globalCacheControlEnabled: boolean;
  apiCacheControlEnabled: boolean;
  hstsEnabled: boolean;
};

type Copy = {
  title: string;
  description: string;
  load: string;
  status: string;
  global: string;
  apiOnly: string;
  globalCache: string;
  apiCache: string;
  hsts: string;
  notLoaded: string;
};

const COPY: Record<"fa" | "en" | "ar" | "tr", Copy> = {
  fa: {
    title: "محدوده هدرهای امنیتی MELKISM",
    description: "بررسی Scope هدرهای امنیتی در MELKISM v6.14",
    load: "بررسی Scope",
    status: "وضعیت",
    global: "هدرهای Global",
    apiOnly: "هدرهای API",
    globalCache: "Cache-Control سراسری",
    apiCache: "Cache-Control API",
    hsts: "HSTS",
    notLoaded: "وضعیت هنوز دریافت نشده است."
  },
  en: {
    title: "MELKISM Security Header Scope",
    description: "Security header scope verification for MELKISM v6.14",
    load: "Verify Scope",
    status: "Status",
    global: "Global Headers",
    apiOnly: "API Headers",
    globalCache: "Global Cache-Control",
    apiCache: "API Cache-Control",
    hsts: "HSTS",
    notLoaded: "Verification status has not been loaded yet."
  },
  ar: {
    title: "نطاق رؤوس أمان MELKISM",
    description: "التحقق من نطاق رؤوس الأمان في MELKISM v6.14",
    load: "التحقق من النطاق",
    status: "الحالة",
    global: "الرؤوس العامة",
    apiOnly: "رؤوس API",
    globalCache: "Cache-Control العام",
    apiCache: "Cache-Control لـ API",
    hsts: "HSTS",
    notLoaded: "لم يتم تحميل الحالة بعد."
  },
  tr: {
    title: "MELKISM Güvenlik Başlığı Kapsamı",
    description: "MELKISM v6.14 güvenlik başlığı kapsam doğrulaması",
    load: "Kapsamı Doğrula",
    status: "Durum",
    global: "Global Başlıklar",
    apiOnly: "API Başlıkları",
    globalCache: "Global Cache-Control",
    apiCache: "API Cache-Control",
    hsts: "HSTS",
    notLoaded: "Doğrulama durumu henüz yüklenmedi."
  }
};

function getCopy(locale: string): Copy {
  if (locale === "fa" || locale === "ar" || locale === "tr") {
    return COPY[locale];
  }

  return COPY.en;
}

export function SecurityHeaderScopeStatus({
  locale
}: {
  locale: string;
}) {
  const copy = getCopy(locale);

  const [data, setData] = useState<Verification | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function verifyScope() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "/api/security-header-scope",
        {
          method: "GET",
          cache: "no-store"
        }
      );

      const payload = (await response.json()) as Verification;

      if (!response.ok) {
        throw new Error("Security header scope verification failed.");
      }

      setData(payload);
    } catch {
      setError("Unable to verify security header scope.");
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
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "2rem"
      }}
    >
      <div>
        <h1>{copy.title}</h1>
        <p>{copy.description}</p>
      </div>

      <button
        type="button"
        onClick={verifyScope}
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
            gap: "0.8rem",
            border: "1px solid currentColor",
            padding: "1rem"
          }}
        >
          <strong>
            {copy.status}: {data.status}
          </strong>

          <strong>
            {copy.global}: {data.globalHeaders.length}
          </strong>

          <strong>
            {copy.apiOnly}: {data.apiOnlyHeaders.length}
          </strong>

          <strong>
            {copy.globalCache}:{" "}
            {data.globalCacheControlEnabled ? "ON" : "OFF"}
          </strong>

          <strong>
            {copy.apiCache}:{" "}
            {data.apiCacheControlEnabled ? "ON" : "OFF"}
          </strong>

          <strong>
            {copy.hsts}: {data.hstsEnabled ? "ON" : "OFF"}
          </strong>

          <div>
            {data.globalHeaders.map((header) => (
              <div key={header}>{header}</div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

