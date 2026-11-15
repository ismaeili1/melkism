"use client";

import { useState } from "react";
import Link from "next/link";
import ImagePickerInput from "@/components/admin/ImagePickerInput"; // 🌟 ایمپورت کامپوننت مخزن رسانه و آپلود

export default function AdminReportsPage() {
  const [dateRange, setDateRange] = useState("ALL");
  const [roleFilter, setRoleFilter] = useState("ALL");
  const [reportType, setReportType] = useState("FINANCIAL");

  // وضعیت‌های مربوط به مودال ثبت گزارش جدید
  const [showModal, setShowModal] = useState(false);
  const [formTitle, setFormTitle] = useState("");
  const [formType, setFormType] = useState("FINANCIAL");
  const [formAmount, setFormAmount] = useState("");
  const [formDetail, setFormDetail] = useState("");
  const [formAttachmentUrl, setFormAttachmentUrl] = useState("");

  // داده‌های گزارش‌ها بر اساس فیلترها
  const [reportData, setReportData] = useState({
    FINANCIAL: [
      { id: "TX-901", title: "تراکنش موفق انبوه‌سازان آلتون", amount: "۵,۰۰۰,۰۰۰ تومان", date: "۱۴۰۵/۰۷/۱۵", status: "تاییدشده", attachmentUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c" },
      { id: "TX-902", title: "حق اشتراک آژانس املاک مدرن", amount: "۱۲,۰۰۰,۰۰۰ تومان", date: "۱۴۰۵/۰۷/۱۶", status: "در انتظار بررسی", attachmentUrl: "" },
    ],
    USERS: [
      { id: "U-101", title: "ثبت‌نام کاربر جدید (گروه COMPANY)", date: "۱۴۰۵/۰۷/۱۶", detail: "فعال‌سازی حساب سازنده", status: "ثبت‌شده", attachmentUrl: "" },
      { id: "U-102", title: "تغییر سطح دسترسی کاربر به EXPERT", date: "۱۴۰۵/۰۷/۱۵", detail: "تایید مدارک کارشناسی", status: "ثبت‌شده", attachmentUrl: "" },
    ],
    CONTENT: [
      { id: "C-201", title: "انتشار مقاله تحلیل بازار مسکن پاییز", date: "۱۴۰۵/۰۷/۱۴", detail: "بخش اخبار و گزارش‌ها", status: "ثبت‌شده", attachmentUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" },
      { id: "C-202", title: "به‌روزرسانی کتابخانه ضوابط شهرداری", date: "۱۴۰۵/۰۷/۱۲", detail: "اسناد و رفرنس‌های فنی", status: "ثبت‌شده", attachmentUrl: "" },
    ]
  });

  const handleCreateReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle) return;

    const newReport = {
      id: `REP-${Date.now().toString().slice(-4)}`,
      title: formTitle,
      amount: formAmount ? `${formAmount} تومان` : undefined,
      detail: formDetail,
      date: "امروز",
      status: "ثبت‌شده",
      attachmentUrl: formAttachmentUrl
    };

    setReportData(prev => ({
      ...prev,
      [formType]: [newReport, ...prev[formType as keyof typeof prev]]
    }));

    setReportType(formType);
    setShowModal(false);
    setFormTitle("");
    setFormAmount("");
    setFormDetail("");
    setFormAttachmentUrl("");
    alert("گزارش جدید با موفقیت ثبت شد.");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 dir-rtl font-sans space-y-6">
      
      {/* هدر صفحه */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full inline-block mb-1">
            سیستم گزارش‌گیری و هوش تجاری کلان
          </span>
          <h1 className="text-2xl font-black text-slate-900">گزارش‌های جامع آماری و تحلیل پیشرفته</h1>
          <p className="text-xs text-slate-500 mt-1">فیلتر، دسته‌بندی، پیوست تصاویر/نمودارها و استخراج گزارش‌های مالی، کاربران و محتوای پلتفرم.</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => setShowModal(true)} 
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm transition"
          >
            + ثبت گزارش جدید
          </button>
          <Link href="/fa/admin/dashboard" className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition">
            ← بازگشت به داشبورد فرماندهی
          </Link>
        </div>
      </div>

      {/* پنل فیلترها و دسته‌بندی */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900">🔍 ابزار فیلترینگ پیشرفته گزارش‌ها</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          
          <div className="space-y-1">
            <label className="font-bold text-slate-700 block">نوع گزارش:</label>
            <select 
              value={reportType} 
              onChange={e => setReportType(e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-3 py-2.5 bg-white outline-none focus:border-indigo-600"
            >
              <option value="FINANCIAL">گزارش مالی و تراکنش‌ها</option>
              <option value="USERS">گزارش فعالیت کاربران</option>
              <option value="CONTENT">گزارش محتوا و مقالات</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-700 block">بازه زمانی:</label>
            <select 
              value={dateRange} 
              onChange={e => setDateRange(e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-3 py-2.5 bg-white outline-none focus:border-indigo-600"
            >
              <option value="ALL">همه زمان‌ها</option>
              <option value="TODAY">امروز</option>
              <option value="WEEK">هفته گذشته</option>
              <option value="MONTH">ماه جاری (پاییز ۱۴۰۵)</option>
            </select>
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-700 block">نقش یا دسته‌بندی هدف:</label>
            <select 
              value={roleFilter} 
              onChange={e => setRoleFilter(e.target.value)}
              className="w-full border border-slate-200 rounded-xl px-3 py-2.5 bg-white outline-none focus:border-indigo-600"
            >
              <option value="ALL">تمامی سطوح و بخش‌ها</option>
              <option value="COMPANY">شرکت‌های ساختمانی (COMPANY)</option>
              <option value="AGENCY">آژانس‌های املاک (AGENCY)</option>
              <option value="EXPERT">کارشناسان (EXPERT)</option>
            </select>
          </div>

        </div>

        <div className="pt-2 flex justify-end">
          <button onClick={() => alert("فیلترها اعمال شد و گزارش به‌روز گردید")} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition shadow-sm">
            اعمال فیلتر و دریافت گزارش زنده
          </button>
        </div>
      </div>

      {/* نتایج گزارش آماری */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-bold text-slate-900">
            📊 نتایج گزارش تفکیک‌شده: <span className="text-indigo-600">{reportType}</span>
          </h3>
          <button onClick={() => alert("خروجی گزارش با موفقیت دانلود شد")} className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-3 py-1.5 rounded-xl text-xs transition">
            📥 دانلود خروجی (Excel / PDF)
          </button>
        </div>

        <div className="divide-y divide-slate-100 text-xs">
          {reportData[reportType as keyof typeof reportData]?.map((item: any, idx: number) => (
            <div key={item.id || idx} className="py-3.5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {item.attachmentUrl && (
                  <img src={item.attachmentUrl} alt="پیوست" className="w-10 h-10 rounded-lg object-cover border border-slate-200 shrink-0" />
                )}
                <div className="space-y-1">
                  <span className="font-bold text-slate-900 block">{item.title}</span>
                  <span className="text-slate-400 text-[10px]">
                    {item.amount && `مبلغ: ${item.amount} | `}
                    {item.detail && `جزئیات: ${item.detail} | `}
                    تاریخ ثبت: {item.date}
                  </span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-lg font-bold text-[10px] bg-indigo-50 text-indigo-600 whitespace-nowrap">
                {item.status || "ثبت‌شده"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* مودال ثبت گزارش جدید همراه با کامپوننت مخزن رسانه و آپلود */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg space-y-4 shadow-xl border border-slate-200">
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="font-bold text-sm text-slate-900">➕ ثبت گزارش سفارشی جدید</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600 font-bold">✕</button>
            </div>

            <form onSubmit={handleCreateReport} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold mb-1">عنوان گزارش:</label>
                <input type="text" value={formTitle} onChange={e => setFormTitle(e.target.value)} className="w-full border rounded-xl px-3 py-2 outline-none" required />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-bold mb-1">نوع گزارش:</label>
                  <select value={formType} onChange={e => setFormType(e.target.value)} className="w-full border rounded-xl px-3 py-2 bg-white outline-none">
                    <option value="FINANCIAL">مالی و تراکنش‌ها</option>
                    <option value="USERS">فعالیت کاربران</option>
                    <option value="CONTENT">محتوا و مقالات</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold mb-1">مبلغ (در صورت مالی):</label>
                  <input type="text" value={formAmount} onChange={e => setFormAmount(e.target.value)} placeholder="مثال: ۵,۰۰۰,۰۰۰" className="w-full border rounded-xl px-3 py-2 outline-none" />
                </div>
              </div>

              <div>
                <label className="block font-bold mb-1">توضیحات و جزئیات:</label>
                <textarea value={formDetail} onChange={e => setFormDetail(e.target.value)} rows={3} className="w-full border rounded-xl p-3 outline-none" placeholder="شرح خلاصه گزارش..."></textarea>
              </div>

              <div>
                {/* 🌟 جایگزینی فیلد متنی ساده با کامپوننت پیشرفته انتخاب از مخزن رسانه و آپلود تصویر/نمودار */}
                <ImagePickerInput 
                  label="تصویر، نمودار یا پیوست رسانه‌ای" 
                  name="attachmentUrl" 
                  defaultValue={formAttachmentUrl}
                  category="general"
                  onChange={(url) => setFormAttachmentUrl(url)}
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button type="button" onClick={() => setShowModal(false)} className="px-4 py-2 bg-slate-100 rounded-xl font-bold">انصراف</button>
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-bold shadow-sm">ثبت گزارش</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}