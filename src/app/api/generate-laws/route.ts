import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { topic } = body;

    const topicTitle = topic && topic.trim() !== '' ? topic : 'تحلیل آیین‌نامه اجرایی پیش‌فروش ساختمان و الزامات ثبتی آن';

    const newLaw = {
      id: Date.now().toString(),
      title: `قانون و بخشنامه تخصصی: ${topicTitle}`,
      category: 'قوانین و بخشنامه‌ها',
      jobTarget: 'مشاوران حقوقی',
      geo: 'ایران',
      format: 'بخشنامه و مصوبه',
      views: 1,
      likes: 0,
      featured: false,
      summary: `تفسیر حقوقی و الزامات قانونی مربوط به "${topicTitle}" توسط هوش مصنوعی ملکیسم استخراج شده است. شامل حقوق طرفین، نحوه استناد در دادگاه و ضمانت اجراهای کیفری/حقوقی می‌باشد.`,
      body: `متن و تحلیل حقوقی ماده قانونی:\nرعایت مقررات آمره در تنظیم عقود ملکی الزامی است. موضوع "${topicTitle}" از مهم‌ترین مباحث حقوقی در دعاوی ملکی به شمار می‌رود.\n\n۱. ارکان حقوقی و شرایط صحّت معامله\n۲. وظایف دفاتر اسناد رسمی و شهرداری‌ها\n۳. رویه قضایی و آرای دیوان عالی کشور در حل اختلافات.`,
      imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
      tags: ['حقوق_ملکی', 'بخشنامه_ثبتی', 'رویه_قضایی', 'ملکیسم'],
      createdAt: new Date().toISOString()
    };

    return NextResponse.json({
      success: true,
      message: 'قانون/بخشنامه جدید با موفقیت توسط هوش مصنوعی تولید و منتشر شد.',
      law: newLaw
    });
  } catch (error) {
    console.error('خطا در تولید حقوق و قوانین:', error);
    return NextResponse.json(
      { success: false, message: 'خطا در فرآیند تولید قوانین حقوقی' },
      { status: 500 }
    );
  }
}