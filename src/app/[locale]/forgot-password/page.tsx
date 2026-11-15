"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { translate } from "@/lib/i18n/translator";

interface ForgotPasswordProps {
  params: { locale: string };
}

export default function ForgotPasswordPage({ params: { locale } }: ForgotPasswordProps) {
  const t = (text: string) => translate(text, locale);
  const isRtl = locale === "fa" || locale === "ar";

  const [identifier, setIdentifier] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSuccessMsg(t("لینک بازیابی رمز عبور با موفقیت ارسال شد."));
    }, 1000);
  };

  return (
    <div
      dir={isRtl ? "rtl" : "ltr"}
      className="min-h-screen bg-slate-50/70 dark:bg-slate-900 flex items-center justify-center p-4 sm:p-6 font-sans transition-colors"
    >
      <div className="w-full max-w-md bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-700/60 shadow-xl shadow-slate-200/40 dark:shadow-none space-y-6">
        
        {/* لوگو بدون زمینه و شفاف */}
        <div className="flex flex-col items-center text-center space-y-3">
          <Link href={`/${locale}`} className="hover:opacity-90 transition transform active:scale-95">
            <div className="w-16 h-16 relative flex items-center justify-center">
              <Image
                src="/images/melkism-logo-Mark.svg"
                alt="Melkism Logo"
                width={60}
                height={60}
                priority
                className="object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/images/melkism-logo-Mark.png";
                }}
              />
            </div>
          </Link>

          <h1 className="text-2xl font-black text-slate-800 dark:text-slate-100">
            {t("فراموشی رمز عبور")}
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
            {t("ایمیل یا شماره موبایل خود را وارد کنید تا لینک بازیابی ارسال شود.")}
          </p>
        </div>

        {/* پیام موفقیت */}
        {successMsg ? (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 text-emerald-600 dark:text-emerald-400 text-sm text-center font-bold">
              {successMsg}
            </div>
            <Link
              href={`/${locale}/auth`}
              className="block w-full py-3.5 text-center bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 font-bold rounded-2xl text-sm transition"
            >
              {t("بازگشت به صفحه ورود")}
            </Link>
          </div>
        ) : (
          /* فرم دریافت شناسه */
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                {t("شماره موبایل یا ایمیل")} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="09123456789 یا email@example.com"
                className="w-full px-4 py-3.5 text-sm rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition font-mono"
                dir="ltr"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black rounded-2xl text-sm shadow-lg shadow-amber-500/20 active:scale-[0.99] transition disabled:opacity-50"
            >
              {isLoading ? t("در حال پردازش...") : t("ارسال لینک بازیابی")}
            </button>

            <div className="text-center pt-2">
              <Link
                href={`/${locale}/auth`}
                className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline"
              >
                {t("بازگشت به صفحه ورود")}
              </Link>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}