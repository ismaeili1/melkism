"use client";

import { useState } from "react";

type Audit = {
  ok: boolean;
  service: "MELKISM";
  version: "v6.12";
  timestamp: string;
  status: "ready" | "review" | "blocked";
  globalConfigurationPresent: boolean;
  globalHeaderDefinitionsDetected: number;
  knownSecurityHeaders: string[];
  configuration: {
    exists: boolean;
    kind: "middleware" | "next-config";
    files: string[];
    detectedHeaders: string[];
  };
  enforcementReady: boolean;
  requiresManualReview: boolean;
  notes: string[];
};

type Copy = {
  title: string;
  description: string;
  load: string;
  status: string;
  configuration: string;
  detected: string;
  ready: string;
  manual: string;
  notLoaded: string;
};

const COPY: Record<"fa" | "en" | "ar" | "tr", Copy> = {
  fa: {
    title: "ممیزی Global Security Headers",
    description: "بررسی آمادگی فعال‌سازی سراسری هدرهای امنیتی MELKISM v6.12",
    load: "اجرای Audit",
    status: "وضعیت",
    configuration: "Global Configuration",
    detected: "هدرهای شناسایی‌شده",
    ready: "آماده اجرای سراسری",
    manual: "نیازمند بررسی دستی",
    notLoaded: "گزارش Audit هنوز دریافت نشده است."
  },
  en: {
    title: "Global Security Headers Audit",
    description: "Global security header enforcement readiness for MELKISM v6.12",
    load: "Run Audit",
    status: "Status",
    configuration: "Global Configuration",
    detected: "Detected Headers",
    ready: "Global Enforcement Ready",
    manual: "Manual Review Required",
    notLoaded: "Audit report has not been loaded yet."
  },
  ar: {
    title: "تدقيق رؤوس الأمان العامة",
    description: "التحقق من جاهزية تطبيق رؤوس الأمان العامة في MELKISM v6.12",
    load: "تشغيل التدقيق",
    status: "الحالة",
    configuration: "الإعداد العام",
    detected: "الرؤوس المكتشفة",
    ready: "جاهز للتطبيق العام",
    manual: "يتطلب مراجعة يدوية",
    notLoaded: "لم يتم تحميل تقرير التدقيق بعد."
  },
  tr: {
    title: "Global Güvenlik Başlıkları Denetimi",
    description: "MELKISM v6.12 global güvenlik başlığı uygulama hazırlığı",
    load: "Denetimi Çalıştır",
    status: "Durum",
    configuration: "Global Yapılandırma",
    detected: "Algılanan Başlıklar",
    ready: "Global Uygulamaya Hazır",
    manual: "Manuel İnceleme Gerekli",
    notLoaded: "Denetim raporu henüz yüklenmedi."
  }
};

function getCopy(locale: string): Copy {
  if (locale === "fa" || locale === "ar" || locale === "tr") {
    return COPY[locale];
  }

  return COPY.en;
}

export function SecurityDeploymentAuditStatus({
  locale
}: {
  locale: string;
}) {
  const copy = getCopy(locale);

  const [data, setData] = useState<Audit | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function runAudit() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "/api/security-deployment-audit",
        {
          method: "GET",
          cache: "no-store"
        }
      );

      const payload = (await response.json()) as Audit;

      if (!response.ok) {
        throw new Error("Security deployment audit failed.");
      }

      setData(payload);
    } catch {
      setError("Unable to load security deployment audit.");
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
        onClick={runAudit}
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
            gap: "0.9rem",
            border: "1px solid currentColor",
            padding: "1rem"
          }}
        >
          <strong>
            {copy.status}: {data.status}
          </strong>

          <strong>
            {copy.configuration}:{" "}
            {data.globalConfigurationPresent ? "DETECTED" : "NOT DETECTED"}
          </strong>

          <strong>
            {copy.detected}: {data.globalHeaderDefinitionsDetected}
          </strong>

          <strong>
            {copy.ready}: {data.enforcementReady ? "YES" : "NO"}
          </strong>

          <strong>
            {copy.manual}:{" "}
            {data.requiresManualReview ? "YES" : "NO"}
          </strong>

          <div>
            {data.notes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

