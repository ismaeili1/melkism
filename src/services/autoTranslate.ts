// src/services/autoTranslate.ts
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// لیست ۱۰ زبان پشتیبانی‌شده در پلتفرم ملکیسم
const TARGET_LOCALES = ['fa', 'en', 'de', 'fr', 'es', 'tr', 'zh', 'it', 'ar'];

export async function translateDynamicContent(title: string, content: string, sourceLocale: string) {
  const translations: Record<string, { title: string; summary?: string; content: string }> = {};

  for (const targetLocale of TARGET_LOCALES) {
    if (targetLocale === sourceLocale) continue;

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: `You are an expert technical translator and legal/architectural editor for 'MELKISM', a high-end architecture, real estate, and market intelligence platform. Translate the given title and content from ${sourceLocale} to ${targetLocale}. Maintain professional real estate, architectural, and legal terminology (e.g., escrow, zoning, pre-sale regulations, urban planning). Return ONLY a valid JSON object with keys "title", "summary" (a brief 1-2 sentence excerpt), and "content".`
          },
          {
            role: 'user',
            content: `Title: ${title}\n\nContent: ${content}`
          }
        ],
        response_format: { type: "json_object" }
      });

      const result = JSON.parse(response.choices[0].message.content || '{}');
      translations[targetLocale] = {
        title: result.title,
        summary: result.summary || '',
        content: result.content
      };
    } catch (error) {
      console.error(`Failed to translate to ${targetLocale}:`, error);
    }
  }

  return translations;
}