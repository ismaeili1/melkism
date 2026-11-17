'use client';

import { useTranslations } from 'next-intl';
import { useState } from "react";
import { useParams } from "next/navigation";
import { handleExcelBulkImport } from "@/actions/bulk-import";
import { generateExcelTemplate } from "@/actions/export-templates";

const TEMPLATE_CARTS = [
  { id: "news", title: "اخبار و مقالات", desc: "تیتر، خلاصه، متن و دسته‌بندی" },
  { id: "market", title: "هوش بازار و تحلیل‌ها", desc: "شاخص‌های قیمتی، منطقه و گزارش" },
  { id: "rules", title: "قوانین و مقررات", desc: "شماره ماده، عنوان و متن حقوقی" },
  { id: "properties", title: "بانک املاک و آگهی‌ها", desc: "قیمت، متراژ، استان و آدرس" },
  { id: "library", title: "کتابخانه تخصصی", desc: "نویسنده، لینک دانلود و خلاصه سند" },
  { id: "experts", title: "متخصصین ملکیست", desc: "نام، تخصص، پروانه و شماره تماس" },
  { id: "market_items", title: "بازار ملکیست (کالا/خدمات)", desc: "قیمت، تامین‌کننده، شهر و شرح" },
];

export default function BulkImportPage() {
  const t = useTranslations('AdminPanel');
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const dir = ["fa", "ar"].includes(locale) ? "rtl" : "ltr";

  const [loading, setLoading] = useState(false);
  const [downloading, setDownloading] = useState<string | null>(null);
  const [resultMessage, setResultMessage] = useState<{ success: boolean; text: string } | null>(null);

  async function handleDownloadTemplate(type: string) {
    setDownloading(type);
    const res = await generateExcelTemplate(type);
    setDownloading(null);

    if (res.success && res.base64) {
      const link = document.createElement("a");
      link.href = `data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,${res.base64}`;
      link.download = res.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setResultMessage(null);

    const formData = new FormData(event.currentTarget);
    const res = await handleExcelBulkImport(formData);

    setLoading(false);
    setResultMessage({
      success: res.success,
      text: res.success ? (res.message || "اطلاعات با موفقیت وارد شدند.") : (res.error || "خطایی رخ داد.")
    });
  }

  return (
    <div className={`min-h-screen bg-slate-50 text-slate-800 p-6 ${dir === "rtl" ? "dir-rtl" : "dir-ltr"} font-sans space-y-6 max-w-6xl mx-auto`} dir={dir}>
      
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full inline-block mb-1">
          سیستم مدیریت هوشمند داده‌ها (Excel Bulk Engine)
        </span>
        <h1 className="text-2xl font-black text-slate-900">مرکز ۷گانه پانچ انبوه اطلاعات و دانلود فایل‌های خام</h1>
      </div>

      {/* دانلود اکسل خام ۷ بخش */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900">📥 دانلود فایل‌های خام اکسل (Templates)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {TEMPLATE_CARTS.map((item) => (
            <div key={item.id} className="border border-slate-100 bg-slate-50/50 p-4 rounded-xl flex flex-col justify-between gap-3">
              <div>
                <span className="font-bold text-xs block text-slate-800">{item.title}</span>
                <span className="text-[10px] text-slate-400">{item.desc}</span>
              </div>
              <button
                onClick={() => handleDownloadTemplate(item.id)}
                disabled={downloading === item.id}
                className="bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-[11px] font-bold py-2 px-3 rounded-lg transition text-center shadow-xs"
              >
                {downloading === item.id ? "در حال تولید..." : "دانلود اکسل خام"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* فرم آپلود */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h2 className="text-sm font-bold text-slate-900 mb-4">🚀 آپلود فایل پرشده و انتشار آنی</h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">انتخاب بخش مقصد</label>
            <select name="contentType" required className="w-full border border-slate-300 rounded-xl p-3 text-xs bg-slate-50 outline-none">
              <option value="news">اخبار و مقالات</option>
              <option value="market">گزارش‌های هوش بازار</option>
              <option value="rules">قوانین و مقررات ملکی</option>
              <option value="properties">بانک املاک و آگهی‌ها</option>
              <option value="library">کتابخانه تخصصی</option>
              <option value="experts">متخصصین ملکیست</option>
              <option value="market_items">بازار ملکیست (کالا و خدمات)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">فایل اکسل (.xlsx)</label>
            <input type="file" name="excelFile" accept=".xlsx, .xls" required className="w-full border border-slate-300 border-dashed rounded-xl p-6 text-xs bg-slate-50 cursor-pointer" />
          </div>

          {resultMessage && (
            <div className={`p-4 rounded-xl text-xs font-bold ${resultMessage.success ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}>
              {resultMessage.text}
            </div>
          )}

          <button type="submit" disabled={loading} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 rounded-xl text-xs transition shadow-md">
            {loading ? "در حال تزریق داده‌ها..." : "تأیید و درون‌ریزی انبوه اطلاعات"}
          </button>
        </form>
      </div>

    </div>
  );
}