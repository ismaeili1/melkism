import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data-store.json");

// لیست سوژه‌ها و موضوعات داغ بازار مسکن برای تولید خودکار
const autoTopics = [
  "تحلیل نوسانات قیمت مسکن و اجاره‌بها در کلان‌شهرها",
  "بررسی تاثیر سیاست‌های جدید تسهیلات بانکی بر بازار املاک",
  "پیش‌بینی روند سرمایه‌گذاری در پروژه‌های ملکی تجاری و مسکونی",
  "بررسی شاخص تورم ملکی و تاثیر آن بر قدرت خرید متقاضیان",
  "ارزیابی بازدهی سرمایه‌گذاری در ساخت‌وساز در مقایسه با بازارهای موازی"
];

export async function GET(req: Request) {
  try {
    // انتخاب تصادفی یکی از موضوعات بازار
    const randomTopic = autoTopics[Math.floor(Math.random() * autoTopics.length)];

    const newArticle = {
      id: "news_auto_" + Date.now(),
      slug: "auto-news-" + Date.now(),
      title: `گزارش خودکار ملکیسم: ${randomTopic}`,
      lead: "این گزارش به صورت خودکار توسط موتور هوش مصنوعی ملکیسم بر اساس آخرین پایش داده‌های بازار مسکن تنظیم شده است.",
      content: `تحلیل‌های آماری نشان می‌دهد که بازار املاک در وضعیت فعلی تحت تاثیر چندین متغیر کلیدی قرار دارد. تغییرات در میزان تقاضای واقعی، نرخ تورم عمومی و میزان عرضه نوسازها از عوامل تعیین‌کننده قیمت‌ها هستند.\n\nکارشناسان معتقدند برای متقاضیان مصرفی، رصد دقیق تغییرات منطقه‌ای و استفاده از فرصت‌های معاملاتی می‌تواند ریسک خرید را به حداقل برساند. ملکیسم به‌طور مداوم این داده‌ها را پایش کرده و گزارش‌های بعدی را منتشر خواهد کرد.`,
      category: "market-analysis",
      region: "Global",
      targetAudience: "Investors & Buyers",
      sourceName: "ربات هوشمند ملکیسم (Auto-AI)",
      imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      readTimeMinutes: 3,
      isTrending: true,
      isAiGenerated: true,
      tags: ["تولید_خودکار", "بازار_مسکن", "تحلیل_هوشمند"],
      createdAt: new Date().toISOString()
    };

    let articles = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf8");
      try {
        const parsed = JSON.parse(fileData);
        articles = Array.isArray(parsed) ? parsed : (parsed.articles || parsed.data || []);
      } catch (e) {
        articles = [];
      }
    }

    articles.unshift(newArticle);
    fs.writeFileSync(filePath, JSON.stringify(articles, null, 2), "utf8");

    return NextResponse.json({
      success: true,
      message: "خبر خودکار با موفقیت توسط سیستم ساخته شد.",
      article: newArticle
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}