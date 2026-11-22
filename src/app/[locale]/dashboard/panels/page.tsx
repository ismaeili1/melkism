"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import FeatureGuard from "@/components/auth/FeatureGuard";
import { useLocalizedText } from "@/hooks/useLocalizedText";

export default function UserDashboardPanel() {
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const dir = ["fa", "ar"].includes(locale) ? "rtl" : "ltr";
  const { t } = useLocalizedText("DashboardPanels");

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const res = await fetch("/api/auth/me");
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-500 text-xs font-medium font-sans">
        {t("loadingPanel")}
      </div>
    );
  }

  const roleLabels: Record<string, string> = {
    SUPER_ADMIN: t("roleSuperAdmin"),
    ADMIN: t("roleAdmin"),
    MANAGER: t("roleManager"),
    COMPANY: t("roleCompany"),
    AGENCY: t("roleAgency"),
    EXPERT: t("roleExpert"),
    USER: t("roleUser"),
  };

  return (
    <div
      className={`min-h-screen bg-slate-50/50 py-10 px-4 sm:px-6 lg:px-8 ${dir === "rtl" ? "dir-rtl" : "dir-ltr"} font-sans`}
      dir={dir}
    >
      <div className="max-w-7xl mx-auto space-y-8">
        {/* کارت خوش آمدگویی و مشخصات کاربر */}
        <div className="bg-white border border-slate-200/85 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full inline-block">
              {roleLabels[user?.role] || t("defaultRoleBadge")}
            </span>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {t("welcomeGreeting", { name: user?.name || t("defaultUserName") })}
            </h1>
            <p className="text-xs text-slate-500">
              {t("emailLabel")}:{" "}
              <span className="font-medium text-slate-700 font-mono">{user?.email || "-"}</span> |{" "}
              {t("accountStatusLabel")}:{" "}
              <span className="text-emerald-600 font-bold">{user?.status || t("defaultStatus")}</span>
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 max-w-sm">
            <span className="font-bold block text-slate-800 mb-1">{t("accessScopeTitle")}</span>
            <p className="leading-relaxed">{user?.accessScope || t("defaultAccessScope")}</p>
          </div>
        </div>

        {/* بخش ابزارها و پنل‌های اختصاصی بر اساس نقش */}
        <div className="space-y-4">
          <h2 className="text-sm font-extrabold text-slate-900">{t("toolsSectionTitle")}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureGuard allowedRoles={["SUPER_ADMIN", "ADMIN", "MANAGER"]}>
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  📰
                </div>
                <h3 className="text-sm font-bold text-slate-900">{t("newsToolTitle")}</h3>
                <p className="text-xs text-slate-500">{t("newsToolDesc")}</p>
                <button
                  onClick={() => alert(t("newsToolAction"))}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-lg text-xs transition"
                >
                  {t("newsToolAction")}
                </button>
              </div>
            </FeatureGuard>

            <FeatureGuard allowedRoles={["SUPER_ADMIN", "ADMIN", "COMPANY", "AGENCY"]}>
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  📄
                </div>
                <h3 className="text-sm font-bold text-slate-900">{t("docsToolTitle")}</h3>
                <p className="text-xs text-slate-500">{t("docsToolDesc")}</p>
                <button
                  onClick={() => alert(t("docsToolAction"))}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg text-xs transition"
                >
                  {t("docsToolAction")}
                </button>
              </div>
            </FeatureGuard>

            <FeatureGuard allowedRoles={["SUPER_ADMIN", "ADMIN", "MANAGER", "COMPANY", "AGENCY", "EXPERT"]}>
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  📊
                </div>
                <h3 className="text-sm font-bold text-slate-900">{t("analyticsToolTitle")}</h3>
                <p className="text-xs text-slate-500">{t("analyticsToolDesc")}</p>
                <button
                  onClick={() => alert(t("analyticsToolAction"))}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-lg text-xs transition"
                >
                  {t("analyticsToolAction")}
                </button>
              </div>
            </FeatureGuard>

            <FeatureGuard allowedRoles={["SUPER_ADMIN", "ADMIN", "COMPANY", "AGENCY", "EXPERT"]}>
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  👑
                </div>
                <h3 className="text-sm font-bold text-slate-900">{t("vipToolTitle")}</h3>
                <p className="text-xs text-slate-500">{t("vipToolDesc")}</p>
                <button
                  onClick={() => alert(t("vipToolAction"))}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 rounded-lg text-xs transition"
                >
                  {t("vipToolAction")}
                </button>
              </div>
            </FeatureGuard>

            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
              <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                🏠
              </div>
              <h3 className="text-sm font-bold text-slate-900">{t("myPropertiesTitle")}</h3>
              <p className="text-xs text-slate-500">{t("myPropertiesDesc")}</p>
              <button
                onClick={() => alert(t("myPropertiesAction"))}
                className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 rounded-lg text-xs transition"
              >
                {t("myPropertiesAction")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}