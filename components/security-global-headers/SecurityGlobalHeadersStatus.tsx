"use client";

import { useState } from "react";

type Verification = {
  ok: boolean;
  service: "MELKISM";
  version: "v6.13";
  timestamp: string;
  expectedHeaders: string[];
  globalEnforcementEnabled: boolean;
  transportSecurityEnabled: boolean;
  status: "pass" | "warning" | "blocked";
};

type Copy = {
  title: string;
  description: string;
  load: string;
  status: string;
  global: string;
  transport: string;
  headers: string;
  notLoaded: string;
};

const COPY: Record<"fa" | "en" | "ar" | "tr", Copy> = {
  fa: {
    title: "اجرای سراسری هدرهای امنیتی",
    description: "وضعیت Global Security Headers Enforcement در MELKISM v6.13",
    load: "بررسی اجرای سراسری",
    status: "وضعیت",
    global: "اجرای سراسری",
    transport: "امنیت انتقال",
    headers: "تعداد هدرها",
    notLoaded: "وضعیت هنوز دریافت نشده است."
  },
  en: {
    title: "Global Security Headers Enforcement",
    description: "MELKISM v6.13 global security header enforcement status",
    load: "Verify Global Enforcement",
    status: "Status",
    global: "Global Enforcement",
    transport: "Transport Security",
    headers: "Header Count",
    notLoaded: "Verification status has not been loaded yet."
  },
  ar: {
    title: "التطبيق العام لرؤوس الأمان",
    description: "حالة التطبيق العام لرؤوس الأمان في MELKISM v6.13",
    load: "التحقق من التطبيق العام",
    status: "الحالة",
    global: "التطبيق العام",
    transport: "أمان النقل",
    headers: "عدد الرؤوس",
    notLoaded: "لم يتم تحميل حالة التحقق بعد."
  },
  tr: {
    title: "Global Güvenlik Başlığı Uygulaması",
    description: "MELKISM v6.13 global güvenlik başlığı uygulama durumu",
    load: "Global Uygulamayı Doğrula",
    status: "Durum",
    global: "Global Uygulama",
    transport: "Taşıma Güvenliği",
    headers: "Başlık Sayısı",
    notLoaded: "Doğrulama durumu henüz yüklenmedi."
  }
};

function getCopy(locale: string): Copy {
  if (locale === "fa" || locale === "ar" || locale === "tr") {
    return COPY[locale];
  }

  return COPY.en;
}

export function SecurityGlobalHeadersStatus({
  locale
}: {
  locale: string;
}) {
  const copy = getCopy(locale);

  const [data, setData] = useState<Verification | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function verify() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "/api/security-global-headers",
        {
          method: "GET",
          cache: "no-store"
        }
      );

      const payload = (await response.json()) as Verification;

      if (!response.ok) {
        throw new Error("Global security header verification failed.");
      }

      setData(payload);
    } catch {
      setError("Unable to verify global security headers.");
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
        onClick={verify}
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
            {copy.global}:{" "}
            {data.globalEnforcementEnabled ? "ON" : "OFF"}
          </strong>

          <strong>
            {copy.transport}:{" "}
            {data.transportSecurityEnabled ? "ON" : "OFF"}
          </strong>

          <strong>
            {copy.headers}: {data.expectedHeaders.length}
          </strong>

          <div>
            {data.expectedHeaders.map((header) => (
              <div key={header}>{header}</div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
