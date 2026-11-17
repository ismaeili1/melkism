"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import FeatureGuard from "@/components/auth/FeatureGuard";

export default function UserDashboardPanel() {
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const dir = ["fa", "ar"].includes(locale) ? "rtl" : "ltr";

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
        console.error("خطا در دریافت اطلاعات کاربر:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-500 text-xs font-medium font-sans">
        در حال بارگذاری اطلاعات پنل کاربری...
      </div>
    );
  }

  const roleLabels: Record<string, string> = {
    SUPER_ADMIN: "مدیر ارشد سیستم (Super Admin)",
    ADMIN: "مدیر سیستم (Admin)",
    MANAGER: "مدیر محتوا و هوش مصنوعی (Manager)",
    COMPANY: "شرکت ساختمانی / سازنده (Company)",
    AGENCY: "آژانس املاک (Agency)",
    EXPERT: "کارشناس و مشاور متخصص (Expert)",
    USER: "کاربر عادی (User)",
  };

  return (
    <div className={`min-h-screen bg-slate-50/50 py-10 px-4 sm:px-6 lg:px-8 ${dir === "rtl" ? "dir-rtl" : "dir-ltr"} font-sans`} dir={dir}>
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* کارت خوش آمدگویی و مشخصات کاربر */}
        <div className="bg-white border border-slate-200/85 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <span className="text-[11px] font-bold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full inline-block">
              {roleLabels[user?.role] || "کاربر پلتفرم"}
            </span>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              سلام، {user?.name || "کاربر گرامی"} خوش آمدید!
            </h1>
            <p className="text-xs text-slate-500">
              ایمیل: <span className="font-medium text-slate-700 font-mono">{user?.email}</span> | وضعیت حساب: <span className="text-emerald-600 font-bold">{user?.status || "فعال"}</span>
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-600 max-w-sm">
            <span className="font-bold block text-slate-800 mb-1">📌 محدوده اختیارات (Access Scope):</span>
            <p className="leading-relaxed">{user?.accessScope || "دسترسی استاندارد بر اساس سطح نقش کاربری تعریف‌شده در سامانه ملکیسم."}</p>
          </div>
        </div>

        {/* بخش ابزارها و پنل‌های اختصاصی بر اساس نقش */}
        <div className="space-y-4">
          <h2 className="text-sm font-extrabold text-slate-900">🛠️ ابزارها و قابلیت‌های اختصاصی پنل شما</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            {/* ابزار ۱: تولید خبر (مختص مدیران) */}
            <FeatureGuard allowedRoles={["SUPER_ADMIN", "ADMIN", "MANAGER"]}>
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">📰</div>
                <h3 className="text-sm font-bold text-slate-900">مدیریت و تولید خبر هوشمند</h3>
                <p className="text-xs text-slate-500">پایش اخبار لحظه‌ای و تولید اتوماتیک محتوا با هوش مصنوعی.</p>
                <button onClick={() => alert("ورود به بخش مدیریت اخبار")} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-lg text-xs transition">
                  ورود به پنل اخبار
                </button>
              </div>
            </FeatureGuard>

            {/* ابزار ۲: تولید سند (مختص ادمین، شرکت و آژانس) */}
            <FeatureGuard allowedRoles={["SUPER_ADMIN", "ADMIN", "COMPANY", "AGENCY"]}>
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold">📄</div>
                <h3 className="text-sm font-bold text-slate-900">صدور اسناد و قراردادهای رسمی</h3>
                <p className="text-xs text-slate-500">تنظیم و تولید قراردادهای ملکی و اوراق حقوقی معتبر.</p>
                <button onClick={() => alert("ورود به ابزار اسناد")} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg text-xs transition">
                  مدیریت اسناد
                </button>
              </div>
            </FeatureGuard>

            {/* ابزار ۳: تحلیل کلان بازار (مدیران، شرکت‌ها، آژانس‌ها و کارشناسان) */}
            <FeatureGuard allowedRoles={["SUPER_ADMIN", "ADMIN", "MANAGER", "COMPANY", "AGENCY", "EXPERT"]}>
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">📊</div>
                <h3 className="text-sm font-bold text-slate-900">گزارش و تحلیل کلان بازار مسکن</h3>
                <p className="text-xs text-slate-500">دسترسی به داده‌های آماری، نمودارهای روند قیمت و تحلیل‌های تخصصی.</p>
                <button onClick={() => alert("ورود به بخش تحلیل")} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-lg text-xs transition">
                  مشاهده تحلیل‌ها
                </button>
              </div>
            </FeatureGuard>

            {/* ابزار ۴: پروفایل VIP و ثبت آگهی ویژه (شرکت، آژانس و کارشناس) */}
            <FeatureGuard allowedRoles={["SUPER_ADMIN", "ADMIN", "COMPANY", "AGENCY", "EXPERT"]}>
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">👑</div>
                <h3 className="text-sm font-bold text-slate-900">پروفایل VIP و آگهی‌های ویژه</h3>
                <p className="text-xs text-slate-500">مدیریت نشان ویژه، رزومه حرفه‌ای و ثبت آگهی‌های تاییدشده.</p>
                <button onClick={() => alert("ورود به بخش VIP")} className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 rounded-lg text-xs transition">
                  تنظیمات پروفایل VIP
                </button>
              </div>
            </FeatureGuard>

            {/* ابزار ۵: پنل عمومی برای همه کاربران (شامل کاربر عادی) */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm space-y-3">
              <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold">🏠</div>
              <h3 className="text-sm font-bold text-slate-900">املاک من و جستجوی عمومی</h3>
              <p className="text-xs text-slate-500">مدیریت املاک ذخیره شده، علاقه‌مندی‌ها و جستجوی پیشرفته ملکیسم.</p>
              <button onClick={() => alert("ورود به املاک من")} className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-2 rounded-lg text-xs transition">
                مشاهده علاقه‌مندی‌ها
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}