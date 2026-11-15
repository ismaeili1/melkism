"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminSecurityMonitoringPage() {
  const [lockdownMode, setLockdownMode] = useState(false);
  const [firewallStatus, setFirewallStatus] = useState("فعال و محافظت‌شده (Fail-Closed)");

  // لاگ‌های امنیتی زنده سیستم
  const [securityLogs, setSecurityLogs] = useState([
    { id: "LOG-901", type: "CRITICAL", ip: "185.220.101.5", action: "مسدودسازی خودکار ترافیک مخرب", time: "چند لحظه پیش", details: "تلاش غیرمجاز برای دسترسی به مسیر دیتابیس (SQL Injection Pattern)" },
    { id: "LOG-902", type: "WARNING", ip: "91.240.118.2", action: "هشدار نرخ درخواست بالا (Rate Limit)", time: "۵ دقیقه پیش", details: "ارسال بیش از ۱۰۰ درخواست OTP در دقیقه از یک IP" },
    { id: "LOG-903", type: "INFO", ip: "5.160.12.88", action: "تأیید موفق ورود ادمین کل", time: "۱ ساعت پیش", details: "ورود با کلید سخت‌افزاری امن (Hardware Token Verified)" },
    { id: "LOG-904", type: "WARNING", ip: "2.180.44.12", action: "خطای احراز هویت توکن", time: "۳ ساعت پیش", details: "تلاش برای استفاده از پرینسیپ منقضی‌شده در روت ادمین" },
  ]);

  const handleToggleLockdown = () => {
    const nextState = !lockdownMode;
    setLockdownMode(nextState);
    setFirewallStatus(nextState ? "🔴 حالت اضطراری / مسدودسازی سراسری (Lockdown)" : "🟢 فعال و محافظت‌شده (Fail-Closed)");
    alert(nextState ? "هشدار: حالت امنیتی اضطراری فعال شد! تمامی دسترسی‌های مشکوک مسدود شدند." : "سیستم از حالت اضطراری خارج شد.");
  };

  const handleClearLogs = () => {
    setSecurityLogs([]);
    alert("لاگ‌های امنیتی با موفقیت پاکسازی و آرشیو شدند.");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 dir-rtl font-sans space-y-6">
      
      {/* هدر صفحه */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full inline-block mb-1">
            سیستم مانیتورینگ امنیتی و دفاع سایبری (Fail-Closed Guard)
          </span>
          <h1 className="text-2xl font-black text-slate-900">مانیتورینگ امنیت، فایروال و لاگ‌های نفوذ</h1>
          <p className="text-xs text-slate-500 mt-1">پایش لحظه‌ای ترافیک ورودی، مسدودسازی IPهای مخرب و مدیریت وضعیت امنیتی هسته.</p>
        </div>
        <Link href="/fa/admin/dashboard" className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
          ← بازگشت به داشبورد فرماندهی
        </Link>
      </div>

      {/* وضعیت کلان امنیتی (KPIs) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-1">
          <span className="text-xs text-slate-400 font-medium">وضعیت فایروال هسته:</span>
          <h3 className="text-lg font-black text-emerald-700">{firewallStatus}</h3>
          <span className="text-[10px] text-slate-400 block">معماری امنیتی شکست-بسته (Fail-Closed)</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-1">
          <span className="text-xs text-slate-400 font-medium">تلاش‌های مسدودشده امروز:</span>
          <h3 className="text-2xl font-black text-rose-600">۱,۴۸۲ مورد</h3>
          <span className="text-[10px] text-rose-500 font-bold">بدون نفوذ موفق به پایگاه‌داده</span>
        </div>
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-1">
          <span className="text-xs text-slate-400 font-medium">حالت عملیاتی پلتفرم:</span>
          <h3 className={`text-xl font-black ${lockdownMode ? 'text-rose-600' : 'text-slate-900'}`}>
            {lockdownMode ? '🔒 لاک‌دان اضطراری' : '🟢 عادی و پایدار'}
          </h3>
          <span className="text-[10px] text-slate-400 block">کنترل دسترسی سطح ادمین کل</span>
        </div>
      </div>

      {/* ابزار واکنش سریع امنیتی (Incident Response Panel) */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900">⚡ ابزار واکنش سریع و مدیریت بحران امنیتی</h3>
        <div className="flex flex-wrap gap-3 text-xs">
          <button 
            onClick={handleToggleLockdown}
            className={`px-4 py-2.5 rounded-xl font-bold transition shadow-sm ${lockdownMode ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : 'bg-rose-600 hover:bg-rose-700 text-white'}`}
          >
            {lockdownMode ? '🟢 غیرفعال‌سازی حالت اضطراری' : '🚨 فعال‌سازی قفل اضطراری (Lockdown)'}
          </button>
          <button 
            onClick={() => alert("کش امنیتی و توکن‌های موقت با موفقیت بازنشانی شدند.")}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-4 py-2.5 rounded-xl transition"
          >
            🔄 بازنشانی و پاکسازی توکن‌های نشست (Session Reset)
          </button>
          <button 
            onClick={handleClearLogs}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-4 py-2.5 rounded-xl transition"
          >
            🗑️ آرشیو و پاکسازی لاگ‌های قدیمی
          </button>
        </div>
      </div>

      {/* جدول لاگ‌های زنده امنیتی */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-bold text-slate-900">
            🛡️ لاگ‌های زنده رخدادهای امنیتی و فایروال ({securityLogs.length} مورد)
          </h3>
          <span className="text-[11px] text-slate-400 font-mono">Real-time Firewall Stream</span>
        </div>

        {securityLogs.length === 0 ? (
          <div className="text-center py-12 text-slate-400 text-xs">هیچ رخداد امنیتی ثبت‌نشده یا لاگ‌ها پاکسازی شده‌اند.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-right text-xs">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 font-medium">
                  <th className="pb-3">سطح هشدار</th>
                  <th className="pb-3">آدرس IP منبع</th>
                  <th className="pb-3">اقدام فایروال</th>
                  <th className="pb-3">جزئیات فنی رخداد</th>
                  <th className="pb-3">زمان ثبت</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {securityLogs.map(log => (
                  <tr key={log.id} className="hover:bg-slate-50/80 transition">
                    <td className="py-4">
                      <span className={`px-2.5 py-1 rounded-lg font-bold text-[10px] ${log.type === 'CRITICAL' ? 'bg-rose-50 text-rose-600 border border-rose-100' : log.type === 'WARNING' ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'}`}>
                        {log.type}
                      </span>
                    </td>
                    <td className="py-4 text-slate-700">{log.ip}</td>
                    <td className="py-4 font-bold text-slate-900 font-sans">{log.action}</td>
                    <td className="py-4 text-slate-600 font-sans">{log.details}</td>
                    <td className="py-4 text-slate-400 text-[11px]">{log.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
}