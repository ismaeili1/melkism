"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useLocalizedText } from "@/hooks/useLocalizedText";

export default function CompanyDashboardPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const isRtl = ["fa", "ar"].includes(locale);
  const dir = isRtl ? "rtl" : "ltr";

  const { t, num } = useLocalizedText("CompanyDashboard");

  return (
    <div
      className={`min-h-screen bg-slate-50 text-slate-800 p-6 ${
        isRtl ? "dir-rtl" : "dir-ltr"
      } font-sans space-y-6`}
      dir={dir}
    >
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-violet-600 bg-violet-50 border border-violet-100 px-3 py-1 rounded-full inline-block mb-1">
            {t("roleBadge", { activeProjects: num(4) })}
          </span>
          <h1 className="text-2xl font-black text-slate-950">{t("pageTitle")}</h1>
          <p className="text-xs text-slate-500 mt-1">{t("pageSubtitle")}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
          <div className="space-y-1">
            <div className="text-2xl">🏗️</div>
            <h3 className="text-sm font-bold text-slate-900">{t("projectsCardTitle")}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{t("projectsCardDesc")}</p>
          </div>
          <Link
            href={`/${locale}/company/projects`}
            className="inline-block bg-violet-50 text-violet-700 hover:bg-violet-100 text-[11px] font-bold px-4 py-2 rounded-xl transition w-fit"
          >
            {isRtl ? `← ${t("projectsCardLink")}` : `${t("projectsCardLink")} →`}
          </Link>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
          <div className="space-y-1">
            <div className="text-2xl">⚖️</div>
            <h3 className="text-sm font-bold text-slate-900">{t("escrowCardTitle")}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{t("escrowCardDesc")}</p>
          </div>
          <Link
            href={`/${locale}/company/escrow`}
            className="inline-block bg-violet-50 text-violet-700 hover:bg-violet-100 text-[11px] font-bold px-4 py-2 rounded-xl transition w-fit"
          >
            {isRtl ? `← ${t("escrowCardLink")}` : `${t("escrowCardLink")} →`}
          </Link>
        </div>
      </div>
    </div>
  );
}