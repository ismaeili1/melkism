'use server';

import { prisma } from '@/lib/prisma';
import { getCurrentUser } from '@/lib/session';
import { requirePermission } from '@/lib/rbac';
import { mediaAssetSchema, regulationSchema, librarySchema, marketItemSchema } from '@/schemas/cmsExtendedSchemas';
import { UserRole } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export type CmsActionResponse<T = null> = {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]> | null;
};

// تابع کمکی برای ساخت Slug یکتا
async function generateUniqueSlug(title: string, model: 'regulation' | 'library' | 'marketItem'): Promise<string> {
  const baseSlug = title
    .toLowerCase()
    .trim()
    .replace(/[\s]+/g, '-')
    .replace(/[^\w\u0600-\u06FF\-]+/g, '');
  
  let slug = baseSlug || `item-${Date.now()}`;
  let counter = 1;

  while (true) {
    let exists = null;
    if (model === 'regulation') exists = await prisma.regulation.findUnique({ where: { codeNumber: title } }); // قوانین با codeNumber چک می‌شوند
    if (model === 'library') exists = await prisma.libraryDocument.findUnique({ where: { slug } });
    if (model === 'marketItem') exists = await prisma.marketItem.findUnique({ where: { slug } });

    if (!exists) break;
    slug = `${baseSlug}-${counter++}`;
  }

  return slug;
}

/**
 * ثبت فایل یا تصویر در مخزن رسانه (MediaAsset)
 */
export async function createMediaAssetAction(
  actorRole: UserRole,
  actorId: string,
  formData: FormData
): Promise<CmsActionResponse> {
  try {
    await requirePermission(actorRole, 'MANAGE_MEDIA');

    const rawData = {
      title: formData.get('title') || undefined,
      filename: formData.get('filename'),
      originalName: formData.get('originalName') || undefined,
      url: formData.get('url'),
      mimeType: formData.get('mimeType') || undefined,
      size: formData.get('size') || undefined,
      category: formData.get('category') || 'general',
      altText: formData.get('altText') || undefined,
      isUrlSource: formData.get('isUrlSource') === 'true',
    };

    const validation = mediaAssetSchema.safeParse(rawData);
    if (!validation.success) {
      return {
        success: false,
        message: 'اطلاعات فایل رسانه نامعتبر است.',
        errors: validation.error.flatten().fieldErrors,
      };
    }

    const data = validation.data;

    const mediaAsset = await prisma.mediaAsset.create({
      data: {
        title: data.title,
        filename: data.filename,
        originalName: data.originalName,
        url: data.url,
        mimeType: data.mimeType,
        size: data.size,
        category: data.category,
        altText: data.altText,
        uploadedBy: actorId,
        isUrlSource: data.isUrlSource,
      },
    });

    revalidatePath('/[locale]/admin/media', 'layout');
    return {
      success: true,
      message: 'رسانه با موفقیت در مخزن ثبت شد.',
      data: mediaAsset as any,
    };
  } catch (error: any) {
    console.error('[CreateMediaAssetAction Error]:', error);
    return { success: false, message: error.message || 'خطا در ثبت رسانه.' };
  }
}

/**
 * ثبت قوانین و مقررات جدید (Regulation)
 */
