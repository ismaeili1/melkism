'use server';

import { prisma } from '@/lib/prisma';
import { getCurrentUser } from '@/lib/session';
import { requirePermission } from '@/lib/rbac';
import { revalidatePath } from 'next/cache';

export async function createMultilingualNewsAction(prevState: any, formData: FormData) {
  try {
    const user = await getCurrentUser();
    if (!user) return { success: false, message: 'لطفاً ابتدا وارد شوید.' };

    await requirePermission(user.role, 'CREATE_NEWS');

    // دریافت محتوا به زبان پایه (مثلا فارسی)
    const baseTitle = formData.get('title') as string;
    const baseContent = formData.get('content') as string;
    const baseSummary = formData.get('summary') as string;
    const category = formData.get('category') as string;
    const imageUrl = formData.get('imageUrl') as string;

    const slug = baseTitle
      .toLowerCase()
      .trim()
      .replace(/[\s]+/g, '-')
      .replace(/[^\w\u0600-\u06FF\-]+/g, '') + '-' + Date.now();

    // ساخت پکیج ترجمه برای ۱۰ زبان پروژه
    // در پروژه‌های پیشرفته می‌توانید اینجا به APIهای ترجمه هوش مصنوعی اتصال دهید
    const locales = ['fa', 'en', 'ru', 'fr', 'zh', 'de', 'es', 'it', 'ar', 'tr'];
    const translations: Record<string, any> = {};

    for (const loc of locales) {
      // برای تست، ساختار ترجمه را ایجاد می‌کنیم (در نسخه تولیدی قابل اتصال به مترجم خودکار است)
      translations[loc] = {
        title: loc === 'fa' ? baseTitle : `[${loc.toUpperCase()}] ${baseTitle}`,
        summary: baseSummary ? `[${loc.toUpperCase()}] ${baseSummary}` : '',
        content: `[${loc.toUpperCase()}] ${baseContent}`,
      };
    }

    const news = await prisma.news.create({
      data: {
        slug,
        category,
        imageUrl: imageUrl || null,
        published: true,
        translations,
      },
    });

    revalidatePath('/[locale]', 'layout');
    return { success: true, message: 'خبر با موفقیت و پشتیبانی از ۱۰ زبان ثبت شد.', data: news };
  } catch (error: any) {
    console.error('[Multilingual News Error]:', error);
    return { success: false, message: error.message || 'خطا در ثبت خبر.' };
  }
}