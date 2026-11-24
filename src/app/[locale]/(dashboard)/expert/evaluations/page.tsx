"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLocalizedText } from "@/hooks/useLocalizedText";

interface EvaluationCase {
  id: string;
  propertyTitle: string;
  requestType: string;
  submittedDate: string;
  status: "PENDING" | "APPROVED";
}

export default function ExpertEvaluationsPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const isRtl = ["fa", "ar"].includes(locale);
  const dir = isRtl ? "rtl" : "ltr";

  const { t, num } = useLocalizedText("ExpertEvaluations");

  const [statusFilter, setStatusFilter] = useState<"ALL" | "PENDING" | "APPROVED">("ALL");
  const [statusNote, setStatusNote] = useState<string | null>(null);

  const [cases, setCases] = useState<EvaluationCase[]>([
    {
      id: "EVL-301",
      propertyTitle: "بررسی نقشه معماری و استحکام ویلای مدرن لواسان",
      requestType: "ارزیابی معماری و فنی",
      submittedDate: "1405/08/01",
      status: "PENDING",
    },
    {
      id: "EVL-302",
      propertyTitle: "کارشناسی قیمت و ارزش‌گذاری واحد اداری عباس‌آباد",
      requestType: "ارزیابی قیمت و بازار",
      submittedDate: "1405/07/27",
      status: "APPROVED",
    },
    {
      id: "EVL-303",
      propertyTitle: "بررسی ضوابط شهرداری برای تجمیع دو قطعه در یوسف‌آباد",
      requestType: "تطبیق ضوابط و مقررات",
      submittedDate: "1405/07/29",
      status: "PENDING",
    },
  ]);

  const filteredCases = cases.filter((c) =>
    statusFilter === "ALL" ? true : c.status === statusFilter
  );

  const handleApproveCase = (item: EvaluationCase) => {
    setCases((prev) =>
      prev.map((c) => (c.id === item.id ? { ...c, status: "APPROVED" } : c))
    );
    setStatusNote(t("approvedFeedback", { title: item.propertyTitle }));
  };

  return (
    <div
      className={`min-h-screen bg-slate-50 text-slate-800 p-6 ${
        isRtl ? "dir-rtl" : "dir-ltr"
      } font-sans space-y-6`}
      dir={dir}
    >
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full inline-block mb-1">
            {t("badge", { count: num(cases.length) })}
          </span>
          <h1 className="text-2xl font-black text-slate-950">{t("pageTitle")}</h1>
          <p className="text-xs text-slate-500 mt-1">{t("pageSubtitle")}</p>
        </div>
        <Link
          href={`/${locale}/expert/dashboard`}
          className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition"
        >
          {isRtl ? `← ${t("backToDashboard")}` : `${t("backToDashboard")} →`}
        </Link>
      </div>

      {statusNote && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-4 py-3 rounded-2xl">
          {statusNote}
        </div>
      )}

      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-wrap gap-2 text-xs">
        {[
          { key: "ALL" as const, labelKey: "filterAll" },
          { key: "PENDING" as const, labelKey: "filterPending" },
          { key: "APPROVED" as const, labelKey: "filterApproved" },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setStatusFilter(tab.key)}
            className={`px-3.5 py-2 rounded-xl font-bold transition ${
              statusFilter === tab.key
                ? "bg-emerald-600 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {t(tab.labelKey)}
          </button>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm overflow-x-auto">
        <table className={`w-full ${isRtl ? "text-right" : "text-left"} text-xs`}>
          <thead>
            <tr className="border-b border-slate-100 text-slate-400 font-medium">
              <th className="pb-3">{t("colCase")}</th>
              <th className="pb-3">{t("colType")}</th>
              <th className="pb-3">{t("colDate")}</th>
              <th className="pb-3">{t("colStatus")}</th>
              <th className="pb-3 text-center">{t("colAction")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredCases.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/80 transition">
                <td className="py-4 font-bold text-slate-900">
                  {item.propertyTitle}
                  <span className="block text-[10px] text-slate-400 font-mono">{item.id}</span>
                </td>
                <td className="py-4 text-slate-600">{item.requestType}</td>
                <td className="py-4 font-mono text-[11px] text-slate-500">{item.submittedDate}</td>
                <td className="py-4">
                  <span
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold inline-block ${
                      item.status === "APPROVED"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {item.status === "APPROVED" ? t("filterApproved") : t("filterPending")}
                  </span>
                </td>
                <td className="py-4 text-center">
                  {item.status === "PENDING" ? (
                    <button
                      type="button"
                      onClick={() => handleApproveCase(item)}
                      className="text-emerald-700 font-bold hover:underline"
                    >
                      {t("approveBtn")}
                    </button>
                  ) : (
                    <span className="text-slate-400">{t("completedLabel")}</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}