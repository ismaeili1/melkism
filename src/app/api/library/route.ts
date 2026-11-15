import { NextResponse } from 'next/server';

const defaultResources = [
  {
    id: '1',
    title: 'دانشنامه جامع مقررات ملی ساختمان (مباحث ۲۲‌گانه)',
    category: 'دانشنامه جامع',
    author: 'گروه تدوین مقررات ملی',
    year: '۱۴۰۴',
    type: 'کتاب مرجع',
    summary: 'مرجع کامل تمامی مباحث مقررات ملی ساختمان شامل ضوابط فنی، ایمنی، سازه، تأسیسات و پدافند غیرعامل.',
    body: 'مشروح مباحث ۲۲گانه مقررات ملی ساختمان به همراه الزامات اجرایی و استانداردهای پدافند غیرعامل.',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80',
    tags: ['مقررات_ملی', 'استاندارد', 'ساختمان'],
    views: 142,
    likes: 38,
    featured: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'تحلیل اقتصادی بازدهی سرمایه‌گذاری در پروژه‌های مشارکت در ساخت',
    category: 'مقالات پژوهشی',
    author: 'دکتر محمدرضا حسینی',
    year: '۱۴۰۵',
    type: 'مقاله علمی',
    summary: 'پژوهش کاربردی بر روی نرخ بازگشت سرمایه (IRR)، مدیریت مخاطرات حقوقی و مدل‌سازی مالی قراردادهای مشارکت.',
    body: 'مدل‌سازی مالی قراردادهای مشارکت در ساخت و تحلیل نرخ بازگشت سرمایه در مناطق مختلف شهری.',
    imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    tags: ['سرمایه_گذاری', 'مشارکت_در_ساخت', 'اقتصاد_مسکن'],
    views: 89,
    likes: 19,
    featured: false,
    createdAt: new Date().toISOString()
  }
];

export async function GET() {
  return NextResponse.json(defaultResources);
}