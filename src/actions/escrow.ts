'use server'

import { prisma } from "@/lib/prisma";
import { EscrowStatus } from "@prisma/client";
import { revalidatePath } from "next/cache";

// ۱. ایجاد یک قرارداد/معامله جدید در حالت اسکرو
export async function createEscrowTransaction(data: {
  buyerId: string;
  sellerId: string;
  amount: number;
  propertyId?: string;
  description?: string;
}) {
  try {
    const trackingCode = `ESC-${Math.floor(100000 + Math.random() * 900000)}`;

    const transaction = await prisma.escrowTransaction.create({
      data: {
        trackingCode,
        buyerId: data.buyerId,
        sellerId: data.sellerId,
        amount: data.amount,
        propertyId: data.propertyId,
        description: data.description,
        status: EscrowStatus.PENDING_DEPOSIT,
      },
    });

    return { success: true, transaction };
  } catch (error) {
    console.error("Error creating escrow transaction:", error);
    return { success: false, error: "خطا در ثبت معامله اسکرو" };
  }
}

// ۲. تغییر وضعیت یا آزادسازی وجه توسط مدیر سیستم (Escrow Manager)
export async function updateEscrowStatus(
  transactionId: string, 
  newStatus: EscrowStatus, 
  actorId: string, 
  notes?: string
) {
  try {
    const updated = await prisma.$transaction(async (tx) => {
      // بروزرسانی وضعیت تراکنش
      const tr = await tx.escrowTransaction.update({
        where: { id: transactionId },
        data: { status: newStatus },
      });

      // ثبت لاگ تغییرات برای امنیت مالی (Audit Trail)
      await tx.escrowLog.create({
        data: {
          transactionId,
          actorId,
          action: `STATUS_CHANGED_TO_${newStatus}`,
          notes,
        },
      });

      return tr;
    });

    revalidatePath("/[locale]/admin/transactions/scenarios");
    return { success: true, updated };
  } catch (error) {
    console.error("Error updating escrow status:", error);
    return { success: false, error: "خطا در به‌روزرسانی وضعیت تراکنش" };
  }
}

// ۳. دریافت لیست تمامی تراکنش‌های اسکرو برای پنل مدیریت
export async function getAllEscrowTransactions() {
  return await prisma.escrowTransaction.findMany({
    include: {
      buyer: { select: { name: true, email: true, mobile: true } },
      seller: { select: { name: true, email: true, mobile: true, role: true } },
      logs: true,
    },
    orderBy: { createdAt: 'desc' },
  });
}