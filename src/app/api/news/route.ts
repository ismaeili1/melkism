import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data-store.json");

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q")?.toLowerCase() || "";

    let articles = [];
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf8");
      const parsed = JSON.parse(data);
      articles = Array.isArray(parsed) ? parsed : (parsed.articles || parsed.data || []);
    }

    // اعمال جستجوی هوشمند در عنوان، چکیده، متن و تگ‌ها
    if (query) {
      articles = articles.filter((item: any) => {
        const titleMatch = item.title?.toLowerCase().includes(query);
        const leadMatch = item.lead?.toLowerCase().includes(query);
        const contentMatch = item.content?.toLowerCase().includes(query);
        const tagMatch = item.tags?.some((t: string) => t.toLowerCase().includes(query));
        
        return titleMatch || leadMatch || contentMatch || tagMatch;
      });
    }

    // مرتب‌سازی: اخبار ویژه در بالا، بقیه به ترتیب جدیدترین
    articles.sort((a: any, b: any) => {
      if (a.isTrending && !b.isTrending) return -1;
      if (!a.isTrending && b.isTrending) return 1;
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    return NextResponse.json({
      success: true,
      articles: articles,
      data: articles,
      items: articles
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, articles: [], error: error.message }, { status: 500 });
  }
}