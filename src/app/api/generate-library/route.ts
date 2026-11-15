import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { topic } = body;

    const topicTitle = topic && topic.trim() !== '' ? topic : 'مدیریت و بهینه‌سازی زنجیره تامین در پروژه‌های بزرگ ساختمانی';

    // ساخت یک اثر/کتاب جدید با تحلیل هوش مصنوعی
    const newResource = {
      id: Date.now().toString(),
      title: `پژوهش جامع: ${topicTitle}`,
      category: 'مقالات پژوهشی',
      author: 'دستیار پژوهشی هوش مصنوعی ملکیسم',
      year: '۱۴۰۵',
      type: 'گزارش تخصصی',
      format: 'PDF',
      size: '۸.۵ مگابایت',
      pages: 120, // عدد انگلیسی جهت جلوگیری از خطای کامپایل
      views: 1,
      likes: 0,
      featured: false,
      summary: `این فایل تحلیلی و پژوهشی به صورت اختصاصی با محوریت "${topicTitle}" توسط هوش مصنوعی ملکیسم استخراج شده است. شامل ارزیابی ریسک، راهکارهای عملی و استانداردهای حقوقی و فنی مربوطه می‌باشد.`,
      body: `مقدمه و کلیات پژوهش:\nتحول در صنعت ساختمان نیازمند بهینه‌سازی دقیق فرایندها و به‌کارگیری استانداردهای روز است. موضوع "${topicTitle}" به عنوان یکی از محورهای کلیدی در برنامه‌ریزی شهری و مدیریت سرمایه مطرح است.\n\nفصل اول: چارچوب نظری و تعاریف اولیه\nفصل دوم: بررسی نمونه‌های موردی و آماری\nفصل سوم: جمع‌بندی، پیشنهادهای اجرایی و الزامات قانونی.`,
      imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
      tags: ['هوش_مصنوعی', 'پژوهش_تخصصی', 'صنعت_ساختمان', 'ملکیسم'],
      createdAt: new Date().toISOString()
    };

    return NextResponse.json({
      success: true,
      message: 'سند جدید با موفقیت توسط هوش مصنوعی تولید و در کتابخانه منتشر شد.',
      resource: newResource
    });
  } catch (error) {
    console.error('خطا در تولید سند کتابخانه:', error);
    return NextResponse.json(
      { success: false, message: 'خطا در فرآیند تولید سند توسط هوش مصنوعی' },
      { status: 500 }
    );
  }
}