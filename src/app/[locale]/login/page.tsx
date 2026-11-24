"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useLocalizedText } from "@/hooks/useLocalizedText";
import {
  MelkismUser,
  getDashboardRouteForRole,
  getMasterUsers,
  getSavedTheme,
  persistSessionAndRedirect,
  saveMasterUsers,
  setSavedTheme,
} from "@/lib/auth-store";

export default function LoginPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const locale = (params?.locale as string) || "fa";
  const isRtl = ["fa", "ar"].includes(locale);
  const dir = isRtl ? "rtl" : "ltr";

  const { t } = useLocalizedText("UnifiedAuth");

  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // مودال اجرایی ورود با گوگل
  const [showGoogleModal, setShowGoogleModal] = useState(false);
  const [googleEmail, setGoogleEmail] = useState("");
  const [googleName, setGoogleName] = useState("");

  useEffect(() => {
    setTheme(getSavedTheme());
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    setSavedTheme(next);
  };

  const resolveDestination = (user: MelkismUser) => {
    const redirectParam = searchParams?.get("redirect");
    if (redirectParam && redirectParam.startsWith("/")) {
      return redirectParam;
    }
    return getDashboardRouteForRole(locale, user.role);
  };

  const handleStandardLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const users = getMasterUsers();
    const cleanId = identifier.trim().toLowerCase();

    const found = users.find(
      (u) =>
        u.username.toLowerCase() === cleanId ||
        u.email.toLowerCase() === cleanId ||
        u.mobile === identifier.trim()
    );

    if (!found || found.password !== password) {
      setLoading(false);
      setError(t("invalidCredentials"));
      return;
    }

    if (!found.isActive) {
      setLoading(false);
      setError(t("accountRestricted"));
      return;
    }

    // سوپرادمین فقط از درگاه اختصاصی با تایید دو مرحله‌ای مجاز است
    if (found.role === "SUPER_ADMIN") {
      setLoading(false);
      setError(t("superAdminRestrictedNotice"));
      return;
    }

    await persistSessionAndRedirect(found, resolveDestination(found));
  };

  const handleGoogleComplete = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = googleEmail.trim().toLowerCase();
    if (!cleanEmail) return;

    setLoading(true);
    const users = getMasterUsers();
    let targetUser = users.find((u) => u.email.toLowerCase() === cleanEmail);

    if (!targetUser) {
      const baseUsername = cleanEmail.split("@")[0].replace(/[^a-z0-9_]/gi, "_");
      targetUser = {
        id: `usr-google-${Date.now()}`,
        username: baseUsername || `user_${Date.now()}`,
        password: `Ggl@${Math.floor(100000 + Math.random() * 900000)}`,
        fullName: googleName.trim() || baseUsername,
        email: cleanEmail,
        mobile: "-",
        role: "USER",
        tradeSpecialty: t("googleDefaultTrade"),
        verificationStatus: "UNVERIFIED",
        isActive: true,
        canAdminManage: true,
        authProvider: "GOOGLE",
        createdAt: "1405/09/03",
      };
      saveMasterUsers([targetUser, ...users]);
    }

    if (targetUser.role === "SUPER_ADMIN") {
      setLoading(false);
      setShowGoogleModal(false);
      setError(t("superAdminRestrictedNotice"));
      return;
    }

    await persistSessionAndRedirect(targetUser, resolveDestination(targetUser));
  };

  const isDark = theme === "dark";

  return (
    <div
      dir={dir}
      className={`min-h-screen transition-colors duration-200 font-sans flex flex-col justify-between ${
        isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* نوار بالای صفحه هماهنگ با سایت */}
      <div
        className={`border-b px-6 py-4 flex items-center justify-between ${
          isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
        }`}
      >
        <Link href={`/${locale}`} className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white font-black flex items-center justify-center text-sm shadow-xs">
            M
          </div>
          <div>
            <div className="font-black text-sm tracking-tight">MELKISM</div>
            <div className={`text-[10px] ${isDark ? "text-slate-400" : "text-slate-500"}`}>
              {t("brandTagline")}
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className={`px-3 py-2 rounded-xl text-xs font-bold border transition ${
              isDark
                ? "bg-slate-800 border-slate-700 text-amber-300 hover:bg-slate-700"
                : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {isDark ? `☀️ ${t("lightMode")}` : `🌙 ${t("darkMode")}`}
          </button>
          <Link
            href={`/${locale}`}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition ${
              isDark
                ? "bg-slate-800 hover:bg-slate-700 text-slate-200"
                : "bg-slate-900 hover:bg-slate-800 text-white"
            }`}
          >
            {isRtl ? `← ${t("backToHome")}` : `${t("backToHome")} →`}
          </Link>
        </div>
      </div>

      {/* کارت اصلی فرم ورود */}
      <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div
          className={`w-full max-w-md rounded-3xl border p-7 sm:p-8 shadow-sm space-y-6 ${
            isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
          }`}
        >
          <div className="space-y-1.5 text-center">
            <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
              {t("loginBadge")}
            </span>
            <h1 className="text-2xl font-black tracking-tight">{t("loginTitle")}</h1>
            <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
              {t("loginSubtitle")}
            </p>
          </div>

          {error && (
            <div className="bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold px-4 py-3 rounded-2xl leading-relaxed">
              {error}
            </div>
          )}

          {/* دکمه ورود با اکانت گوگل */}
          <button
            type="button"
            onClick={() => {
              setError(null);
              setShowGoogleModal(true);
            }}
            className={`w-full py-3 px-4 rounded-2xl border text-xs font-bold flex items-center justify-center gap-2.5 transition ${
              isDark
                ? "bg-slate-800 border-slate-700 hover:bg-slate-700 text-white"
                : "bg-white border-slate-300 hover:bg-slate-50 text-slate-800"
            }`}
          >
            <span className="w-5 h-5 rounded-full bg-rose-500 text-white font-black text-[11px] flex items-center justify-center">
              G
            </span>
            <span>{t("continueWithGoogle")}</span>
          </button>

          <div className="relative flex items-center justify-center">
            <div className={`w-full border-t ${isDark ? "border-slate-800" : "border-slate-200"}`} />
            <span
              className={`px-3 text-[11px] whitespace-nowrap ${
                isDark ? "bg-slate-900 text-slate-400" : "bg-white text-slate-400"
              }`}
            >
              {t("orLoginWithCredentials")}
            </span>
          </div>

          <form onSubmit={handleStandardLogin} className="space-y-4 text-xs">
            <div>
              <label className="block font-bold mb-1.5">{t("identifierLabel")}</label>
              <input
                type="text"
                dir="ltr"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder={t("identifierPlaceholder")}
                className={`w-full rounded-2xl border px-4 py-3 outline-none transition font-mono ${
                  isDark
                    ? "bg-slate-950 border-slate-700 focus:border-indigo-500 text-white"
                    : "bg-slate-50 border-slate-200 focus:bg-white focus:border-indigo-600 text-slate-900"
                }`}
                required
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="font-bold">{t("passwordLabel")}</label>
                <Link
                  href={`/${locale}/forgot-password`}
                  className="text-indigo-600 hover:underline font-bold text-[11px]"
                >
                  {t("forgotCredentialsLink")}
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  dir="ltr"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className={`w-full rounded-2xl border px-4 py-3 outline-none transition font-mono ${
                    isDark
                      ? "bg-slate-950 border-slate-700 focus:border-indigo-500 text-white"
                      : "bg-slate-50 border-slate-200 focus:bg-white focus:border-indigo-600 text-slate-900"
                  }`}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className={`absolute inset-y-0 ${
                    isRtl ? "left-3" : "right-3"
                  } text-[11px] font-bold text-indigo-600 hover:underline`}
                >
                  {showPassword ? t("hidePassword") : t("showPassword")}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white font-bold py-3.5 rounded-2xl transition shadow-xs"
            >
              {loading ? t("signingInBtn") : t("signInBtn")}
            </button>
          </form>

          {/* راهنمای اکانت‌های دمو قابل کلیک سریع برای تست (بجز سوپرادمین) */}
          <div
            className={`rounded-2xl border p-3.5 space-y-2 text-[11px] ${
              isDark ? "bg-slate-950/70 border-slate-800" : "bg-slate-50 border-slate-200"
            }`}
          >
            <div className="font-bold text-slate-500">{t("quickDemoFillTitle")}</div>
            <div className="flex flex-wrap gap-1.5">
              {[
                { label: "ADMIN", user: "admin_core", pass: "Melk@Admin2026" },
                { label: "MANAGER", user: "manager_cms", pass: "Melk@Mgr2026" },
                { label: "COMPANY", user: "alton_build", pass: "Melk@Comp2026" },
                { label: "AGENCY", user: "agency_pars", pass: "Melk@Agcy2026" },
                { label: "EXPERT", user: "expert_arch", pass: "Melk@Expr2026" },
                { label: "USER", user: "user_rezaei", pass: "Melk@User2026" },
              ].map((item) => (
                <button
                  key={item.user}
                  type="button"
                  onClick={() => {
                    setIdentifier(item.user);
                    setPassword(item.pass);
                    setError(null);
                  }}
                  className={`px-2.5 py-1 rounded-lg font-mono font-bold border transition ${
                    isDark
                      ? "bg-slate-900 border-slate-700 hover:border-indigo-500 text-slate-200"
                      : "bg-white border-slate-200 hover:border-indigo-500 text-slate-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* لینک انتقال به صفحه ثبت‌نام */}
          <div className="text-center text-xs pt-1">
            <span className={isDark ? "text-slate-400" : "text-slate-500"}>
              {t("noAccountPrompt")}{" "}
            </span>
            <Link
              href={`/${locale}/register`}
              className="text-indigo-600 font-black hover:underline"
            >
              {t("goToRegisterLink")}
            </Link>
          </div>
        </div>
      </main>

      {/* پنجره اجرایی ورود با اکانت گوگل */}
      {showGoogleModal && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div
            className={`w-full max-w-md rounded-3xl border p-6 shadow-xl space-y-4 text-xs ${
              isDark ? "bg-slate-900 border-slate-700 text-white" : "bg-white border-slate-200 text-slate-900"
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black">{t("googleModalTitle")}</h3>
              <button
                type="button"
                onClick={() => setShowGoogleModal(false)}
                className="text-slate-400 hover:text-slate-600 font-bold"
              >
                ✕
              </button>
            </div>
            <p className={`text-[11px] ${isDark ? "text-slate-400" : "text-slate-500"}`}>
              {t("googleModalDesc")}
            </p>
            <form onSubmit={handleGoogleComplete} className="space-y-3">
              <div>
                <label className="block font-bold mb-1">{t("googleEmailField")} *</label>
                <input
                  type="email"
                  dir="ltr"
                  value={googleEmail}
                  onChange={(e) => setGoogleEmail(e.target.value)}
                  placeholder="yourname@gmail.com"
                  className={`w-full rounded-xl border px-3.5 py-2.5 outline-none font-mono ${
                    isDark ? "bg-slate-950 border-slate-700" : "bg-slate-50 border-slate-200"
                  }`}
                  required
                />
              </div>
              <div>
                <label className="block font-bold mb-1">{t("googleNameField")}</label>
                <input
                  type="text"
                  value={googleName}
                  onChange={(e) => setGoogleName(e.target.value)}
                  className={`w-full rounded-xl border px-3.5 py-2.5 outline-none ${
                    isDark ? "bg-slate-950 border-slate-700" : "bg-slate-50 border-slate-200"
                  }`}
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowGoogleModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold"
                >
                  {t("cancelBtn")}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-bold"
                >
                  {t("googleConfirmBtn")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}