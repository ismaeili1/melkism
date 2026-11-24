"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLocalizedText } from "@/hooks/useLocalizedText";
import {
  MelkismRole,
  MelkismUser,
  getMasterUsers,
  getSavedTheme,
  persistSessionAndRedirect,
  saveMasterUsers,
  setSavedTheme,
} from "@/lib/auth-store";

export default function RegisterPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const isRtl = ["fa", "ar"].includes(locale);
  const dir = isRtl ? "rtl" : "ltr";

  const { t, num } = useLocalizedText("UnifiedAuth");

  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [channel, setChannel] = useState<"EMAIL" | "MOBILE">("EMAIL");

  // فیلدهای ضروری
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<MelkismRole>("USER");
  const [acceptTerms, setAcceptTerms] = useState(true);

  // فیلدهای اختیاری
  const [showOptional, setShowOptional] = useState(false);
  const [tradeSpecialty, setTradeSpecialty] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");
  const [bio, setBio] = useState("");

  // کد تایید
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  useEffect(() => {
    setTheme(getSavedTheme());
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    setSavedTheme(next);
  };

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setInfo(null);

    const existing = getMasterUsers();
    const cleanUser = username.trim().toLowerCase();

    if (existing.some((u) => u.username.toLowerCase() === cleanUser)) {
      setError(t("usernameTakenError"));
      return;
    }

    if (channel === "EMAIL" && !email.trim()) {
      setError(t("emailRequiredError"));
      return;
    }

    if (channel === "MOBILE" && !mobile.trim()) {
      setError(t("mobileRequiredError"));
      return;
    }

    if (!acceptTerms) {
      setError(t("termsRequiredError"));
      return;
    }

    const code = String(Math.floor(100000 + Math.random() * 900000));
    setGeneratedOtp(code);
    setEnteredOtp(code);
    setOtpSent(true);

    const target = channel === "EMAIL" ? email.trim() : mobile.trim();
    setInfo(
      t("otpSentNotice", {
        channel: channel === "EMAIL" ? t("channelEmail") : t("channelMobile"),
        target,
        code: num(code),
      })
    );
  };

  const handleCompleteRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (enteredOtp.trim() !== generatedOtp.trim()) {
      setError(t("invalidOtpError"));
      return;
    }

    const users = getMasterUsers();
    const cleanUser = username.trim().toLowerCase();

    const createdUser: MelkismUser = {
      id: `usr-${Date.now()}`,
      username: cleanUser,
      password,
      fullName: fullName.trim(),
      email: email.trim() || `${cleanUser}@melkism.local`,
      mobile: mobile.trim() || "-",
      role,
      tradeSpecialty: tradeSpecialty.trim() || t("defaultTradeLabel"),
      verificationStatus: "UNVERIFIED",
      isActive: true,
      canAdminManage: true,
      authProvider: "LOCAL",
      createdAt: "1405/09/03",
      companyName: companyName.trim() || undefined,
      website: website.trim() || undefined,
      bio: bio.trim() || undefined,
    };

    saveMasterUsers([createdUser, ...users]);
    await persistSessionAndRedirect(createdUser, `/${locale}/user/profile?kyc=pending`);
  };

  const isDark = theme === "dark";

  return (
    <div
      dir={dir}
      className={`min-h-screen transition-colors font-sans flex flex-col justify-between ${
        isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      <div
        className={`border-b px-6 py-4 flex items-center justify-between ${
          isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
        }`}
      >
        <Link href={`/${locale}`} className="font-black text-base tracking-tight">
          MELKISM
        </Link>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className={`px-3 py-2 rounded-xl text-xs font-bold border ${
              isDark
                ? "bg-slate-800 border-slate-700 text-amber-300"
                : "bg-slate-100 border-slate-200 text-slate-700"
            }`}
          >
            {isDark ? `☀️ ${t("lightMode")}` : `🌙 ${t("darkMode")}`}
          </button>
          <Link
            href={`/${locale}/login`}
            className="px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-600 text-white"
          >
            {t("backToLoginBtn")}
          </Link>
        </div>
      </div>

      <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div
          className={`w-full max-w-2xl rounded-3xl border p-7 sm:p-8 shadow-sm space-y-6 text-xs ${
            isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
          }`}
        >
          <div className="space-y-1">
            <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100">
              {t("registerBadge")}
            </span>
            <h1 className="text-2xl font-black">{t("registerTitle")}</h1>
            <p className={isDark ? "text-slate-400" : "text-slate-500"}>{t("registerSubtitle")}</p>
          </div>

          {error && (
            <div className="bg-rose-50 border border-rose-200 text-rose-800 font-bold px-4 py-3 rounded-2xl">
              {error}
            </div>
          )}
          {info && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold px-4 py-3 rounded-2xl">
              {info}
            </div>
          )}

          {/* انتخاب روش فعال‌سازی اولیه */}
          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => {
                setChannel("EMAIL");
                setOtpSent(false);
              }}
              className={`py-3 px-4 rounded-2xl font-bold border transition ${
                channel === "EMAIL"
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : isDark
                  ? "bg-slate-950 border-slate-700 text-slate-300"
                  : "bg-slate-50 border-slate-200 text-slate-700"
              }`}
            >
              ✉️ {t("activateViaEmail")}
            </button>
            <button
              type="button"
              onClick={() => {
                setChannel("MOBILE");
                setOtpSent(false);
              }}
              className={`py-3 px-4 rounded-2xl font-bold border transition ${
                channel === "MOBILE"
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : isDark
                  ? "bg-slate-950 border-slate-700 text-slate-300"
                  : "bg-slate-50 border-slate-200 text-slate-700"
              }`}
            >
              📱 {t("activateViaMobile")}
            </button>
          </div>

          <form
            onSubmit={otpSent ? handleCompleteRegister : handleSendOtp}
            className="space-y-5"
          >
            <div
              className={`p-5 rounded-2xl border space-y-4 ${
                isDark ? "bg-slate-950/60 border-slate-800" : "bg-slate-50 border-slate-200"
              }`}
            >
              <div className="font-black text-indigo-600">{t("requiredFieldsHeading")}</div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold mb-1">{t("fullNameLabel")} *</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className={`w-full rounded-xl border px-3.5 py-2.5 outline-none ${
                      isDark ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"
                    }`}
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">{t("usernameLabel")} *</label>
                  <input
                    type="text"
                    dir="ltr"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className={`w-full rounded-xl border px-3.5 py-2.5 outline-none font-mono ${
                      isDark ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"
                    }`}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold mb-1">
                    {channel === "EMAIL" ? `${t("emailField")} *` : t("emailField")}
                  </label>
                  <input
                    type="email"
                    dir="ltr"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full rounded-xl border px-3.5 py-2.5 outline-none font-mono ${
                      isDark ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"
                    }`}
                    required={channel === "EMAIL"}
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">
                    {channel === "MOBILE" ? `${t("mobileField")} *` : t("mobileField")}
                  </label>
                  <input
                    type="text"
                    dir="ltr"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    className={`w-full rounded-xl border px-3.5 py-2.5 outline-none font-mono ${
                      isDark ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"
                    }`}
                    required={channel === "MOBILE"}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold mb-1">{t("accountTypeLabel")} *</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value as MelkismRole)}
                    className={`w-full rounded-xl border px-3.5 py-2.5 outline-none ${
                      isDark ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"
                    }`}
                  >
                    <option value="USER">{t("roleOptionUser")}</option>
                    <option value="COMPANY">{t("roleOptionCompany")}</option>
                    <option value="AGENCY">{t("roleOptionAgency")}</option>
                    <option value="EXPERT">{t("roleOptionExpert")}</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold mb-1">{t("passwordLabel")} *</label>
                  <input
                    type="password"
                    dir="ltr"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full rounded-xl border px-3.5 py-2.5 outline-none font-mono ${
                      isDark ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"
                    }`}
                    required
                  />
                </div>
              </div>
            </div>

            {/* بخش فیلدهای اختیاری */}
            <div
              className={`rounded-2xl border p-4 space-y-3 ${
                isDark ? "border-slate-800" : "border-slate-200"
              }`}
            >
              <button
                type="button"
                onClick={() => setShowOptional((prev) => !prev)}
                className="w-full flex items-center justify-between font-bold"
              >
                <span>{t("optionalFieldsHeading")}</span>
                <span className="text-indigo-600">
                  {showOptional ? t("hideOptional") : t("showOptional")}
                </span>
              </button>

              {showOptional && (
                <div className="space-y-3 pt-2 border-t border-slate-200/60">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold mb-1">{t("tradeField")}</label>
                      <input
                        type="text"
                        value={tradeSpecialty}
                        onChange={(e) => setTradeSpecialty(e.target.value)}
                        className={`w-full rounded-xl border px-3 py-2 outline-none ${
                          isDark ? "bg-slate-950 border-slate-700" : "bg-slate-50 border-slate-200"
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block font-bold mb-1">{t("companyField")}</label>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className={`w-full rounded-xl border px-3 py-2 outline-none ${
                          isDark ? "bg-slate-950 border-slate-700" : "bg-slate-50 border-slate-200"
                        }`}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-bold mb-1">{t("websiteField")}</label>
                    <input
                      type="text"
                      dir="ltr"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className={`w-full rounded-xl border px-3 py-2 outline-none font-mono ${
                        isDark ? "bg-slate-950 border-slate-700" : "bg-slate-50 border-slate-200"
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block font-bold mb-1">{t("bioField")}</label>
                    <textarea
                      rows={2}
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                      className={`w-full rounded-xl border px-3 py-2 outline-none ${
                        isDark ? "bg-slate-950 border-slate-700" : "bg-slate-50 border-slate-200"
                      }`}
                    />
                  </div>
                </div>
              )}
            </div>

            {otpSent && (
              <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-950 space-y-2">
                <label className="block font-bold">{t("enterOtpLabel")}</label>
                <input
                  type="text"
                  dir="ltr"
                  value={enteredOtp}
                  onChange={(e) => setEnteredOtp(e.target.value)}
                  className="w-full bg-white border border-indigo-300 rounded-xl px-4 py-2.5 text-center font-mono font-black tracking-widest"
                  required
                />
              </div>
            )}

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
              />
              <span>{t("termsConsentText")}</span>
            </label>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-2xl transition shadow-xs"
            >
              {otpSent ? t("completeRegisterAndProfileBtn") : t("sendActivationCodeBtn")}
            </button>
          </form>

          <div className="text-center pt-1">
            <span className={isDark ? "text-slate-400" : "text-slate-500"}>
              {t("alreadyHaveAccount")}{" "}
            </span>
            <Link href={`/${locale}/login`} className="text-indigo-600 font-black hover:underline">
              {t("goToLoginLink")}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}