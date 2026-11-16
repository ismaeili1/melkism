import { z } from 'zod';

// اسکیما مدیریت رسانه و آپلود (MediaAsset)
export const mediaAssetSchema = z.object({
  title: z.string().max(200).optional(),
  filename: z.string().min(1, { message: 'نام فایل الزامی است' }),
  originalName: z.string().optional(),
  url: z.string().url({ message: 'آدرس فایل نامعتبر است' }),
  mimeType: z.string().optional(),
  size: z.coerce.number().optional(),
  category: z.string().min(2, { message: 'انتخاب دسته‌بندی رسانه الزامی است' }), // news, properties, experts, library, market, general
  altText: z.string().max(250).optional(),
  isUrlSource: z.boolean().default(false),
});

// اسکیما قوانین و مقررات (Regulation)
export const regulationSchema = z.object({
  title: z.string().min(5, { message: 'عنوان قانون باید حداقل ۵ کاراکتر باشد' }),
  codeNumber: z.string().min(2, { message: 'شماره مصوبه یا کد قانون الزامی است' }),
  category: z.string().min(2, { message: 'دسته‌بندی قانون الزامی است' }),
  summary: z.string().max(500).optional(),
  fullText: z.string().min(20, { message: 'متن کامل قانون نمی‌تواند خالی باشد' }),
  imageUrl: z.string().url().optional().or(z.literal('')),
});

// اسکیما کتابخانه تخصصی (LibraryDocument)
export const librarySchema = z.object({
  title: z.string().min(3, { message: 'عنوان سند یا کتاب الزامی است' }),
  author: z.string().optional(),
  category: z.string().optional(), // کتاب، آیین‌نامه، مقاله علمی
  summary: z.string().max(500).optional(),
  downloadUrl: z.string().url({ message: 'لینک دانلود نامعتبر است' }).optional().or(z.literal('')),
  imageUrl: z.string().url().optional().or(z.literal('')),
});

// اسکیما بازار ملکیست (MarketItem - مصالح، تجهیزات، خدمات)
export const marketItemSchema = z.object({
  title: z.string().min(3, { message: 'عنوان محصول یا خدمت الزامی است' }),
  category: z.string().min(2, { message: 'دسته‌بندی الزامی است' }),
  price: z.coerce.number().positive({ message: 'قیمت باید بزرگتر از صفر باشد' }).optional(),
  supplier: z.string().min(2, { message: 'نام تامین‌کننده یا شرکت الزامی است' }),
  city: z.string().min(2, { message: 'شهر الزامی است' }),
  description: z.string().max(2000).optional(),
  imageUrl: z.string().url().optional().or(z.literal('')),
});