'use client';

import { useTranslations } from 'next-intl';
import { useState, useRef, useEffect } from "react";
import { registerMediaAsset, getMediaAssets, deleteMediaAsset } from "@/actions/media";

const CATEGORIES = [
  { id: "news", name: "اخبار و مقالات" },
  { id: "properties", name: "املاک و آگهی‌ها" },
  { id: "experts", name: "متخصصین ملکیست" },
  { id: "library", name: "کتابخانه تخصصی" },
  { id: "market", name: "بازار و کالاها" },
  { id: "general", name: "عمومی و بنرها" },
];

// نسبت‌های ابعاد استاندارد پلتفرم
const ASPECT_RATIOS = [
  { label: "آزاد (Free)", ratio: 0 },
  { label: "۱۶:۹ (اسلاید و اخبار)", ratio: 16 / 9 },
  { label: "۴:۳ (املاک و پروژه)", ratio: 4 / 3 },
  { label: "۱:۱ (مربع - آواتار و کالا)", ratio: 1 },
];

export default function MediaLibraryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [assets, setAssets] = useState<any[]>([]);
  const [tab, setTab] = useState<"file" | "url">("file");
  
  // وضعیت‌های مربوط به پردازش تصویر
  const [rawImageSrc, setRawImageSrc] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("general");
  const [altText, setAltText] = useState("");
  const [targetWidth, setTargetWidth] = useState(1200);
  const [targetHeight, setTargetHeight] = useState(800);
  const [quality, setQuality] = useState(0.8); // کاهش حجم
  const [selectedRatio, setSelectedRatio] = useState(16 / 9);

  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // بارگذاری تصاویر مخزن
  useEffect(() => {
    loadAssets();
  }, [activeCategory]);

  async function loadAssets() {
    const data = await getMediaAssets(activeCategory);
    setAssets(data);
  }

  // انتخاب فایل یا وارد کردن URL
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setRawImageSrc(reader.result as string);
        setTitle(file.name.split('.')[0]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlSubmit = (url: string) => {
    if (url) {
      setRawImageSrc(url);
      setTitle("تصویر لینک خارجی");
    }
  };

  // اعمال تغییرات ابعاد، نسبت تصویر و کاهش حجم روی بوم Canvas
  const processAndSaveImage = async () => {
    if (!rawImageSrc) return;
    setLoading(true);

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = rawImageSrc;

    img.onload = async () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      let finalW = targetWidth;
      let finalH = targetHeight;

      if (selectedRatio > 0) {
        finalH = Math.round(finalW / selectedRatio);
      }

      canvas.width = finalW;
      canvas.height = finalH;

      if (ctx) {
        // برش و مقیاس‌پذیری هوشمند
        ctx.drawImage(img, 0, 0, finalW, finalH);
      }

      // خروجی تصویر فشرده‌شده به صورت DataURL
      const processedDataUrl = canvas.toDataURL("image/jpeg", quality);

      // ثبت در مخزن دیتابیس
      const res = await registerMediaAsset({
        title: title || "تصویر بدون عنوان",
        url: processedDataUrl, // یا آدرس مستقیم در صورت ذخیره در هاست
        category: selectedCategory,
        altText,
        width: finalW,
        height: finalH,
        isUrlSource: tab === "url",
      });

      setLoading(false);
      if (res.success) {
        setRawImageSrc(null);
        setTitle("");
        loadAssets();
      }
    };
  };

  const copyToClipboard = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 dir-rtl font-sans space-y-6 max-w-7xl mx-auto">
      
      {/* هدر */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full inline-block mb-1">
            مخزن متمرکز و گالری رسانه ملکیسم (Media Library)
          </span>
          <h1 className="text-2xl font-black text-slate-900">آلبوم تصاویـر، ویرایش آنلاین و تایید نهایی</h1>
          <p className="text-xs text-slate-500 mt-1">آپلود یا ثبت URL، اصلاح ابعاد و پیکسل، کاهش حجم و آماده‌سازی لینک جهت استفاده در فایل‌های اکسل.</p>
        </div>
      </div>

      {/* بخش ورودی: فایل یا URL */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
        <div className="flex gap-4 border-b border-slate-100 pb-4">
          <button 
            onClick={() => { setTab("file"); setRawImageSrc(null); }}
            className={`text-xs font-bold px-4 py-2 rounded-xl transition ${tab === "file" ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-600"}`}
          >
            📁 آپلود مستقیم فایل
          </button>
          <button 
            onClick={() => { setTab("url"); setRawImageSrc(null); }}
            className={`text-xs font-bold px-4 py-2 rounded-xl transition ${tab === "url" ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-600"}`}
          >
            🔗 جایگذاری آدرس تصویر (URL)
          </button>
        </div>

        {tab === "file" ? (
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">انتخاب تصویر از کامپیوتر</label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={handleFileChange} 
              className="w-full border border-slate-300 border-dashed rounded-xl p-6 text-xs bg-slate-50 cursor-pointer"
            />
          </div>
        ) : (
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-2">ورود لینک مستقیم تصویر (URL)</label>
            <input 
              type="url" 
              placeholder="https://example.com/image.jpg"
              onBlur={(e) => handleUrlSubmit(e.target.value)}
              className="w-full border border-slate-300 rounded-xl p-3 text-xs bg-slate-50 outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        )}

        {/* بخش استودیو و ویرایشگر پیشرفته تصویر */}
        {rawImageSrc && (
          <div className="border-t border-slate-200 pt-6 space-y-6">
            <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              ✂️ ابزار ویرایش، برش ابعاد و بهینه‌سازی حجم
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* پیش‌نمایش تصویر اصلی */}
              <div className="bg-slate-900 p-4 rounded-2xl flex items-center justify-center max-h-[350px] overflow-hidden">
                <img src={rawImageSrc} alt="Preview" className="max-h-full object-contain rounded-lg" />
              </div>

              {/* پنل تنظیمات ویرایش */}
              <div className="space-y-4 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">عنوان تصویر</label>
                  <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border rounded-lg p-2 bg-slate-50" />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">دسته‌بندی مخزن</label>
                    <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full border rounded-lg p-2 bg-slate-50">
                      {CATEGORIES.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">نسبت ابعاد (Aspect Ratio)</label>
                    <select onChange={(e) => setSelectedRatio(parseFloat(e.target.value))} className="w-full border rounded-lg p-2 bg-slate-50">
                      {ASPECT_RATIOS.map(r => <option key={r.label} value={r.ratio}>{r.label}</option>)}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">عرض استاندارد (پیکسل)</label>
                    <input type="number" value={targetWidth} onChange={(e) => setTargetWidth(Number(e.target.value))} className="w-full border rounded-lg p-2 bg-slate-50" />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">ارتفاع استاندارد (پیکسل)</label>
                    <input type="number" value={targetHeight} onChange={(e) => setTargetHeight(Number(e.target.value))} className="w-full border rounded-lg p-2 bg-slate-50" />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">فشرده‌سازی و فاکتور کیفیت ({Math.round(quality * 100)}%)</label>
                  <input type="range" min="0.3" max="1" step="0.05" value={quality} onChange={(e) => setQuality(parseFloat(e.target.value))} className="w-full accent-indigo-600" />
                </div>

                <button 
                  onClick={processAndSaveImage}
                  disabled={loading}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-xl transition shadow-sm"
                >
                  {loading ? "در حال اعمال تغییرات..." : "✓ اعمال ویرایش، تایید و افزودن به مخزن"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* بخش آلبوم و گالری تصاویر تاییدشده */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h2 className="text-sm font-bold text-slate-900">🖼️ آلبوم و مخزن تصاویر تاییدشده</h2>
          
          {/* فیلتر دسته‌بندی */}
          <div className="flex flex-wrap gap-2">
            <button onClick={() => setActiveCategory("all")} className={`text-[11px] px-3 py-1.5 rounded-lg border ${activeCategory === "all" ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-600"}`}>
              همه
            </button>
            {CATEGORIES.map(c => (
              <button key={c.id} onClick={() => setActiveCategory(c.id)} className={`text-[11px] px-3 py-1.5 rounded-lg border ${activeCategory === c.id ? "bg-indigo-600 text-white" : "bg-slate-50 text-slate-600"}`}>
                {c.name}
              </button>
            ))}
          </div>
        </div>

        {/* شبکه نمایش تصاویر (Grid) */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 pt-4">
          {assets.map((item) => (
            <div key={item.id} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 group hover:shadow-md transition">
              <div className="h-28 bg-slate-200 overflow-hidden relative">
                <img src={item.url} alt={item.title} className="w-full h-full object-cover" />
                <span className="absolute top-1 right-1 bg-slate-900/80 text-white text-[9px] px-1.5 py-0.5 rounded">
                  {item.width}x{item.height}
                </span>
              </div>
              <div className="p-2 space-y-2">
                <span className="font-bold text-[11px] block text-slate-800 truncate">{item.title}</span>
                <div className="flex gap-1">
                  <button 
                    onClick={() => copyToClipboard(item.url, item.id)}
                    className="flex-1 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-[10px] font-bold py-1 rounded transition text-center"
                  >
                    {copiedId === item.id ? "کپی شد! ✓" : "📋 کپی لینک برای اکسل"}
                  </button>
                  <button 
                    onClick={async () => { await deleteMediaAsset(item.id); loadAssets(); }}
                    className="bg-rose-50 hover:bg-rose-100 text-rose-600 text-[10px] px-2 py-1 rounded"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}