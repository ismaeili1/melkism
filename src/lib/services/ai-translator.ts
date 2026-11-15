/**
 * سرویس ترجمه هوشمند متون پویا و اخبار به ۱۰ زبان
 */
export async function autoTranslateContent(
  text: string,
  targetLocale: string
): Promise<string> {
  if (targetLocale === "fa") return text;

  try {
    // نمونه فراخوانی سرویس ترجمه (Google Translate API / OpenAI API / DeepL)
    const response = await fetch("https://translation.googleapis.com/language/translate/v2", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        q: text,
        target: targetLocale,
        format: "text",
        key: process.env.NEXT_PUBLIC_TRANSLATE_API_KEY,
      }),
    });

    const data = await response.json();
    return data.data.translations[0].translatedText;
  } catch (error) {
    console.error("AI Translation Error:", error);
    return text; // در صورت بروز خطا متن اصلی بازگردانده می‌شود
  }
}