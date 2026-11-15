import { NextResponse } from 'next/server';

const defaultAnalyses = [
  {
    id: '1',
    title: 'تحلیل جامع شاخص قیمت و پیش‌بینی تورم مسکن در مناطق ۲۲‌گانه تهران',
    category: 'تحلیل بازار',
    jobTarget: 'سرمایه‌گذاران',
    geo: 'تهران',
    format: 'گزارش تحلیلی',
    trendScore: '+۵.۲٪',
    riskLevel: 'کم‌ریسک',
    summary: 'ارزیابی حجم معاملات، نقدشوندگی، قیمت هر متر مربع و سنجش حباب قیمتی بر اساس داده‌های بانک مرکزی.',
    body: 'بررسی روند معاملات مسکن و تحلیل نسبت قیمت به اجاره (P/R) به همراه نمودارهای پیش‌بینی ۶ ماهه.',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=800&q=80',
    tags: ['تهران', 'شاخص_قیمت', 'تورم_مسکن'],
    views: 210,
    likes: 45,
    featured: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'سنجش سودآوری پروژه‌های ساختمانی در کلان‌شهرها و هزینه تمام‌شده ساخت',
    category: 'امار و سودآوری',
    jobTarget: 'سازندگان',
    geo: 'سایر شهرها',
    format: 'گزارش تخصصی',
    trendScore: '+۱۲.۴٪',
    riskLevel: 'متوسط',
    summary: 'تحلیل تاثیر افزایش قیمت میلگرد، سیمان و دستمزد بر سود خالص پروژه‌های ساختمانی ۱۴۰۵.',
    body: 'محاسبه دقیق هزینه ساخت هر متر مربع بنای مفید و غیرمفید به تفکیک کیفیت سازه و اسکلت.',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=800&q=80',
    tags: ['سازندگان', 'هزینه_ساخت', 'سودآوری'],
    views: 135,
    likes: 28,
    featured: false,
    createdAt: new Date().toISOString()
  }
];

export async function GET() {
  return NextResponse.json(defaultAnalyses);
}