"use client";

import { useState } from "react";

type Enforcement = {
  ok: boolean;
  service: "MELKISM";
  version: "v6.11";
  timestamp: string;
  mode: "api" | "controlled-response";
  status: "pass" | "warning" | "blocked";
  appliedHeaders: string[];
  rejectedHeaders: string[];
  policyReady: boolean;
  globalEnforcement: boolean;
};

type Copy = {
  title: string;
  description: string;
  load: string;
  status: string;
  applied: string;
  rejected: string;
  global: string;
  notLoaded: string;
};

const COPY: Record<"fa" | "en" | "ar" | "tr", Copy> = {
  fa: {
    title: "اجرای هدرهای امنیتی MELKISM",
    description: "بررسی Security Headers Enforcement در MELKISM v6.11",
    load: "بررسی Enforcement",
    status: "وضعیت",
    applied: "هدرهای اعمال‌شده",
    rejected: "هدرهای ردشده",
    global: "اجرای سراسری",
    notLoaded: "وضعیت Enforcement هنوز دریافت نشده است."
  },
  en: {
    title: "MELKISM Security Header Enforcement",
    description: "Security Header Enforcement verification for MELKISM v6.11",
    load: "Verify Enforcement",
    status: "Status",
    applied: "Applied Headers",
    rejected: "Rejected Headers",
    global: "Global Enforcement",
    notLoaded: "Enforcement status has not been loaded yet."
  },
  ar: {
    title: "تطبيق رؤوس أمان MELKISM",
    description: "التحقق من تطبيق رؤوس الأمان في MELKISM v6.11",
    load: "التحقق من التطبيق",
    status: "الحالة",
    applied: "الرؤوس المطبقة",
    rejected: "الرؤوس المرفوضة",
    global: "التطبيق العام",
    notLoaded: "لم يتم تحميل حالة التطبيق بعد."
  },
  tr: {
    title: "MELKISM Güvenlik Başlığı Uygulaması",
    description: "MELKISM v6.11 Security Header Enforcement doğrulaması",
    load: "Uygulamayı Doğrula",
    status: "Durum",
    applied: "Uygulanan Başlıklar",
    rejected: "Reddedilen Başlıklar",
    global: "Global Uygulama",
    notLoaded: "Uygulama durumu henüz yüklenmedi."
  }
};

function getCopy(locale: string): Copy {
  if (locale === "fa" || locale === "ar" || locale === "tr") {
    return COPY[locale];
  }

  return COPY.en;
}

export function SecurityEnforcementStatus({
  locale
}: {
  locale: string;
}) {
  const copy = getCopy(locale);

  const [data, setData] = useState<Enforcement | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function verifyEnforcement() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/security-enforcement", {
        method: "GET",
        cache: "no-store"
      });

      const payload = (await response.json()) as Enforcement;

      if (!response.ok) {
        throw new Error("Security enforcement request failed.");
      }

      setData(payload);
    } catch {
      setError("Unable to load security enforcement status.");
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
        onClick={verifyEnforcement}
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
            gap: "1rem",
            border: "1px solid currentColor",
            padding: "1rem"
          }}
        >
          <strong>
            {copy.status}: {data.status}
          </strong>

          <strong>
            {copy.applied}: {data.appliedHeaders.length}
          </strong>

          <strong>
            {copy.rejected}: {data.rejectedHeaders.length}
          </strong>

          <strong>
            {copy.global}: {data.globalEnforcement ? "ON" : "CONTROLLED"}
          </strong>

          <div>
            {data.appliedHeaders.map((header) => (
              <div key={header}>{header}</div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

