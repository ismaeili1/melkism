// src/actions/newsActions.ts
'use server';

import { db } from '@/lib/db'; // فرض بر این است که نمونه Prisma Client شما در این مسیر قرار دارد
import { translateDynamicContent } from '@/services/autoTranslate';
import { revalidatePath } from 'next/cache';

interface CreateNewsInput {
  title: string;
  summary?: string;
  content: string;
  category?: string;
  imageUrl?: string;
  sourceLocale?: string; // زبانی که خبر به آن نوشته شده است (پیش‌فرض: fa)
}

export async function createNewsWithAutoTranslation(input: CreateNewsInput) {
  try {
    const sourceLocale = input.sourceLocale || 'fa';
    
    // ۱. تولید slug یکتا برای خبر بر اساس عنوان (یا روش دلخواه دیگر)
    const slug = input.title
      .toLowerCase()
      .replace(/[^\w\sع-ی]/gi, '')
      .replace(/\s+/g, '-');

    // ساخت شیء اولیه ترجمه‌ها با زبان مبدأ
    const translations: Record<string, { title: string; summary?: string; content: string }> = {
      [sourceLocale]: {
        title: input.title,
        summary: input.summary || '',
        content: input.content,
      }
    };

    // ۲. فراخوانی ربات هوش مصنوعی برای ترجمه به ۹ زبان دیگر به صورت خودکار
    console.log(`Starting AI translation for news across 10 languages from source: ${sourceLocale}...`);
    const aiTranslations = await translateDynamicContent(input.title, input.content, sourceLocale);

    // ادغام ترجمه‌های هوش مصنوعی با زبان مبدأ
    Object.assign(translations, aiTranslations);

    // ۳. ذخیره نهایی خبر و تمام ترجمه‌ها به صورت یکجا در دیتابیس (فیلد JSON)
    const newNews = await db.news.create({
      data: {
        slug: `${slug}-${Date.now().toString().slice(-4)}`, // جلوگیری از تکرار slug
        category: input.category || 'عمومی',
        imageUrl: input.imageUrl || null,
        published: true,
        translations: translations as any, // ذخیره در ستون JSON اسکیما
      },
    });

    // ۴. پاکسازی کش صفحه اخبار برای نمایش آنی در سایت (ISR & Revalidation)
    revalidatePath(`/${sourceLocale}/news`);
    
    // بازگرداندن وضعیت موفقیت‌آمیز
    return { success: true, newsId: newNews.id, message: 'خبر با موفقیت ثبت و به ۱۰ زبان ترجمه شد.' };

  } catch (error: any) {
    console.error('Error creating news and translating:', error);
    return { success: false, error: error.message || 'خطا در ثبت یا ترجمه خبر' };
  }
}