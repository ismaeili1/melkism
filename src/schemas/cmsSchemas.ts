import { z } from 'zod';

// اسکیما اخبار و مقالات (News)
export const newsSchema = z.object({
  title: z.string().min(5, { message: 'عنوان خبر باید حداقل ۵ کاراکتر باشد' }).max(200),
  summary: z.string().max(500).optional(),
  content: z.string().min(20, { message: 'متن خبر نمی‌تواند کمتر از ۲۰ کاراکتر باشد' }),
  category: z.string().default('عمومی'),
  imageUrl: z.string().url({ message: 'آدرس تصویر نامعتبر است' }).optional().or(z.literal('')),
  published: z.boolean().default(false), // برای گردش کار تایید و انتشار
});

// اسکیما گزارش‌های هوش بازار (MarketReport)
export const marketReportSchema = z.object({
  title: z.string().min(5, { message: 'عنوان گزارش الزامی است' }).max(200),
  marketIndex: z.coerce.number().optional(),
  region: z.string().optional(),
  content: z.string().min(20, { message: 'متن تحلیل بازار الزامی است' }),
  pdfLink: z.string().url({ message: 'لینک فایل PDF نامعتبر است' }).optional().or(z.literal('')),
  imageUrl: z.string().url().optional().or(z.literal('')),
});

// اسکیما قوانین و مقررات (Regulation)
export const regulationSchema = z.object({
  title: z.string().min(5, { message: 'عنوان قانون الزامی است' }),
  codeNumber: z.string().min(2, { message: 'شماره مصوبه یا کد قانون الزامی است' }),
  category: z.string().min(2, { message: 'دسته‌بندی قانون الزامی است' }),
  summary: z.string().optional(),
  fullText: z.string().min(20, { message: 'متن کامل قانون الزامی است' }),
  imageUrl: z.string().url().optional().or(z.literal('')),
});

// اسکیما کتابخانه تخصصی (LibraryDocument)
export const librarySchema = z.object({
  title: z.string().min(3, { message: 'عنوان سند یا کتاب الزامی است' }),
  author: z.string().optional(),
  category: z.string().optional(),
  summary: z.string().optional(),
  downloadUrl: z.string().url({ message: 'لینک دانلود نامعتبر است' }).optional().or(z.literal('')),
  imageUrl: z.string().url().optional().or(z.literal('')),
});
