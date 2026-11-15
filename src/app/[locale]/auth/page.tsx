"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { MOCK_USERS } from "@/lib/mock-users";
import { translate } from "@/lib/i18n/translator";

interface AuthPageProps {
  params: { locale: string };
}

export default function AuthPage({ params: { locale } }: AuthPageProps) {
  const t = (text: string) => translate(text, locale);
  const isRtl = locale === "fa" || locale === "ar";

  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirect") || `/${locale}/profile`;

  const [mode, setMode] = useState<"login" | "signup">("login");
  const [showPassword, setShowPassword] = useState(false);

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setIsLoading(true);

    try {
      const normalizedIdentifier = identifier.trim().replace(/\s+/g, "");
      const foundUser = MOCK_USERS.find(
        (u) =>
          (u.phone === normalizedIdentifier || u.username === normalizedIdentifier) &&
          u.passwordHash === password
      );

      if (foundUser) {
        localStorage.setItem("currentUser", JSON.stringify(foundUser));
        localStorage.setItem("authToken", "mock-jwt-token-melkism-2026");
        router.push(redirectUrl);
      } else {
        setErrorMsg(t("شماره موبایل/نام کاربری یا رمز عبور اشتباه است."));
      }
    } catch (err) {
      setErrorMsg(t("خطایی در برقراری ارتباط رخ داد. لطفاً دوباره تلاش کنید."));
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (!termsAccepted) {
      setErrorMsg(t("لطفاً قوانین و مقررات ملکیسم را بپذیرید."));
      return;
    }

    setIsLoading(true);

    try {
      const newUser = {
        id: `user-${Date.now()}`,
        phone: identifier,
        name: fullName || t("کاربر جدید ملکیسم"),
        username: `user_${Math.floor(1000 + Math.random() * 9000)}`,
        role: "USER",
        avatar: "/images/melkism-logo-Mark.svg",
        isProfileComplete: false,
      };

      localStorage.setItem("currentUser", JSON.stringify(newUser));
      localStorage.setItem("authToken", "mock-jwt-token-new-user");
      router.push(`/${locale}/profile?complete=true`);
    } catch (err) {
      setErrorMsg(t("ثبت‌نام با مشکل مواجه شد."));
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleAuth = () => {
    setIsLoading(true);
    setTimeout(() => {
      const googleUser = {
        id: "google-10928371",
        name: "Google User",
        email: "user@gmail.com",
        username: "google_user",
        role: "USER",
        avatar: "https://lh3.googleusercontent.com/a/default-user",
        isProfileComplete: false,
      };

      localStorage.setItem("currentUser", JSON.stringify(googleUser));
      localStorage.setItem("authToken", "google-oauth-token");
      router.push(redirectUrl);
    }, 1000);
  };

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className="min-h-screen flex items-center justify-center bg-slate-50/70 dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 font-sans"
    >
      <div className="w-full max-w-md space-y-8 bg-white dark:bg-slate-800 p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-700/60 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all">
        
        {/* لوگو و عنوان */}
        <div className="text-center space-y-3">
          <Link href={`/${locale}`} className="inline-block hover:opacity-90 transition transform active:scale-95">
            <div className="w-16 h-16 mx-auto relative flex items-center justify-center">
              <Image
                src="/images/melkism-logo-Mark.svg"
                alt="Melkism Logo"
                width={56}
                height={56}
                priority
                className="object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/melkism-logo-Mark.png";
                }}
              />
            </div>
          </Link>

          <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100 tracking-tight">
            {mode === "login" ? t("ورود به حساب ملکیسم") : t("عضویت و ثبت‌نام در ملکیسم")}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {mode === "login"
              ? t("دسترسی به تحلیل‌های تخصصی، دانشنامه و هوش بازار مسکن")
              : t("برای دسترسی کامل به گزارش‌ها و تکمیل پروفایل کاربری")}
          </p>
        </div>

        {/* ورود سریع با گوگل */}
        <div className="space-y-3">
          <button
            type="button"
            onClick={handleGoogleAuth}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-2xl text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700 transition active:scale-[0.99] disabled:opacity-50"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span>{t("ورود سریع با اکانت گوگل")}</span>
          </button>

          <div className="relative flex items-center justify-center my-4">
            <div className="border-t border-slate-200 dark:border-slate-700 w-full" />
            <span className="bg-white dark:bg-slate-800 px-3 text-[11px] text-slate-400 font-medium absolute">
              {t("یا با حساب کاربری")}
            </span>
          </div>
        </div>

        {/* نمایش خطای فرم */}
        {errorMsg && (
          <div className="p-3.5 rounded-2xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 text-xs text-center font-medium">
            {errorMsg}
          </div>
        )}

        {/* فرم ورود/ثبت‌نام */}
        <form onSubmit={mode === "login" ? handleLogin : handleSignup} className="space-y-4">
          {mode === "signup" && (
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                {t("نام و نام خانوادگی")}
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={t("مثلاً: علی رضایی")}
                className="w-full px-4 py-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition"
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              {mode === "login" ? t("شماره موبایل، ایمیل یا یوزرنیم") : t("شماره موبایل یا ایمیل")}
            </label>
            <input
              type="text"
              required
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder={mode === "login" ? "09049746417" : "09xxxxxxxxx"}
              className="w-full px-4 py-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50 font-mono text-left transition"
              dir="ltr"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                {t("رمز عبور")}
              </label>
              {mode === "login" && (
                <Link
                  href={`/${locale}/forgot-password`}
                  className="text-[11px] text-amber-600 hover:text-amber-700 dark:text-amber-400 font-medium"
                >
                  {t("رمز عبور را فراموش کرده‌اید؟")}
                </Link>
              )}
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={`w-full px-4 py-3 text-xs rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50 font-mono text-left transition ${
                  isRtl ? "pl-12" : "pr-12"
                }`}
                dir="ltr"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs font-medium ${
                  isRtl ? "left-3" : "right-3"
                }`}
              >
                {showPassword ? t("مخفی") : t("نمایش")}
              </button>
            </div>
          </div>

          {mode === "signup" && (
            <div className="flex items-center gap-2 pt-1">
              <input
                type="checkbox"
                id="terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                className="w-4 h-4 rounded border-slate-300 text-amber-500 focus:ring-amber-400 cursor-pointer"
              />
              <label htmlFor="terms" className="text-[11px] text-slate-600 dark:text-slate-400 cursor-pointer">
                {t("شرایط و قوانین ملکیسم را می‌پذیرم.")}
              </label>
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 px-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-2xl text-xs shadow-lg shadow-amber-500/20 active:scale-[0.99] transition disabled:opacity-50 mt-2"
          >
            {isLoading
              ? t("در حال پردازش...")
              : mode === "login"
              ? t("ورود به حساب کاربری")
              : t("ثبت‌نام و ورود به پروفایل")}
          </button>
        </form>

        {/* سوییچ بین حالت ورود و ثبت‌نام */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-700/50 text-center text-xs">
          {mode === "login" ? (
            <p className="text-slate-600 dark:text-slate-400">
              {t("هنوز حساب کاربری ندارید؟")}{" "}
              <button
                onClick={() => {
                  setMode("signup");
                  setErrorMsg(null);
                }}
                className="font-bold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1 mx-1"
              >
                {t("ثبت‌نام کاربر جدید")}
              </button>
            </p>
          ) : (
            <p className="text-slate-600 dark:text-slate-400">
              {t("قبلاً ثبت‌نام کرده‌اید؟")}{" "}
              <button
                onClick={() => {
                  setMode("login");
                  setErrorMsg(null);
                }}
                className="font-bold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1 mx-1"
              >
                {t("ورود به حساب")}
              </button>
            </p>
          )}
        </div>

      </div>
    </div>
  );
}