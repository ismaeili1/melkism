'use server';

import { prisma } from "@/lib/prisma";
import { UserRole } from "@prisma/client";
import { revalidatePath } from "next/cache";

// آرایه اولیه دسترسی‌ها داخل خود فایل استفاده می‌شود (عدم export مستقیم داده غیر تابع)
const INITIAL_PERMISSIONS = [
  { code: "MANAGE_USERS", name: "مدیریت کاربران و حساب‌ها", category: "امنیت و کاربران" },
  { code: "MANAGE_ROLES_PERMISSIONS", name: "مدیریت ماتریس دسترسی‌ها", category: "امنیت و کاربران" },
  { code: "APPROVE_NEWS", name: "تایید و انتشار اخبار و مقالات", category: "محتوا" },
  { code: "MANAGE_LIBRARY", name: "مدیریت کتابخانه تخصصی معماری", category: "محتوا" },
  { code: "MANAGE_MARKET_HUB", name: "مدیریت هوش بازار و تحلیل‌ها", category: "هوش بازار" },
  { code: "MANAGE_RULES_REGULATIONS", name: "مدیریت قوانین و مقررات", category: "محتوا" },
  { code: "VIEW_FINANCIAL_LEDGER", name: "مشاهده دفتر کل مالی کلان", category: "مالی و اسکرو" },
  { code: "MANAGE_TRANSACTIONS_ESCROW", name: "مدیریت تراکنش‌ها و اسکرو (Escrow)", category: "مالی و اسکرو" },
  { code: "APPROVE_EXPERT_PROFILES", name: "تایید پروفایل کارشناسان و ارزیابان", category: "مدیریت متخصصان" },
  { code: "MANAGE_AGENCY_LISTINGS", name: "مدیریت آگهی‌های املاک آژانس‌ها", category: "املاک و آژانس‌ها" },
  { code: "MANAGE_COMPANY_PROJECTS", name: "مدیریت پروژه‌های ساختمانی شرکت‌ها", category: "شرکت‌ها و سازندگان" },
  { code: "VIEW_ADMIN_REPORTS", name: "مشاهده گزارش‌های پیشرفته مدیریتی", category: "گزارش‌ها" },
  { code: "SYSTEM_SETTINGS", name: "تنظیمات زیرساخت و دامنه سیستمی", category: "تنظیمات سیستم" },
  { code: "MANAGE_COMMENTS_FEEDBACK", name: "مدیریت صندوق نظرات و کامنت‌ها", category: "محتوا" },
  { code: "SUBMIT_PROPERTY_LISTING", name: "ثبت ملک یا آگهی جدید", category: "عمومی / تخصصی" },
  { code: "ACCESS_MARKET_INTELLIGENCE", name: "دسترسی به داده‌های تحلیل بازار", category: "هوش بازار" },
  { code: "PARTICIPATE_ESCROW", name: "شرکت در فرآیند سپرده‌گذاری امن (Escrow)", category: "مالی و اسکرو" },
  { code: "EDIT_USER_PROFILE", name: "ویرایش پروفایل اختصاصی", category: "حساب کاربری" },
  { code: "SUBMIT_EXPERT_ARTICLE", name: "ارسال مقاله یا محتوای کارشناسی", category: "محتوا" },
  { code: "MANAGE_TICKETS_SUPPORT", name: "پاسخ‌گویی به تیکت‌های پشتیبانی", category: "پشتیبانی" },
  { code: "VIEW_PUBLIC_LAWS", name: "مشاهده قوانین و مرجع حقوقی عمومی", category: "عمومی" },
];

// دریافت وضعیت کامل ماتریس دسترسی‌ها (فقط تابع‌های async)
export async function getPermissionsMatrix() {
  for (const perm of INITIAL_PERMISSIONS) {
    await prisma.permission.upsert({
      where: { code: perm.code },
      update: { name: perm.name, category: perm.category },
      create: { code: perm.code, name: perm.name, category: perm.category },
    });
  }

  const permissions = await prisma.permission.findMany({
    include: { roles: true },
    orderBy: { category: 'asc' },
  });

  return permissions;
}

// تغییر وضعیت دسترسی یک نقش (به‌صورت async)
export async function toggleRolePermission(role: string, permissionId: string, granted: boolean) {
  try {
    const userRole = role as UserRole;

    await prisma.rolePermission.upsert({
      where: {
        role_permissionId: { role: userRole, permissionId }
      },
      update: { granted },
      create: { role: userRole, permissionId, granted },
    });

    revalidatePath("/[locale]/admin/security/permissions", "page");
    return { success: true };
  } catch (error) {
    console.error("Error toggling permission:", error);
    return { success: false, error: "خطا در بروزرسانی دسترسی" };
  }
}