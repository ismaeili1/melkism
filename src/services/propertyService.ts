import { prisma } from '@/lib/prisma'; // یا مسیر پدیدآورنده کلاینت پرایسما

// ۱. دریافت لیست املاک به همراه ترجمه زبان خاص
export async function getProperties(locale: string) {
  const properties = await prisma.property.findMany({
    include: {
      translations: {
        where: { locale }, // فیلتر ترجمه دقیق بر اساس زبان جاری (مثل 'fa', 'en', 'zh' و...)
      },
    },
    orderBy: { createdAt: 'desc' },
  });

  // مپ کردن داده‌ها جهت دسترسی راحت‌تر در کامپوننت‌ها
  return properties.map((prop) => ({
    id: prop.id,
    slug: prop.slug,
    price: prop.price,
    area: prop.area,
    province: prop.province,
    city: prop.city,
    imageUrl: prop.imageUrl,
    gallery: prop.gallery,
    // استخراج فیلدهای ترجمه‌شده (یا بازگرداندن مقدار خالی در صورت عدم ترجمه)
    title: prop.translations[0]?.title || '',
    description: prop.translations[0]?.description || '',
    address: prop.translations[0]?.address || '',
  }));
}

// ۲. دریافت یک ملک خاص با Slug و زبان مشخص
export async function getPropertyBySlug(slug: string, locale: string) {
  const property = await prisma.property.findUnique({
    where: { slug },
    include: {
      translations: {
        where: { locale },
      },
    },
  });

  if (!property) return null;

  return {
    ...property,
    title: property.translations[0]?.title || '',
    description: property.translations[0]?.description || '',
    address: property.translations[0]?.address || '',
  };
}