export async function createRegulationAction(
  actorRole: UserRole,
  formData: FormData
): Promise<CmsActionResponse> {
  try {
    await requirePermission(actorRole, 'MANAGE_REGULATIONS');

    const rawData = {
      title: formData.get('title'),
      codeNumber: formData.get('codeNumber'),
      category: formData.get('category'),
      summary: formData.get('summary') || undefined,
      fullText: formData.get('fullText'),
      imageUrl: formData.get('imageUrl') || undefined,
    };

    const validation = regulationSchema.safeParse(rawData);
    if (!validation.success) {
      return {
        success: false,
        message: 'اطلاعات قانون نامعتبر است.',
        errors: validation.error.flatten().fieldErrors,
      };
    }

    const data = validation.data;

    const regulation = await prisma.regulation.create({
      data: {
        title: data.title,
        codeNumber: data.codeNumber,
        category: data.category,
        summary: data.summary,
        fullText: data.fullText,
        imageUrl: data.imageUrl || null,
      },
    });

    revalidatePath('/[locale]/regulations', 'layout');
    return {
      success: true,
      message: 'قانون و مقررات با موفقیت ثبت شد.',
      data: regulation as any,
    };
  } catch (error: any) {
    console.error('[CreateRegulationAction Error]:', error);
    return { success: false, message: error.message || 'خطا در ثبت قانون (احتمال تکراری بودن شماره مصوبه).' };
  }
}

/**
 * ثبت سند در کتابخانه تخصصی (LibraryDocument)
 */
export async function createLibraryDocumentAction(
  actorRole: UserRole,
  formData: FormData
): Promise<CmsActionResponse> {
  try {
    await requirePermission(actorRole, 'MANAGE_LIBRARY');

    const rawData = {
      title: formData.get('title'),
      author: formData.get('author') || undefined,
      category: formData.get('category') || undefined,
      summary: formData.get('summary') || undefined,
      downloadUrl: formData.get('downloadUrl') || undefined,
      imageUrl: formData.get('imageUrl') || undefined,
    };

    const validation = librarySchema.safeParse(rawData);
    if (!validation.success) {
      return {
        success: false,
        message: 'اطلاعات سند کتابخانه نامعتبر است.',
        errors: validation.error.flatten().fieldErrors,
      };
    }

    const data = validation.data;
    const slug = await generateUniqueSlug(data.title, 'library');

    const document = await prisma.libraryDocument.create({
      data: {
        title: data.title,
        slug,
        author: data.author,
        category: data.category,
        summary: data.summary,
        downloadUrl: data.downloadUrl || null,
        imageUrl: data.imageUrl || null,
      },
    });

    revalidatePath('/[locale]/library', 'layout');
    return {
      success: true,
      message: 'سند کتابخانه با موفقیت ثبت شد.',
      data: document as any,
    };
  } catch (error: any) {
    console.error('[CreateLibraryDocumentAction Error]:', error);
    return { success: false, message: error.message || 'خطا در ثبت سند کتابخانه.' };
  }
}

/**
 * ثبت محصول یا خدمت در بازار ملکیست (MarketItem)
 */
export async function createMarketItemAction(
  actorRole: UserRole,
  formData: FormData
): Promise<CmsActionResponse> {
  try {
    await requirePermission(actorRole, 'MANAGE_MARKET');

    const rawData = {
      title: formData.get('title'),
      category: formData.get('category'),
      price: formData.get('price') || undefined,
      supplier: formData.get('supplier'),
      city: formData.get('city'),
      description: formData.get('description') || undefined,
      imageUrl: formData.get('imageUrl') || undefined,
    };

    const validation = marketItemSchema.safeParse(rawData);
    if (!validation.success) {
      return {
        success: false,
        message: 'اطلاعات محصول بازار نامعتبر است.',
        errors: validation.error.flatten().fieldErrors,
      };
    }

    const data = validation.data;
    const slug = await generateUniqueSlug(data.title, 'marketItem');

    const marketItem = await prisma.marketItem.create({
      data: {
        title: data.title,
        slug,
        category: data.category,
        price: data.price ? Number(data.price) : null,
        supplier: data.supplier,
        city: data.city,
        description: data.description,
        imageUrl: data.imageUrl || null,
      },
    });

    revalidatePath('/[locale]/market', 'layout');
    return {
      success: true,
      message: 'آیتم بازار با موفقیت ثبت شد.',
      data: marketItem as any,
    };
  } catch (error: any) {
    console.error('[CreateMarketItemAction Error]:', error);
    return { success: false, message: error.message || 'خطا در ثبت آیتم بازار.' };
  }
}