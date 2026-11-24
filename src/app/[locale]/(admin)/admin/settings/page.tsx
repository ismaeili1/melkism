"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLocalizedText } from "@/hooks/useLocalizedText";

export default function AdminSettingsPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const isRtl = ["fa", "ar"].includes(locale);
  const dir = isRtl ? "rtl" : "ltr";

  const { t, num } = useLocalizedText("AdminSettings");

  const defaultSettings = {
    brandName: "MELKIST",
    supportPhone: "021-88000000",
    supportEmail: "info@melkism.com",
    address: "تهران، سعادت‌آباد، بلوار دریا",
    workingHours: "شنبه تا چهارشنبه، ۹ الی ۱۷",
    defaultLocale: locale,
    modules: {
      news: true,
      library: true,
      marketHub: true,
      marketplace: true,
      specialists: true,
      rules: true,
    } as Record<string, boolean>,
  };

  const [settings, setSettings] = useState(defaultSettings);
  const [bannerMsg, setBannerMsg] = useState<string | null>(null);

  const activeModulesCount = Object.values(settings.modules).filter(Boolean).length;

  const moduleRows = [
    { key: "news", labelKey: "modNews" },
    { key: "library", labelKey: "modLibrary" },
    { key: "marketHub", labelKey: "modMarketHub" },
    { key: "marketplace", labelKey: "modMarketplace" },
    { key: "specialists", labelKey: "modSpecialists" },
    { key: "rules", labelKey: "modRules" },
  ];

  const handleToggleModule = (key: string) => {
    setSettings((prev) => ({
      ...prev,
      modules: {
        ...prev.modules,
        [key]: !prev.modules[key],
      },
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setBannerMsg(t("savedMessage", { count: num(activeModulesCount) }));
  };

  const handleReset = () => {
    setSettings(defaultSettings);
    setBannerMsg(t("resetMessage"));
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
            onClick={handleReset}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-4 py-2.5 rounded-xl transition"
          >
            {t("resetBtn")}
          </button>
          <Link
            href={`/${locale}/admin/dashboard`}
            className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition"
          >
            {isRtl ? `← ${t("backToDashboard")}` : `${t("backToDashboard")} →`}
          </Link>
        </div>
      </div>

      {bannerMsg && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-4 py-3 rounded-2xl">
          {bannerMsg}
        </div>
      )}

      <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4 text-xs">
          <h2 className="text-sm font-bold text-slate-900">{t("contactSectionTitle")}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-slate-700 mb-1">{t("brandNameLabel")}</label>
              <input
                type="text"
                value={settings.brandName}
                onChange={(e) => setSettings({ ...settings, brandName: e.target.value })}
                className="w-full border border-slate-200 rounded-xl px-3.5 py-2 outline-none focus:border-indigo-600"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">{t("supportPhoneLabel")}</label>
              <input
                type="text"
                dir="ltr"
                value={settings.supportPhone}
                onChange={(e) => setSettings({ ...settings, supportPhone: e.target.value })}
                className="w-full border border-slate-200 rounded-xl px-3.5 py-2 outline-none focus:border-indigo-600 font-mono"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">{t("supportEmailLabel")}</label>
              <input
                type="email"
                dir="ltr"
                value={settings.supportEmail}
                onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })}
                className="w-full border border-slate-200 rounded-xl px-3.5 py-2 outline-none focus:border-indigo-600 font-mono"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-700 mb-1">{t("workingHoursLabel")}</label>
              <input
                type="text"
                value={settings.workingHours}
                onChange={(e) => setSettings({ ...settings, workingHours: e.target.value })}
                className="w-full border border-slate-200 rounded-xl px-3.5 py-2 outline-none focus:border-indigo-600"
              />
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 mb-1">{t("addressLabel")}</label>
            <input
              type="text"
              value={settings.address}
              onChange={(e) => setSettings({ ...settings, address: e.target.value })}
              className="w-full border border-slate-200 rounded-xl px-3.5 py-2 outline-none focus:border-indigo-600"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-5 py-2.5 rounded-xl transition shadow-xs"
            >
              {t("saveBtn")}
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-3 text-xs">
            <h2 className="text-sm font-bold text-slate-900">{t("modulesSectionTitle")}</h2>
            {moduleRows.map((m) => {
              const active = settings.modules[m.key];
              return (
                <div
                  key={m.key}
                  className="flex items-center justify-between py-2 border-b border-slate-100 last:border-none"
                >
                  <span className="font-bold text-slate-800">{t(m.labelKey)}</span>
                  <button
                    type="button"
                    onClick={() => handleToggleModule(m.key)}
                    className={`px-3 py-1 rounded-lg font-bold text-[11px] transition ${
                      active
                        ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        : "bg-slate-100 text-slate-500 border border-slate-200"
                    }`}
                  >
                    {active ? t("statusActive") : t("statusDisabled")}
                  </button>
                </div>
              );
            })}
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-2 text-xs">
            <h2 className="text-sm font-bold text-slate-900">{t("uiSectionTitle")}</h2>
            <p className="text-slate-700 font-bold">
              {t("supportedLocalesInfo", { count: num(10) })}
            </p>
            <p className="text-slate-500 leading-relaxed">{t("rtlAutoInfo")}</p>
          </div>
        </div>
      </form>
    </div>
  );
}