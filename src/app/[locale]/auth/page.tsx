"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useLocalizedText } from "@/hooks/useLocalizedText";
import {
  DemoUserAccount,
  MelkismRole,
  getActiveDemoSession,
  getRoleDashboardPath,
  loadDemoAccounts,
  saveDemoAccounts,
  setActiveDemoSession,
} from "@/lib/demo-auth";

type AuthMode = "LOGIN" | "REGISTER";
type VerifyChannel = "EMAIL" | "MOBILE";

export default function AuthPage() {
  const params = useParams();
  const router = useRouter();
  const locale = (params?.locale as string) || "fa";
  const isRtl = ["fa", "ar"].includes(locale);
  const dir = isRtl ? "rtl" : "ltr";

  const { t, num } = useLocalizedText("AuthFlow");

  const [mode, setMode] = useState<AuthMode>("LOGIN");
  const [accounts, setAccounts] = useState<DemoUserAccount[]>([]);
  const [activeSessionUser, setActiveSessionUser] = useState<DemoUserAccount | null>(null);

  // فرم ورود
  const [loginIdentifier, setLoginIdentifier] = useState("superadmin");
  const [loginPassword, setLoginPassword] = useState("Melk@Super2026");
  const [showPassword, setShowPassword] = useState(false);

  // فرم ثبت‌نام اولیه (ضروری + اختیاری + تایید ایمیل یا موبایل)
  const [channel, setChannel] = useState<VerifyChannel>("EMAIL");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState<MelkismRole>("USER");
  const [tradeSpecialty, setTradeSpecialty] = useState("کاربر عادی / متقاضی");
  const [acceptTerms, setAcceptTerms] = useState(true);

  // آیتم‌های اختیاری در ثبت‌نام اولیه
  const [showOptionalFields, setShowOptionalFields] = useState(false);
  const [optionalCompany, setOptionalCompany] = useState("");
  const [optionalWebsite, setOptionalWebsite] = useState("");
  const [optionalBio, setOptionalBio] = useState("");

  // مرحله ارسال و تایید کد ایمیل یا پیامک موبایلی
  const [otpSent, setOtpSent] = useState(false);
  const [generatedCode, setGeneratedCode] = useState("");
  const [enteredCode, setEnteredCode] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [infoMsg, setInfoMsg] = useState<string | null>(null);

  useEffect(() => {
    const loaded = loadDemoAccounts();
    setAccounts(loaded);
    const session = getActiveDemoSession();
    if (session?.user) {
      setActiveSessionUser(session.user);
    }
  }, []);

  const handleDirectRoleLogin = (account: DemoUserAccount) => {
    if (!account.isActive) {
      setErrorMsg(t("accountSuspendedError", { name: account.fullName }));
      return;
    }
    setErrorMsg(null);
    setActiveDemoSession(account);
    setActiveSessionUser(account);
    router.push(getRoleDashboardPath(locale, account.role));
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const idTrim = loginIdentifier.trim().toLowerCase();
    const found = accounts.find(
      (acc) =>
        acc.username.toLowerCase() === idTrim ||
        acc.email.toLowerCase() === idTrim ||
        acc.mobile === loginIdentifier.trim()
    );

    if (!found || found.password !== loginPassword) {
      setErrorMsg(t("invalidCredentialsError"));
      return;
    }

    handleDirectRoleLogin(found);
  };

  const handleSendVerificationCode = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setInfoMsg(null);

    if (!fullName.trim() || !username.trim() || !password.trim()) {
      setErrorMsg(t("requiredFieldsError"));
      return;
    }

    if (channel === "EMAIL" && !email.trim()) {
      setErrorMsg(t("emailRequiredError"));
      return;
    }

    if (channel === "MOBILE" && !mobile.trim()) {
      setErrorMsg(t("mobileRequiredError"));
      return;
    }

    if (!acceptTerms) {
      setErrorMsg(t("termsRequiredError"));
      return;
    }

    const code = String(Math.floor(100000 + Math.random() * 900000));
    setGeneratedCode(code);
    setEnteredCode(code);
    setOtpSent(true);

    const target = channel === "EMAIL" ? email.trim() : mobile.trim();
    setInfoMsg(
      t("otpSentBanner", {
        channelLabel: channel === "EMAIL" ? t("channelEmail") : t("channelMobile"),
        target,
        code: num(code),
      })
    );
  };

  const handleCompleteRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (enteredCode.trim() !== generatedCode.trim()) {
      setErrorMsg(t("invalidOtpError"));
      return;
    }

    const cleanUsername = username.trim().toLowerCase();
    const newAccount: DemoUserAccount = {
      id: `usr-${Date.now()}`,
      username: cleanUsername,
      password,
      fullName: fullName.trim(),
      email: email.trim() || `${cleanUsername}@melkism.local`,
      mobile: mobile.trim() || "09120000099",
      role: selectedRole,
      tradeSpecialty: tradeSpecialty.trim() || t("defaultTrade"),
      verificationStatus: "UNVERIFIED",
      isActive: true,
      canAdminManage: true,
      createdAt: "1405/09/03",
      optionalCompany: optionalCompany.trim() || undefined,
      optionalWebsite: optionalWebsite.trim() || undefined,
      optionalBio: optionalBio.trim() || undefined,
    };

    const updatedList = [newAccount, ...accounts];
    setAccounts(updatedList);
    saveDemoAccounts(updatedList);
    setActiveDemoSession(newAccount);
    setActiveSessionUser(newAccount);

    // پس از فعال‌سازی اولیه، کاربر وارد پروفایل می‌شود تا احراز هویت و مدارک را تکمیل کند
    router.push(`/${locale}/user/profile?registered=1&kyc=pending`);
  };

  return (
    <div
      className={`min-h-screen bg-slate-50 text-slate-800 p-4 sm:p-8 ${
        isRtl ? "dir-rtl" : "dir-ltr"
      } font-sans`}
      dir={dir}
    >
      <div className="max-w-6xl mx-auto space-y-6">
        {/* هدر صفحه */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full inline-block mb-1">
              {t("badge")}
            </span>
            <h1 className="text-2xl font-black text-slate-950">{t("pageTitle")}</h1>
            <p className="text-xs text-slate-500 mt-1">{t("pageSubtitle")}</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {activeSessionUser && (
              <Link
                href={getRoleDashboardPath(locale, activeSessionUser.role)}
                className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold px-3.5 py-2 rounded-xl hover:bg-emerald-100 transition"
              >
                {t("activeSessionBadge", {
                  name: activeSessionUser.fullName,
                  role: activeSessionUser.role,
                })}
              </Link>
            )}
            <Link
              href={`/${locale}`}
              className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition"
            >
              {isRtl ? `← ${t("backHome")}` : `${t("backHome")} →`}
            </Link>
          </div>
        </div>

        {/* پیام‌های وضعیت */}
        {errorMsg && (
          <div className="bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold px-4 py-3 rounded-2xl">
            {errorMsg}
          </div>
        )}
        {infoMsg && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-4 py-3 rounded-2xl">
            {infoMsg}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* ستون فرم ورود یا ثبت‌نام */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5 text-xs">
            <div className="grid grid-cols-2 gap-2 bg-slate-100 p-1 rounded-xl">
              <button
                type="button"
                onClick={() => {
                  setMode("LOGIN");
                  setErrorMsg(null);
                  setInfoMsg(null);
                }}
                className={`py-2.5 rounded-lg font-bold transition ${
                  mode === "LOGIN"
                    ? "bg-white text-indigo-700 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {t("tabLogin")}
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode("REGISTER");
                  setErrorMsg(null);
                  setInfoMsg(null);
                }}
                className={`py-2.5 rounded-lg font-bold transition ${
                  mode === "REGISTER"
                    ? "bg-white text-indigo-700 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {t("tabRegister")}
              </button>
            </div>

            {mode === "LOGIN" ? (
              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {t("loginIdentifierLabel")}
                  </label>
                  <input
                    type="text"
                    value={loginIdentifier}
                    onChange={(e) => setLoginIdentifier(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-indigo-600 font-mono"
                    required
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="font-bold text-slate-700">{t("passwordLabel")}</label>
                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="text-indigo-600 font-bold text-[11px] hover:underline"
                    >
                      {showPassword ? t("hidePassword") : t("showPassword")}
                    </button>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 outline-none focus:border-indigo-600 font-mono"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition shadow-xs"
                >
                  {t("loginSubmitBtn")}
                </button>
              </form>
            ) : (
              <div className="space-y-4">
                {/* انتخاب کانال ارسال کد فعال‌سازی */}
                <div>
                  <span className="block font-bold text-slate-700 mb-2">
                    {t("activationChannelLabel")}
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setChannel("EMAIL");
                        setOtpSent(false);
                      }}
                      className={`py-2.5 px-3 rounded-xl font-bold border transition ${
                        channel === "EMAIL"
                          ? "bg-indigo-50 text-indigo-700 border-indigo-300"
                          : "bg-white text-slate-600 border-slate-200"
                      }`}
                    >
                      ✉️ {t("channelEmail")}
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setChannel("MOBILE");
                        setOtpSent(false);
                      }}
                      className={`py-2.5 px-3 rounded-xl font-bold border transition ${
                        channel === "MOBILE"
                          ? "bg-indigo-50 text-indigo-700 border-indigo-300"
                          : "bg-white text-slate-600 border-slate-200"
                      }`}
                    >
                      📱 {t("channelMobile")}
                    </button>
                  </div>
                </div>

                <form
                  onSubmit={otpSent ? handleCompleteRegistration : handleSendVerificationCode}
                  className="space-y-4"
                >
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="text-[11px] font-black text-slate-900">
                      {t("requiredSectionTitle")}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          {t("fullNameRequired")} *
                        </label>
                        <input
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-600"
                          required
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          {t("usernameRequired")} *
                        </label>
                        <input
                          type="text"
                          dir="ltr"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-600 font-mono"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          {channel === "EMAIL" ? `${t("emailLabel")} *` : t("emailLabel")}
                        </label>
                        <input
                          type="email"
                          dir="ltr"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-600 font-mono"
                          required={channel === "EMAIL"}
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          {channel === "MOBILE" ? `${t("mobileLabel")} *` : t("mobileLabel")}
                        </label>
                        <input
                          type="text"
                          dir="ltr"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-600 font-mono"
                          required={channel === "MOBILE"}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          {t("roleSelectionLabel")}
                        </label>
                        <select
                          value={selectedRole}
                          onChange={(e) => setSelectedRole(e.target.value as MelkismRole)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 outline-none"
                        >
                          <option value="USER">USER ({t("roleUserShort")})</option>
                          <option value="COMPANY">COMPANY ({t("roleCompanyShort")})</option>
                          <option value="AGENCY">AGENCY ({t("roleAgencyShort")})</option>
                          <option value="EXPERT">EXPERT ({t("roleExpertShort")})</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">
                          {t("passwordLabel")} *
                        </label>
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-600 font-mono"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* آیتم‌های اختیاری در ثبت‌نام اولیه */}
                  <div className="border border-slate-200 rounded-xl p-4 space-y-3">
                    <button
                      type="button"
                      onClick={() => setShowOptionalFields((prev) => !prev)}
                      className="w-full flex items-center justify-between font-bold text-slate-700 text-[11px]"
                    >
                      <span>{t("optionalSectionTitle")}</span>
                      <span className="text-indigo-600">
                        {showOptionalFields ? t("collapseOptional") : t("expandOptional")}
                      </span>
                    </button>

                    {showOptionalFields && (
                      <div className="space-y-3 pt-2 border-t border-slate-100">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-slate-600 font-bold mb-1">
                              {t("optionalCompanyLabel")}
                            </label>
                            <input
                              type="text"
                              value={optionalCompany}
                              onChange={(e) => setOptionalCompany(e.target.value)}
                              className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-slate-600 font-bold mb-1">
                              {t("optionalWebsiteLabel")}
                            </label>
                            <input
                              type="text"
                              dir="ltr"
                              value={optionalWebsite}
                              onChange={(e) => setOptionalWebsite(e.target.value)}
                              className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none font-mono"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-slate-600 font-bold mb-1">
                            {t("optionalTradeLabel")}
                          </label>
                          <input
                            type="text"
                            value={tradeSpecialty}
                            onChange={(e) => setTradeSpecialty(e.target.value)}
                            className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-600 font-bold mb-1">
                            {t("optionalBioLabel")}
                          </label>
                          <textarea
                            rows={2}
                            value={optionalBio}
                            onChange={(e) => setOptionalBio(e.target.value)}
                            className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none"
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {otpSent && (
                    <div className="p-4 rounded-xl bg-indigo-50/70 border border-indigo-200 space-y-2">
                      <label className="block font-bold text-indigo-900">
                        {t("enterOtpLabel")}
                      </label>
                      <input
                        type="text"
                        dir="ltr"
                        value={enteredCode}
                        onChange={(e) => setEnteredCode(e.target.value)}
                        className="w-full bg-white border border-indigo-300 rounded-xl px-3.5 py-2 font-mono text-center tracking-widest font-bold"
                        required
                      />
                    </div>
                  )}

                  <label className="flex items-center gap-2 text-[11px] text-slate-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="rounded border-slate-300"
                    />
                    <span>{t("acceptTermsText")}</span>
                  </label>

                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {t("postRegisterKycHint")}
                  </p>

                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition shadow-xs"
                  >
                    {otpSent ? t("verifyAndGoProfileBtn") : t("sendCodeBtn")}
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* ستون دسترسی سریع به حساب‌های نمونه برای تست هر نقش */}
          <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4 text-xs">
            <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <h2 className="text-sm font-black text-slate-950">{t("quickDemoTitle")}</h2>
                <p className="text-[11px] text-slate-500 mt-0.5">{t("quickDemoSubtitle")}</p>
              </div>
              <Link
                href={`/${locale}/admin/users`}
                className="text-indigo-600 font-bold text-[11px] hover:underline whitespace-nowrap"
              >
                {t("manageInAdminUsersLink")}
              </Link>
            </div>

            <div className="divide-y divide-slate-100">
              {accounts.map((acc) => (
                <div
                  key={acc.id}
                  className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/70 px-2 rounded-xl transition"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="font-bold text-slate-900">{acc.fullName}</span>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-bold bg-slate-100 text-slate-700">
                        {acc.role}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                          acc.isActive
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-rose-50 text-rose-700"
                        }`}
                      >
                        {acc.isActive ? t("statusActive") : t("statusRestricted")}
                      </span>
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono">
                      user: <strong className="text-slate-800">{acc.username}</strong> • pass:{" "}
                      <strong className="text-slate-800">{acc.password}</strong>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDirectRoleLogin(acc)}
                    className="bg-slate-900 hover:bg-indigo-600 text-white font-bold px-3.5 py-2 rounded-xl text-[11px] transition whitespace-nowrap self-start sm:self-center"
                  >
                    {t("loginAsRoleBtn")}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}