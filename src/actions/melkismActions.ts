'use server';

import { prisma } from '@/lib/prisma';
import { getCurrentUser } from '@/lib/session';
import { requirePermission } from '@/lib/rbac';
import { propertySchema, escrowStatusSchema } from '@/schemas/melkismSchemas';
import { UserRole } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export type ActionResponse<T = null> = {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]> | null;
};

export async function createPropertyAction(prevState: ActionResponse | null, formData: FormData): Promise<ActionResponse> {
  try {
    const rawData = {
      title: formData.get('title'),
      price: formData.get('price'),
      area: formData.get('area'),
      province: formData.get('province'),
      city: formData.get('city'),
      address: formData.get('address') || undefined,
      description: formData.get('description') || undefined,
      imageUrl: formData.get('imageUrl') || undefined,
      gallery: formData.get('gallery') ? JSON.parse(formData.get('gallery') as string) : [],
    };

    const validationResult = propertySchema.safeParse(rawData);
    if (!validationResult.success) {
      return { success: false, message: 'Invalid form input data.', errors: validationResult.error.flatten().fieldErrors };
    }

    const data = validationResult.data;
    const baseSlug = data.title.toLowerCase().replace(/[\s]+/g, '-');
    let slug = baseSlug || 'property-' + Date.now();
    let counter = 1;
    while (await prisma.property.findUnique({ where: { slug } })) {
      slug = baseSlug + '-' + counter++;
    }

    const newProperty = await prisma.property.create({
      data: {
        title: data.title,
        slug,
        price: data.price,
        area: data.area,
        province: data.province,
        city: data.city,
        address: data.address,
        description: data.description,
        imageUrl: data.imageUrl || null,
        gallery: data.gallery || [],
      },
    });

    revalidatePath('/[locale]', 'layout');
    return { success: true, message: 'Property created successfully.', data: newProperty as any };
  } catch (error) {
    console.error('[CreatePropertyAction Error]:', error);
    return { success: false, message: 'A system error occurred.' };
  }
}

export async function updateEscrowStatusAction(actorId: string, actorRole: UserRole, input: { transactionId: string; status: any; note?: string }): Promise<ActionResponse> {
  try {
    await requirePermission(actorRole, 'MANAGE_ESCROW');
    const validationResult = escrowStatusSchema.safeParse(input);
    if (!validationResult.success) {
      return { success: false, message: 'Invalid escrow status data.', errors: validationResult.error.flatten().fieldErrors };
    }

    const { transactionId, status, note } = validationResult.data;
    const transaction = await prisma.escrowTransaction.findUnique({ where: { id: transactionId } });
    if (!transaction) return { success: false, message: 'Escrow transaction not found.' };

    const updatedTransaction = await prisma.$transaction(async (tx) => {
      const updated = await tx.escrowTransaction.update({ where: { id: transactionId }, data: { status } });
      await tx.escrowLog.create({
        data: {
          transactionId,
          actorId,
          action: 'STATUS_CHANGED_TO_' + status,
          notes: note || 'Status changed to ' + status,
        },
      });
      return updated;
    });

    revalidatePath('/[locale]/admin', 'layout');
    return { success: true, message: 'Escrow status updated successfully.', data: updatedTransaction as any };
  } catch (error: any) {
    console.error('[UpdateEscrowStatusAction Error]:', error);
    return { success: false, message: error.message || 'Error processing escrow status.' };
  }
}