"use client";

import { useState } from "react";

type SecurityControl = {
  id: string;
  name: string;
  version: string;
  status: "pass" | "warning" | "blocked";
  description: string;
};

type SecurityPosture = {
  ok: boolean;
  service: "MELKISM";
  version: "v6.9";
  timestamp: string;
  status: "pass" | "warning" | "blocked";
  controls: SecurityControl[];
  totalControls: number;
  passedControls: number;
  warningControls: number;
  blockedControls: number;
  auditEvents: number;
};

type Copy = {
  title: string;
  description: string;
  load: string;
  status: string;
  controls: string;
  auditEvents: string;
  notLoaded: string;
};

const COPY: Record<"fa" | "en" | "ar" | "tr", Copy> = {
  fa: {
    title: "وضعیت امنیتی MELKISM",
    description: "نمای مرکزی کنترل‌های امنیتی MELKISM v6.9",
    load: "دریافت وضعیت امنیتی",
    status: "وضعیت",
    controls: "کنترل‌ها",
    auditEvents: "رویدادهای Audit",
    notLoaded: "وضعیت هنوز دریافت نشده است."
  },
  en: {
    title: "MELKISM Security Posture",
    description: "Central security control posture for MELKISM v6.9",
    load: "Load Security Posture",
    status: "Status",
    controls: "Controls",
    auditEvents: "Audit Events",
    notLoaded: "Security posture has not been loaded yet."
  },
  ar: {
    title: "حالة أمان MELKISM",
    description: "الحالة المركزية لعناصر أمان MELKISM v6.9",
    load: "تحميل الحالة الأمنية",
    status: "الحالة",
    controls: "الضوابط",
    auditEvents: "أحداث التدقيق",
    notLoaded: "لم يتم تحميل الحالة الأمنية بعد."
  },
  tr: {
    title: "MELKISM Güvenlik Durumu",
    description: "MELKISM v6.9 merkezi güvenlik kontrol durumu",
    load: "Güvenlik Durumunu Yükle",
    status: "Durum",
    controls: "Kontroller",
    auditEvents: "Denetim Olayları",
    notLoaded: "Güvenlik durumu henüz yüklenmedi."
  }
};

function getCopy(locale: string): Copy {
  if (locale === "fa" || locale === "ar" || locale === "tr") {
    return COPY[locale];
  }

  return COPY.en;
}

export function SecurityPostureStatus({
  locale
}: {
  locale: string;
}) {
  const copy = getCopy(locale);
  const [data, setData] = useState<SecurityPosture | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function loadPosture() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/security-posture", {
        method: "GET",
        cache: "no-store"
      });

      const payload = (await response.json()) as SecurityPosture;

      if (!response.ok) {
        throw new Error("Security posture request failed.");
      }

      setData(payload);
    } catch {
      setError("Unable to load security posture.");
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
        maxWidth: "960px",
        margin: "0 auto"
      }}
    >
      <div>
        <h1>{copy.title}</h1>
        <p>{copy.description}</p>
      </div>

      <button
        type="button"
        onClick={loadPosture}
        disabled={loading}
        style={{
          width: "fit-content",
          padding: "0.7rem 1rem",
          cursor: loading ? "wait" : "pointer"
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
            gap: "0.75rem",
            border: "1px solid currentColor",
            padding: "1rem"
          }}
        >
          <strong>
            {copy.status}: {data.status}
          </strong>

          <span>
            {copy.controls}: {data.passedControls}/{data.totalControls}
          </span>

          <span>
            {copy.auditEvents}: {data.auditEvents}
          </span>

          <div style={{ display: "grid", gap: "0.5rem" }}>
            {data.controls.map((control) => (
              <article key={control.id}>
                <strong>
                  {control.name} — {control.status}
                </strong>
                <div>
                  {control.version}
                </div>
                <p>{control.description}</p>
              </article>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}

