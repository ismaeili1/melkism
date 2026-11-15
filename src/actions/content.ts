'use server';

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

// ۱. ثبت خبر دستی
export async function createNewsManual(data: {
  title: string;
  slug: string;
  summary?: string;
  content: string;
  category: string;
  imageUrl?: string;
}) {
  try {
    const news = await prisma.news.create({ data });
    revalidatePath("/[locale]/news");
    return { success: true, news };
  } catch (e) {
    return { success: false, error: "خطا در ثبت خبر یا اسلاگ تکراری" };
  }
}

// ۲. ثبت سند کتابخانه دستی
export async function createLibraryDocumentManual(data: {
  title: string;
  slug: string;
  author?: string;
  category?: string;
  summary?: string;
  downloadUrl?: string;
  imageUrl?: string;
}) {
  try {
    const doc = await prisma.libraryDocument.create({ data });
    revalidatePath("/[locale]/library");
    return { success: true, doc };
  } catch (e) {
    return { success: false, error: "خطا در ثبت سند کتابخانه" };
  }
}

// ۳. ثبت گزارش هوش بازار / تحلیل
export async function createMarketReportManual(data: {
  title: string;
  slug: string;
  marketIndex?: number;
  region?: string;
  content: string;
  pdfLink?: string;
  imageUrl?: string;
}) {
  try {
    const report = await prisma.marketReport.create({ data });
    revalidatePath("/[locale]/market-hub");
    return { success: true, report };
  } catch (e) {
    return { success: false, error: "خطا در ثبت گزارش بازار" };
  }
}

// ۴. ایجاد پروفایل VIP متخصص
export async function createExpertVipManual(data: {
  fullName: string;
  specialty: string;
  licenseNumber?: string;
  city: string;
  mobile?: string;
  bio?: string;
  isVip: boolean;
  avatarUrl?: string;
}) {
  try {
    const expert = await prisma.expertProfile.create({ data });
    revalidatePath("/[locale]/experts");
    return { success: true, expert };
  } catch (e) {
    return { success: false, error: "خطا در ثبت پروفایل متخصص" };
  }
}

// ۵. ثبت آگهی ملکی دستی
export async function createPropertyManual(data: {
  title: string;
  slug: string;
  price: number;
  area: number;
  province: string;
  city: string;
  address?: string;
  description?: string;
  imageUrl?: string;
}) {
  try {
    const property = await prisma.property.create({ data });
    revalidatePath("/[locale]/properties");
    return { success: true, property };
  } catch (e) {
    return { success: false, error: "خطا در ثبت آگهی ملک" };
  }
}