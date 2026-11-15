'use server';

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import writeFile from "fs/promises";
import path from "path";

// ۱. ثبت تصویر تاییدشده در دیتابیس (چه آپلود فایل باشد چه لینک URL)
export async function registerMediaAsset(data: {
  title: string;
  url: string;
  category: string;
  altText?: string;
  width?: number;
  height?: number;
  size?: number;
  isUrlSource: boolean;
}) {
  try {
    const asset = await prisma.mediaAsset.create({
      data: {
        title: data.title,
        filename: data.title.replace(/\s+/g, "_") + "_" + Date.now(),
        url: data.url,
        category: data.category,
        altText: data.altText,
        width: data.width,
        height: data.height,
        size: data.size,
        isUrlSource: data.isUrlSource,
      },
    });

    revalidatePath("/[locale]/admin/media-library");
    return { success: true, asset };
  } catch (error) {
    console.error("Error registering media asset:", error);
    return { success: false, error: "خطا در ثبت تصویر در مخزن" };
  }
}

// ۲. دریافت لیست کامل آلبوم رسانه‌ها با قابلیت فیلتر بر اساس دسته‌بندی
export async function getMediaAssets(category?: string) {
  return await prisma.mediaAsset.findMany({
    where: category && category !== "all" ? { category } : {},
    orderBy: { createdAt: "desc" },
  });
}

// ۳. حذف تصویر از مخزن
export async function deleteMediaAsset(id: string) {
  try {
    await prisma.mediaAsset.delete({ where: { id } });
    revalidatePath("/[locale]/admin/media-library");
    return { success: true };
  } catch (error) {
    return { success: false, error: "خطا در حذف تصویر" };
  }
}