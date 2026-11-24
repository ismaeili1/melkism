"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLocalizedText } from "@/hooks/useLocalizedText";

const ROLES = ["SUPER_ADMIN", "ADMIN", "MANAGER", "COMPANY", "AGENCY", "EXPERT", "USER"];

const PERMISSIONS_CATALOG = [
  { key: "permViewDashboard", catKey: "catSystem" },
  { key: "permManageUsers", catKey: "catUsers" },
  { key: "permPublishContent", catKey: "catCms" },
  { key: "permApproveListings", catKey: "catCms" },
  { key: "permManageFinance", catKey: "catFinance" },
  { key: "permManageAds", catKey: "catFinance" },
  { key: "permEditSettings", catKey: "catSystem" },
  { key: "permAuditLogs", catKey: "catSystem" },
];

export default function AdminPermissionsPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const isRtl = ["fa", "ar"].includes(locale);
  const dir = isRtl ? "rtl" : "ltr";

  const { t, num } = useLocalizedText("AdminPermissions");
  const [selectedRole, setSelectedRole] = useState("MANAGER");
  const [savedToast, setSavedToast] = useState<string | null>(null);

  const [matrix, setMatrix] = useState<Record<string, Record<string, boolean>>>(() => {
    const initial: Record<string, Record<string, boolean>> = {};
    for (const role of ROLES) {
      initial[role] = {};
      for (const p of PERMISSIONS_CATALOG) {
        if (role === "SUPER_ADMIN") {
          initial[role][p.key] = true;
        } else if (role === "ADMIN") {
          initial[role][p.key] = p.key !== "permEditSettings";
        } else if (role === "MANAGER") {
          initial[role][p.key] =
            p.key === "permViewDashboard" ||
            p.key === "permPublishContent" ||
            p.key === "permApproveListings";
        } else {
          initial[role][p.key] = false;
        }
      }
    }
    return initial;
  });

  const togglePermission = (permKey: string) => {
    setMatrix((prev) => ({
      ...prev,
      [selectedRole]: {
        ...prev[selectedRole],
        [permKey]: !prev[selectedRole]?.[permKey],
      },
    }));
  };

  const handleSave = () => {
    setSavedToast(
      t("savedMatrixMessage", {
        roleCount: num(ROLES.length),
        permCount: num(PERMISSIONS_CATALOG.length),
      })
    );
  };

  return (
    <div
      className={`min-h-screen bg-slate-100 text-slate-800 p-6 ${
        isRtl ? "dir-rtl" : "dir-ltr"
      } font-sans space-y-6`}
      dir={dir}
    >
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full inline-block mb-1">
            {t("badge")}
          </span>
          <h1 className="text-2xl font-black text-slate-900">{t("pageTitle")}</h1>
          <p className="text-xs text-slate-500 mt-1">{t("pageSubtitle")}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handleSave}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-xs"
          >
            {t("saveMatrixBtn")}
          </button>
          <Link
            href={`/${locale}/admin/dashboard`}
            className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition"
          >
            {isRtl ? `← ${t("backToDashboard")}` : `${t("backToDashboard")} →`}
          </Link>
        </div>
      </div>

      {savedToast && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-4 py-3 rounded-2xl">
          {savedToast}
        </div>
      )}

      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-wrap items-center gap-2 text-xs">
        <span className="font-bold text-slate-700">{t("roleSelectLabel")}</span>
        {ROLES.map((role) => (
          <button
            key={role}
            type="button"
            onClick={() => setSelectedRole(role)}
            className={`px-3.5 py-1.5 rounded-xl font-bold transition ${
              selectedRole === role
                ? "bg-indigo-600 text-white shadow-xs"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {role}
          </button>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm overflow-x-auto">
        <table className={`w-full ${isRtl ? "text-right" : "text-left"} text-xs`}>
          <thead>
            <tr className="border-b border-slate-100 text-slate-400 font-medium">
              <th className="pb-3">{t("colPermission")}</th>
              <th className="pb-3">{t("colCategory")}</th>
              <th className="pb-3 text-center">{t("colStatus")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {PERMISSIONS_CATALOG.map((item) => {
              const allowed = Boolean(matrix[selectedRole]?.[item.key]);
              return (
                <tr key={item.key} className="hover:bg-slate-50/80 transition">
                  <td className="py-3.5 font-bold text-slate-900">{t(item.key)}</td>
                  <td className="py-3.5 text-slate-500">{t(item.catKey)}</td>
                  <td className="py-3.5 text-center">
                    <button
                      type="button"
                      onClick={() => togglePermission(item.key)}
                      className={`px-3 py-1.5 rounded-xl font-bold text-[11px] transition ${
                        allowed
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-rose-50 text-rose-700 border border-rose-200"
                      }`}
                    >
                      {allowed ? `✓ ${t("granted")}` : `✕ ${t("denied")}`}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}