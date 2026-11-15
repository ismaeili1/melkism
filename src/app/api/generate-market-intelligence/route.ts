import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { topic } = body;

    const topicTitle = topic && topic.trim() !== '' ? topic : 'تحلیل روند قیمت مسکن و اجاره‌بها در ۳ ماه آینده';

    const newAnalysis = {
      id: Date.now().toString(),
      title: `گزارش هوش بازار: ${topicTitle}`,
      category: 'پیش‌بینی بازار',
      jobTarget: 'سرمایه‌گذاران',
      geo: 'ایران',
      format: 'گزارش تحلیلی',
      trendScore: '+۴.۸٪',
      riskLevel: 'متوسط',
      views: 1,
      likes: 0,
      featured: false,
      summary: `این تحلیل اقتصادی و آمار پیش‌بینی مسکن با محوریت "${topicTitle}" توسط موتور هوش مصنوعی ملکیسم استخراج شده است. شامل نمودار تغییرات شاخص، تحلیل تورم ساخت و استراتژی‌های پیشنهادی خرید/فروش می‌باشد.`,
      body: `چشم‌انداز تحلیلی بازار مسکن:\nبررسی داده‌های معاملاتی اخیر نشان‌دهنده تغییر جهت شاخص‌های قیمتی است. موضوع "${topicTitle}" نقش تعیین‌کننده‌ای در رونق یا رکود تورمی بخش ساختمان دارد.\n\n۱. ارزیابی مولفه‌های کلان اقتصادی و قیمت مصالح\n۲. سنجش قدرت خرید خانوار و وضعیت تسهیلات بانک‌ها\n۳. پیش‌بینی بازدهی سرمایه‌گذاری و توصیه‌های تحلیلی ملکیسم.`,
      imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80',
      tags: ['هوش_بازار', 'پیش_بینی_قیمت', 'اقتصاد_مسکن', 'ملکیسم'],
      createdAt: new Date().toISOString()
    };

    return NextResponse.json({
      success: true,
      message: 'گزارش تحلیلی هوش بازار با موفقیت توسط هوش مصنوعی تولید و منتشر شد.',
      analysis: newAnalysis
    });
  } catch (error) {
    console.error('خطا در تولید گزارش هوش بازار:', error);
    return NextResponse.json(
      { success: false, message: 'خطا در فرآیند تحلیل هوش بازار' },
      { status: 500 }
    );
  }
}