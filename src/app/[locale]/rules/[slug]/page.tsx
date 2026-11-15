'use client';

import Link from "next/link";

interface RuleDetailPageProps {
  params: { slug: string; locale: string };
}

export default function RuleDetailPage({ params }: RuleDetailPageProps) {
  const slug = params.slug;
  const locale = params.locale || "fa";

  // بانک اطلاعات نمونه قوانین و ضوابط ملکی و مهندسی
  const rulesDatabase: Record<string, any> = {
    "mandatory-formal-registration-law": {
      title: "قانون الزام به ثبت رسمی معاملات اموال غیرمنقول (ماده ۱ تا ۵)",
      category: "قوانین ثبتی و ملکی",
      publisher: "مجلس شورای اسلامی / شورای نگهبان",
      date: "۱۴۰۳/۰۶/۱۵",
      status: "🟢 لازم‌الاجرا و فعال",
      imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
      summary: "این قانون دفاتر اسناد رسمی را مکلف به ثبت کدهای رهگیری یکپارچه نموده و معاملات عادی غیررسمی خارج از سامانه را فاقد اعتبار قانونی در مراجع قضایی می‌داند.",
      articles: [
        {
          number: "ماده ۱",
          text: "از تاریخ لازم‌الاجرا شدن این قانون، هرگونه معامله نسبت به اموال غیرمنقول (زمین، خانه، آپارتمان) باید به صورت رسمی در دفاتر اسناد رسمی ثبت شود. اسناد عادی تنظیم‌شده پس از این تاریخ در مراجع رسمی و قضایی پذیرفته نخواهند شد."
        },
        {
          number: "ماده ۲",
          text: "سازمان ثبت اسناد و املاک کشور مکلف است ظرف مدت مشخص، سامانه الکترونیکی صدور سند و ثبت قراردادهای پیش‌فروش و انتقال را به صورت برخط در اختیار مشاورین املاک مجاز قرار دهد."
        },
        {
          number: "ماده ۳",
          text: "مشاورین املاک موظفند پیش از انعقاد هرگونه قرارداد، استعلامات ثبتی ملک را از طریق سامانه جامع اخذ نموده و پیش‌نویس قرارداد را جهت ثبت نهایی به دفاتر اسناد رسمی ارسال نمایند."
        }
      ]
    }
  };

  const ruleItem = rulesDatabase[slug] || {
    title: `مجموعه ضوابط و قوانین: ${slug}`,
    category: "حقوقی و ضوابط ساخت‌وساز",
    publisher: "مرکز اسناد و قوانین ملکیسم",
    date: "به‌روزرسانی جدید",
    status: "🟢 فعال در سامانه",
    imageUrl: "https://images.unsplash.com/photo-1450133064473-71024230f91b",
    summary: "متن کامل و مواد قانونی استخراج‌شده از مخزن داده‌های حقوقی پلتفرم ملکیسم.",
    articles: [
      {
        number: "ماده عمومی",
        text: "مشروح مواد قانونی، تبصره‌ها و آیین‌نامه‌های اجرایی مربوط به این بخش به صورت برخط از پایگاه قوانین فراخوانی شده است. متن کامل جزئیات و پیوست‌های حقوقی به زودی بارگذاری خواهد شد."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 sm:p-12 dir-rtl font-sans space-y-8">
      <div className="max-w-3xl mx-auto space-y-6">
        
        <div>
          <Link href={`/${locale}/admin/rules`} className="text-indigo-600 text-xs font-bold hover:underline bg-indigo-50 px-3.5 py-2 rounded-xl inline-flex items-center gap-1 border border-indigo-100">
            ← بازگشت به مدیریت قوانین و ضوابط
          </Link>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-indigo-600 bg-indigo-100/60 px-3 py-1 rounded-full inline-block">
              {ruleItem.category}
            </span>
            <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block">
              {ruleItem.status}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
            {ruleItem.title}
          </h1>
          <div className="text-xs text-slate-400 flex flex-wrap items-center gap-3 pt-1">
            <span>🏛️ مرجع صادرکننده: <strong className="text-slate-700">{ruleItem.publisher}</strong></span>
            <span>•</span>
            <span>📅 تاریخ تصویب/انتشار: <strong className="text-slate-700 font-mono">{ruleItem.date}</strong></span>
          </div>
        </div>

        {ruleItem.imageUrl && (
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 max-h-[350px]">
            <img src={ruleItem.imageUrl} alt={ruleItem.title} className="w-full h-full object-cover" />
          </div>
        )}

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-slate-700">
          <div className="bg-indigo-50/50 border border-indigo-100 p-4 rounded-xl font-medium text-slate-900">
            <strong>خلاصه تنفیذی:</strong> {ruleItem.summary}
          </div>

          <div className="space-y-4 pt-2">
            <h3 className="font-bold text-slate-900 text-base border-b border-slate-100 pb-2">متن مواد و آیین‌نامه اجرایی:</h3>
            
            {ruleItem.articles.map((art: any, index: number) => (
              <div key={index} className="bg-slate-50 border border-slate-200/80 p-5 rounded-xl space-y-2">
                <h4 className="font-black text-indigo-900 text-sm">{art.number}</h4>
                <p className="text-slate-700 leading-relaxed">{art.text}</p>
              </div>
            ))}
          </div>

          <div className="pt-4 flex items-center gap-3 border-t border-slate-100">
            <button onClick={() => alert("فایل PDF متن کامل قانون دانلود شد.")} className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-5 py-3 rounded-xl shadow-sm transition">
              📥 دانلود متن کامل قانون (PDF)
            </button>
            <button onClick={() => alert("لینک اشتراک‌گذاری کپی شد.")} className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-4 py-3 rounded-xl transition">
              🔗 اشتراک‌گذاری
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}