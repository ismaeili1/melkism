"use client";

import { useParams } from "next/navigation";
import FeatureGuard from "@/components/auth/FeatureGuard";

export default function FeaturesDemoPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const dir = ["fa", "ar"].includes(locale) ? "rtl" : "ltr";

  return (
    <div className={`max-w-4xl mx-auto p-8 space-y-6 ${dir === "rtl" ? "dir-rtl" : "dir-ltr"} font-sans`} dir={dir}>
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-xl font-extrabold text-slate-900">🛡️ پنل تست مانیتورینگ سطوح دسترسی ابزارها</h1>
        <p className="text-xs text-slate-500 mt-1">ابزارهای زیر بر اساس سطح نقش کاربری شما به صورت خودکار قفل یا فعال می‌شوند.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* ۱. تولید خبر با هوش مصنوعی */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
          <h3 className="font-bold text-sm text-slate-800">⚡ تولید خبر با هوش مصنوعی</h3>
          <FeatureGuard allowedRoles={["SUPER_ADMIN", "ADMIN", "MANAGER"]}>
            <button onClick={() => alert("اجرای تولید خبر")} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg text-xs transition">
              ورود به ابزار تولید خبر
            </button>
          </FeatureGuard>
        </div>

        {/* ۲. تولید سند رسمی و حقوقی */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
          <h3 className="font-bold text-sm text-slate-800">📄 تولید سند حقوقی</h3>
          <FeatureGuard allowedRoles={["SUPER_ADMIN", "ADMIN", "COMPANY", "AGENCY"]}>
            <button onClick={() => alert("اجرای تولید سند")} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-xs transition">
              صدور سند و قرارداد
            </button>
          </FeatureGuard>
        </div>

        {/* ۳. گزارش و تحلیل هوشمند */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
          <h3 className="font-bold text-sm text-slate-800">📊 گزارش و تحلیل بازار</h3>
          <FeatureGuard allowedRoles={["SUPER_ADMIN", "ADMIN", "MANAGER", "COMPANY", "AGENCY", "EXPERT"]}>
            <button onClick={() => alert("مشاهده تحلیل")} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-lg text-xs transition">
              دریافت گزارش‌های کلان
            </button>
          </FeatureGuard>
        </div>

        {/* ۴. ثبت آگهی ویژه و پروفایل VIP */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
          <h3 className="font-bold text-sm text-slate-800">👑 پروفایل VIP و ثبت آگهی ویژه</h3>
          <FeatureGuard allowedRoles={["SUPER_ADMIN", "ADMIN", "COMPANY", "AGENCY", "EXPERT"]}>
            <button onClick={() => alert("مدیریت VIP")} className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg text-xs transition">
              تنظیمات حساب VIP
            </button>
          </FeatureGuard>
        </div>
      </div>
    </div>
  );
}