import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, amount, authority, gatewayRefId } = body;

    // ۱. اعتبارسنجی اولیه مبالغ و پارامترها در سمت سرور
    if (!userId || !amount || amount <= 0 || !authority) {
      return NextResponse.json({ error: "اطلاعات تراکنش نامعتبر است." }, { status: 400 });
    }

    // ۲. اجرای تراکنش امن و اتمیک در پایگاه داده
    const result = await prisma.$transaction(async (tx) => {
      // بررسی تکراری نبودن Authority برای جلوگیری از حملات تکرار تراکنش
      const existingTransaction = await tx.findFirst({
        where: { authority } // فرض بر وجود مدل Transaction در اسکیما
      });

      if (existingTransaction) {
        throw new Error("این تراکنش قبلاً پردازش و ثبت شده است.");
      }

      // ثبت فاکتور یا شارژ کیف پول / ارتقای آگهی
      const paymentRecord = await tx.transaction.create({
        data: {
          userId,
          amount,
          authority,
          gatewayRefId: gatewayRefId || "PENDING_VERIFY",
          status: "SUCCESS",
        },
      });

      // اعطای اعتبار یا فعال‌سازی سرویس کاربر بر اساس تراکنش موفق
      await tx.user.update({
        where: { id: userId },
        data: { status: "ACTIVE" } // یا ارتقای سطح حساب
      });

      return paymentRecord;
    });

    return NextResponse.json({ success: true, data: result }, { status: 200 });

  } catch (error: any) {
    return NextResponse.json({ 
      success: false, 
      error: error.message || "خطای سیستمی در پردازش تراکنش مالی." 
    }, { status: 500 });
  }
}