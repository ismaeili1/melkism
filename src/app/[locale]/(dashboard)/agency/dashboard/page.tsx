"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useLocalizedText } from "@/hooks/useLocalizedText";

export default function AgencyDashboardPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const isRtl = ["fa", "ar"].includes(locale);
  const dir = isRtl ? "rtl" : "ltr";

  const { t, num } = useLocalizedText("AgencyDashboard");

  return (
    <div
      className={`min-h-screen bg-slate-50 text-slate-800 p-6 ${
        isRtl ? "dir-rtl" : "dir-ltr"
      } font-sans space-y-6`}
      dir={dir}
    >
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full inline-block mb-1">
            {t("roleBadge", { activeAgents: num(8) })}
          </span>
          <h1 className="text-2xl font-black text-slate-950">{t("pageTitle")}</h1>
          <p className="text-xs text-slate-500 mt-1">{t("pageSubtitle")}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
          <div className="space-y-1">
            <div className="text-2xl">👥</div>
            <h3 className="text-sm font-bold text-slate-900">{t("agentsCardTitle")}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{t("agentsCardDesc")}</p>
          </div>
          <Link
            href={`/${locale}/agency/agents`}
            className="inline-block bg-indigo-50 text-indigo-700 hover:bg-indigo-100 text-[11px] font-bold px-4 py-2 rounded-xl transition w-fit"
          >
            {isRtl ? `← ${t("agentsCardLink")}` : `${t("agentsCardLink")} →`}
          </Link>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
          <div className="space-y-1">
            <div className="text-2xl">🏡</div>
            <h3 className="text-sm font-bold text-slate-900">{t("listingsCardTitle")}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{t("listingsCardDesc")}</p>
          </div>
          <Link
            href={`/${locale}/user/properties`}
            className="inline-block bg-indigo-50 text-indigo-700 hover:bg-indigo-100 text-[11px] font-bold px-4 py-2 rounded-xl transition w-fit"
          >
            {isRtl ? `← ${t("listingsCardLink")}` : `${t("listingsCardLink")} →`}
          </Link>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
          <div className="space-y-1">
            <div className="text-2xl">💰</div>
            <h3 className="text-sm font-bold text-slate-900">{t("financeCardTitle")}</h3>
            <p className="text-xs text-slate-500 leading-relaxed">{t("financeCardDesc")}</p>
          </div>
          <Link
            href={`/${locale}/agency/financial`}
            className="inline-block bg-indigo-50 text-indigo-700 hover:bg-indigo-100 text-[11px] font-bold px-4 py-2 rounded-xl transition w-fit"
          >
            {isRtl ? `← ${t("financeCardLink")}` : `${t("financeCardLink")} →`}
          </Link>
        </div>
      </div>
    </div>
  );
}