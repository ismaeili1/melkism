import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import OpenAI from "openai";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const topic = body.topic || "روند صعودی قیمت مسکن و تحلیل بازار املاک";

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ success: false, error: "OpenAI API Key is missing in environment variables." }, { status: 500 });
    }

    const openai = new OpenAI({ apiKey });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a professional real estate market news editor. Generate a real estate news article in Persian strictly in JSON format with fields: title, lead, content, tags (array of strings)."
        },
        {
          role: "user",
          content: `Write an analytical real estate article about: ${topic}`
        }
      ],
      response_format: { type: "json_object" }
    });

    const aiData = JSON.parse(completion.choices[0].message.content || "{}");

    if (!aiData.title || !aiData.content) {
      throw new Error("Invalid AI response structure.");
    }

    const slug = aiData.title
      .toLowerCase()
      .replace(/[^\w\u0600-\u06FF ]+/g, "")
      .replace(/ +/g, "-") + "-" + Date.now().toString().slice(-4);

    const newArticle = await prisma.newsArticle.create({
      data: {
        slug: slug,
        title: aiData.title,
        lead: aiData.lead || aiData.title,
        content: aiData.content,
        category: "market-trends",
        region: "Global",
        targetAudience: "Investors",
        sourceName: "Melkism AI Newsroom",
        sourceUrl: "https://melkism.com",
        imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        readTimeMinutes: 4,
        priorityScore: 80,
        isTrending: true,
        isAiGenerated: true,
        tags: aiData.tags || ["real-estate", "market"]
      }
    });

    return NextResponse.json({ success: true, article: newArticle });
  } catch (error: any) {
    console.error("News Generation Error:", error);
    return NextResponse.json({ success: false, error: error.message || "Internal Server Error" }, { status: 500 });
  }
}