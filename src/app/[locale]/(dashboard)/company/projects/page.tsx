"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLocalizedText } from "@/hooks/useLocalizedText";

interface ConstructionProject {
  id: string;
  title: string;
  district: string;
  progressPercent: number;
  remainingUnits: number;
  stage: "IN_PROGRESS" | "HANDOVER";
}

export default function CompanyProjectsPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const isRtl = ["fa", "ar"].includes(locale);
  const dir = isRtl ? "rtl" : "ltr";

  const { t, num } = useLocalizedText("CompanyProjects");

  const [stageFilter, setStageFilter] = useState<"ALL" | "IN_PROGRESS" | "HANDOVER">("ALL");
  const [notice, setNotice] = useState<string | null>(null);

  const [projects, setProjects] = useState<ConstructionProject[]>([
    {
      id: "PRJ-201",
      title: "برج مسکونی آلتون فاز ۱",
      district: "تهران - سعادت‌آباد",
      progressPercent: 72,
      remainingUnits: 14,
      stage: "IN_PROGRESS",
    },
    {
      id: "PRJ-202",
      title: "مجتمع اداری و تجاری سپهر",
      district: "تهران - ونک",
      progressPercent: 100,
      remainingUnits: 3,
      stage: "HANDOVER",
    },
    {
      id: "PRJ-203",
      title: "پروژه مشارکتی باغ فردوس",
      district: "تهران - الهیه",
      progressPercent: 45,
      remainingUnits: 22,
      stage: "IN_PROGRESS",
    },
  ]);

  const filteredProjects = projects.filter((p) =>
    stageFilter === "ALL" ? true : p.stage === stageFilter
  );

  const handleAdvanceProgress = (project: ConstructionProject) => {
    const nextProgress = Math.min(100, project.progressPercent + 5);
    const nextStage: "IN_PROGRESS" | "HANDOVER" =
      nextProgress >= 100 ? "HANDOVER" : "IN_PROGRESS";

    setProjects((prev) =>
      prev.map((item) =>
        item.id === project.id
          ? { ...item, progressPercent: nextProgress, stage: nextStage }
          : item
      )
    );
    setNotice(
      t("progressUpdatedNotice", {
        title: project.title,
        percent: num(nextProgress),
      })
    );
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
          <span className="text-[11px] font-bold text-violet-600 bg-violet-50 border border-violet-100 px-3 py-1 rounded-full inline-block mb-1">
            {t("badge", { count: num(projects.length) })}
          </span>
          <h1 className="text-2xl font-black text-slate-950">{t("pageTitle")}</h1>
          <p className="text-xs text-slate-500 mt-1">{t("pageSubtitle")}</p>
        </div>
        <Link
          href={`/${locale}/company/dashboard`}
          className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition"
        >
          {isRtl ? `← ${t("backToDashboard")}` : `${t("backToDashboard")} →`}
        </Link>
      </div>

      {notice && (
        <div className="bg-violet-50 border border-violet-200 text-violet-900 text-xs font-bold px-4 py-3 rounded-2xl">
          {notice}
        </div>
      )}

      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-wrap gap-2 text-xs">
        {[
          { key: "ALL" as const, labelKey: "filterAll" },
          { key: "IN_PROGRESS" as const, labelKey: "filterInProgress" },
          { key: "HANDOVER" as const, labelKey: "filterHandover" },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setStageFilter(tab.key)}
            className={`px-3.5 py-2 rounded-xl font-bold transition ${
              stageFilter === tab.key
                ? "bg-violet-600 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {t(tab.labelKey)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4 flex flex-col justify-between text-xs"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[10px] text-slate-400">{project.id}</span>
                <span
                  className={`px-2.5 py-1 rounded-lg text-[10px] font-bold ${
                    project.stage === "HANDOVER"
                      ? "bg-emerald-50 text-emerald-700"
                      : "bg-violet-50 text-violet-700"
                  }`}
                >
                  {project.stage === "HANDOVER"
                    ? t("filterHandover")
                    : t("filterInProgress")}
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-900">{project.title}</h3>
              <p className="text-slate-500">{project.district}</p>
              <p className="font-bold text-slate-800">
                {t("progressLabel", { percent: num(project.progressPercent) })}
              </p>
              <p className="text-slate-600">
                {t("remainingUnitsLabel", { count: num(project.remainingUnits) })}
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleAdvanceProgress(project)}
              className="bg-violet-50 hover:bg-violet-100 text-violet-700 font-bold px-4 py-2 rounded-xl transition w-fit"
            >
              {t("advanceProgressBtn")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}