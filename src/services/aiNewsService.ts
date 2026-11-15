import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export interface RawNewsInput {
  rawTitle: string;
  rawContent: string;
  sourceName: string;
  sourceUrl: string;
  imageUrl: string;
}

export async function processNewsWithAI(input: RawNewsInput) {
  const prompt = `
    شما سردبیر ارشد یک خبرگزاری تخصصی املاک و پروپ‌تک هستید. 
    متن یا عنوان زیر را دریافت کرده و یک خبر کاملاً حرفه‌ای، جذاب، سئو شده و استاندارد به زبان فارسی تولید کنید.
    خروجی را به صورت JSON با ساختار زیر برگردانید:
    {
      "title": "عنوان جذاب خبری",
      "lead": "چکیده یا لید خبری ۲ جمله‌ای جذاب",
      "content": "متن کامل و تحلیل‌شده خبر به صورت پاراگراف‌بندی شده",
      "category": "یکی از موارد (market-trends, legal-regulations, international, proptech, construction)",
      "region": "یکی از موارد (global, mena, europe, iran)",
      "targetAudience": "یکی از موارد (investors, developers, agents, architects, lawyers)",
      "tags": ["تگ۱", "تگ۲", "تگ۳"],
      "priorityScore": عدد بین ۱ تا ۱۰۰ بر اساس اهمیت خبر
    }

    اطلاعات ورودی:
    عنوان اصلی: ${input.rawTitle}
    متن خام: ${input.rawContent}
  `;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: prompt }],
      response_format: { type: "json_object" },
    });

    const aiResult = JSON.parse(response.choices[0].message.content || "{}");

    return {
      ...aiResult,
      sourceName: input.sourceName,
      sourceUrl: input.sourceUrl,
      imageUrl: input.imageUrl,
      slug: encodeURIComponent(aiResult.title?.replace(/\s+/g, "-").toLowerCase() || Date.now().toString()),
    };
  } catch (error) {
    console.error("AI Processing Error:", error);
    throw new Error("خطا در پردازش هوش مصنوعی خبر");
  }
}
