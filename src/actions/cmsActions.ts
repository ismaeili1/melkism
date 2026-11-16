'use server';

import { prisma } from '@/lib/prisma';
import { getCurrentUser } from '@/lib/session';
import { requirePermission } from '@/lib/rbac';
import { newsSchema, marketReportSchema, regulationSchema, librarySchema } from '@/schemas/cmsSchemas';
import { UserRole } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export type CmsActionResponse<T = null> = {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]> | null;
};

// تابع کمکی برای ساخت Slug یکتا
async function generateUniqueSlug(title: string, model: 'news' | 'marketReport' | 'libraryDocument'): Promise<string> {
  const baseSlug = title
    .toLowerCase()
    .trim()
    .replace(/[\s]+/g, '-')
    .replace(/[^\w\u0600-\u06FF\-]+/g, '');
  
  let slug = baseSlug || `item-${Date.now()}`;
  let counter = 1;

  while (true) {
    let exists = null;
    if (model === 'news') exists = await prisma.news.findUnique({ where: { slug } });
    if (model === 'marketReport') exists = await prisma.marketReport.findUnique({ where: { slug } });
    if (model === 'libraryDocument') exists = await prisma.libraryDocument.findUnique({ where: { slug } });

    if (!exists) break;
    slug = `${baseSlug}-${counter++}`;
  }

  return slug;
}

/**
 * ایجاد خبر جدید (در وضعیت پیش‌نویس یا منتشر شده بر اساس مجوز کاربر)
 */
export async function createNewsAction(
  actorRole: UserRole,
  formData: FormData
): Promise<CmsActionResponse> {
  try {
    // ۱. بررسی مجوز ایجاد خبر
    await requirePermission(actorRole, 'CREATE_NEWS');

    const rawData = {
      title: formData.get('title'),
      summary: formData.get('summary') || undefined,
      content: formData.get('content'),
      category: formData.get('category') || 'عمومی',
      imageUrl: formData.get('imageUrl') || undefined,
      // انتشار مستقیم فقط برای کسانی که مجوز APPROVE_NEWS دارند مجاز است
      published: formData.get('published') === 'true',
    };

    const validation = newsSchema.safeParse(rawData);
    if (!validation.success) {
      return {
        success: false,
        message: 'اطلاعات خبر نامعتبر است.',
        errors: validation.error.flatten().fieldErrors,
      };
    }

    const data = validation.data;

    // اگر کاربر درخواست انتشار مستقیم داده، بررسی مجوز انتشار
    if (data.published) {
      await requirePermission(actorRole, 'APPROVE_NEWS');
    }

    const slug = await generateUniqueSlug(data.title, 'news');

    const createdNews = await prisma.news.create({
      data: {
        title: data.title,
        slug,
        summary: data.summary,
        content: data.content,
        category: data.category,
        imageUrl: data.imageUrl || null,
        published: data.published,
      },
    });

    revalidatePath('/[locale]', 'layout');
    return {
      success: true,
      message: data.published ? 'خبر ثبت و منتشر شد.' : 'خبر به عنوان پیش‌نویس ثبت شد و در انتظار تأیید است.',
      data: createdNews as any,
    };
  } catch (error: any) {
    console.error('[CreateNewsAction Error]:', error);
    return { success: false, message: error.message || 'خطا در ثبت خبر.' };
  }
}

/**
 * ثبت گزارش هوش بازار (Market Report)
 */
export async function createMarketReportAction(
  actorRole: UserRole,
  formData: FormData
): Promise<CmsActionResponse> {
  try {
    await requirePermission(actorRole, 'MANAGE_MARKET_REPORTS');

    const rawData = {
      title: formData.get('title'),
      marketIndex: formData.get('marketIndex') || undefined,
      region: formData.get('region') || undefined,
      content: formData.get('content'),
      pdfLink: formData.get('pdfLink') || undefined,
      imageUrl: formData.get('imageUrl') || undefined,
    };

    const validation = marketReportSchema.safeParse(rawData);
    if (!validation.success) {
      return {
        success: false,
        message: 'اطلاعات گزارش بازار نامعتبر است.',
        errors: validation.error.flatten().fieldErrors,
      };
    }

    const data = validation.data;
    const slug = await generateUniqueSlug(data.title, 'marketReport');

    const report = await prisma.marketReport.create({
      data: {
        title: data.title,
        slug,
        marketIndex: data.marketIndex,
        region: data.region,
        content: data.content,
        pdfLink: data.pdfLink || null,
        imageUrl: data.imageUrl || null,
      },
    });

    revalidatePath('/[locale]', 'layout');
    return {
      success: true,
      message: 'گزارش هوش بازار با موفقیت ثبت شد.',
      data: report as any,
    };
  } catch (error: any) {
    console.error('[CreateMarketReportAction Error]:', error);
    return { success: false, message: error.message || 'خطا در ثبت گزارش بازار.' };
  }
}