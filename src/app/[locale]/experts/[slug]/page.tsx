'use client';

import Link from "next/link";

interface ExpertProfilePageProps {
  params: { slug: string; locale: string };
}

export default function ExpertProfilePage({ params }: ExpertProfilePageProps) {
  const slug = params.slug;
  const locale = params.locale || "fa";

  // بانک اطلاعات نمونه کارشناسان و متخصصان ملکیسم
  const expertsDatabase: Record<string, any> = {
    "dr-morteza-ismaeili": {
      name: "دکتر مرتضی اسماعیلی",
      role: "معمار ارشد و مدیر پروژه / کارشناس خبره املاک و مستغلات",
      department: "فنی، مهندسی و هوش ساخت‌وساز",
      rating: "۴.۹ / ۵.۰ (امتیاز کاربران)",
      experience: "بیش از ۱۵ سال سابقه حرفه‌ای",
      location: "تهران، ایران",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      bio: "فارغ‌تحصیل دکتری تخصصی معماری، عضو نظام مهندسی و مدیر سابق مجموعه‌های معتبر مهندسی. تخصص در حوزه تحلیل کلان روندهای مسکن، طراحی پایدار و معماری هوشمند.",
      skills: ["مدیریت پروژه", "طراحی شهری", "تحلیل بازار مسکن", "ضوابط شهرداری و کمیسیون ماده ۵"]
    }
  };

  const expert = expertsDatabase[slug] || {
    name: `کارشناس تخصصی: ${slug}`,
    role: "متخصص و مشاور ارشد پلتفرم ملکیسم",
    department: "مرکز کارشناسان و ارزیابان",
    rating: "۴.۸ / ۵.۰",
    experience: "متخصص حوزه تخصصی ملکی",
    location: "ایران",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "این پروفایل به صورت خودکار از مخزن شبکه کارشناسان و متخصصان ملکیسم فراخوانی شده است. سوابق، پروژه‌ها و جزئیات مشاوره‌های تخصصی به زودی در این صفحه بارگذاری خواهد شد.",
    skills: ["مشاوره ملکی", "ارزیابی املاک", "تحلیل قراردادها"]
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 sm:p-12 dir-rtl font-sans space-y-8">
      <div className="max-w-3xl mx-auto space-y-6">
        
        <div>
          <Link href={`/${locale}/admin/experts`} className="text-indigo-600 text-xs font-bold hover:underline bg-indigo-50 px-3.5 py-2 rounded-xl inline-flex items-center gap-1 border border-indigo-100">
            ← بازگشت به مدیریت کارشناسان
          </Link>
        </div>

        {/* هدر پروفایل */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-indigo-100 shadow-md flex-shrink-0 bg-slate-100">
            <img src={expert.avatarUrl} alt={expert.name} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-3 text-center sm:text-right flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <span className="text-[11px] font-bold text-indigo-600 bg-indigo-100/60 px-3 py-1 rounded-full">
                {expert.department}
              </span>
              <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
                ⭐ {expert.rating}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
              {expert.name}
            </h1>
            <p className="text-sm font-medium text-slate-600">{expert.role}</p>
            <div className="text-xs text-slate-400 flex flex-wrap items-center justify-center sm:justify-start gap-4 pt-1">
              <span>📍 {expert.location}</span>
              <span>•</span>
              <span>⏳ {expert.experience}</span>
            </div>
          </div>
        </div>

        {/* جزئیات و بیوگرافی */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6 text-sm leading-relaxed text-slate-700">
          <div className="space-y-2">
            <h3 className="font-bold text-slate-900 text-base">درباره کارشناس:</h3>
            <p className="leading-relaxed">{expert.bio}</p>
          </div>

          <div className="space-y-3 pt-2">
            <h3 className="font-bold text-slate-900 text-base">حوزه‌های تخصصی و مهارت‌ها:</h3>
            <div className="flex flex-wrap gap-2">
              {expert.skills.map((skill: string, index: number) => (
                <span key={index} className="bg-slate-100 text-slate-700 text-xs font-bold px-3.5 py-1.5 rounded-xl border border-slate-200">
                  #{skill}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3">
            <button onClick={() => alert("درخواست مشاوره تخصصی ثبت شد. کارشناس به زودی با شما تماس خواهد گرفت.")} className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-6 py-3.5 rounded-xl shadow-sm transition">
              📅 رزرو وقت مشاوره / ارتباط مستقیم
            </button>
            <button onClick={() => alert("لینک پروفایل کارشناس کپی شد.")} className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-4 py-3.5 rounded-xl transition">
              🔗 اشتراک‌گذاری پروفایل
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}