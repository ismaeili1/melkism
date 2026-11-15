'use client';

import Link from "next/link";

interface NewsDetailPageProps {
  params: { slug: string; locale: string };
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const slug = params.slug;
  const locale = params.locale || "fa";

  const newsDatabase: Record<string, any> = {
    "market-analysis-fall-1405": {
      title: "تحلیل روند قیمت مسکن در مناطق ۲۲ گانه تهران - پاییز ۱۴۰۵",
      category: "تحلیل بازار",
      author: "دکتر مرتضی اسماعیلی",
      date: "۱۴۰۵/۰۷/۱۶",
      imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
      content: "بررسی آمارهای رسمی معاملات مسکن نشان‌دهنده ورود بازار به فاز تعادل نسبی است..."
    }
  };

  const article = newsDatabase[slug] || {
    title: `خبر نمونه با شناسه: ${slug}`,
    category: "اخبار و اطلاعیه‌ها",
    author: "تیم تحریریه ملکیسم",
    date: "امروز",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    content: "این خبر به صورت خودکار از مخزن محتوای ملکیسم فراخوانی شده است."
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 sm:p-12 dir-rtl font-sans space-y-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div>
          <Link href={`/${locale}/admin/news`} className="text-indigo-600 text-xs font-bold hover:underline bg-indigo-50 px-3.5 py-2 rounded-xl inline-flex items-center gap-1 border border-indigo-100">
            ← بازگشت به مدیریت اخبار
          </Link>
        </div>
        <div className="space-y-3">
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-100/60 px-3 py-1 rounded-full inline-block">
            {article.category}
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
            {article.title}
          </h1>
        </div>
        {article.imageUrl && (
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 max-h-[400px]">
            <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
          </div>
        )}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-4 text-sm leading-relaxed text-slate-700">
          <p>{article.content}</p>
        </div>
      </div>
    </div>
  );
}