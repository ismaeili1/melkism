import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data-store.json");

export async function GET() {
  try {
    if (!fs.existsSync(filePath)) {
      return NextResponse.json([]);
    }
    const data = fs.readFileSync(filePath, "utf8");
    return NextResponse.json(JSON.parse(data));
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const topic = body.topic || "روند صعودی قیمت مسکن و تحلیل بازار املاک";

    const newArticle = {
      id: "news_" + Date.now(),
      slug: "news-" + Date.now(),
      title: `تحلیل تخصصی: ${topic}`,
      lead: "گزارش جامع از آخرین تحولات، نوسانات قیمت و پیش‌بینی آینده بازار مسکن با رویکرد هوش مصنوعی ملکیسم.",
      content: `بازار املاک در ماه‌های اخیر شاهد تغییرات چشمگیری بوده است. بررسی داده‌های معاملاتی نشان می‌دهد که تقاضای مصرفی و سرمایه‌گذاری در مناطق مختلف روندی متغیر به خود گرفته است. کارشناسان بر این باورند که با کنترل عوامل تورمی و ثبات نسبی در بازارهای موازی، بازار مسکن به سمت تعادل حرکت می‌کند.`,
      category: "market-trends",
      region: "Global",
      targetAudience: "Investors",
      sourceName: "Melkism AI Newsroom",
      imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      readTimeMinutes: 4,
      isTrending: true,
      isAiGenerated: true,
      tags: ["مسکن", "بازار_املاک", "سرمایه_گذاری"],
      createdAt: new Date().toISOString()
    };

    let articles = [];
    if (fs.existsSync(filePath)) {
      const fileData = fs.readFileSync(filePath, "utf8");
      try {
        articles = JSON.parse(fileData);
      } catch (e) {
        articles = [];
      }
    }

    articles.unshift(newArticle);
    fs.writeFileSync(filePath, JSON.stringify(articles, null, 2), "utf8");

    return NextResponse.json({ success: true, article: newArticle });
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}