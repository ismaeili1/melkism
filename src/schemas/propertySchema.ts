import { z } from 'zod';

export const propertyFormSchema = z.object({
  title: z
    .string()
    .min(3, { message: 'عنوان باید حداقل ۳ کاراکتر باشد' })
    .max(120, { message: 'عنوان نمی‌تواند بیشتر از ۱۲۰ کاراکتر باشد' }),
  price: z
    .coerce
    .number({ invalid_type_error: 'قیمت باید عدد معتبر باشد' })
    .positive({ message: 'قیمت باید بزرگتر از صفر باشد' }),
  city: z
    .string()
    .min(2, { message: 'انتخاب شهر الزامی است' }),
  description: z
    .string()
    .max(2000, { message: 'توضیحات نمی‌تواند بیش از ۲۰۰۰ کاراکتر باشد' })
    .optional(),
});

export type PropertyFormValues = z.infer<typeof propertyFormSchema>;
