'use server';

import { prisma } from '@/lib/prisma';
import { getCurrentUser } from '@/lib/session';
import { propertyFormSchema } from '@/schemas/propertySchema';
import { revalidatePath } from 'next/cache';

export type ActionResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]> | null;
};

export async function createPropertyAction(
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  try {
    // 1. Extract raw data from FormData
    const rawData = {
      title: formData.get('title'),
      price: formData.get('price'),
      city: formData.get('city'),
      description: formData.get('description') || undefined,
    };

    // 2. Validate inputs using Zod
    const validatedFields = propertyFormSchema.safeParse(rawData);

    if (!validatedFields.success) {
      return {
        success: false,
        message: 'اطلاعات وارد شده نامعتبر است. لطفاً موارد مشخص شده را اصلاح کنید.',
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { title, price, city, description } = validatedFields.data;

    // 3. TODO: Verify user session/role (Authentication Check)
    // const session = await getServerSession(authOptions);
    // if (!session) return { success: false, message: 'دسترسی غیرمجاز. لطفاً وارد شوید.' };

    // 4. Execute Prisma Database Query (Uncomment and match with your schema.prisma model)
    /*
    await prisma.property.create({
      data: {
        title,
        price,
        city,
        description,
      },
    });
    */

    // 5. Revalidate cache to reflect changes immediately
    revalidatePath('/[locale]', 'layout');

    return {
      success: true,
      message: 'اطلاعات با موفقیت اعتبارسنجی و ثبت شد.',
      errors: null,
    };
  } catch (error) {
    console.error('[createPropertyAction Error]:', error);
    return {
      success: false,
      message: 'خطایی در پردازش اطلاعات سمت سرور رخ داد.',
      errors: null,
    };
  }
}
