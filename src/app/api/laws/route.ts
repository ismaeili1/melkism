import { NextResponse } from 'next/server';

const defaultLaws = [
  {
    id: '1',
    title: 'قانون الزام به ثبت رسمی معاملات اموال غیرمنقول و مفاد اجرایی آن',
    category: 'قوانین و بخشنامه‌ها',
    jobTarget: 'مشاوران املاک',
    geo: 'ایران',
    format: 'قانون مصوب',
    summary: 'تحلیل جامع تضادهای سند عادی (قولنامه‌ای) با سند رسمی، ابطال اسناد عادی در دادگاه‌ها و الزامات سامانه کاتب.',
    body: 'مراحل اجرای قانون الزام به ثبت رسمی معاملات و بررسی تکالیف قانونی مشاوران املاک و دفاتر اسناد رسمی.',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    tags: ['سند_رسمی', 'قانون_الزام', 'ثبت_اسناد'],
    views: 340,
    likes: 62,
    featured: true,
    createdAt: new Date().toISOString()
  },
  {
    id: '2',
    title: 'بخشنامه ضوابط جدید کمیسیون ماده ۱۰۰ شهرداری و جریمه کسر پارکینگ',
    category: 'مقررات شهرداری',
    jobTarget: 'سازندگان',
    geo: 'تهران',
    format: 'بخشنامه اجرایی',
    summary: 'بررسی مصوبات جدید شورای عالی شهرسازی در خصوص تخلفات ساختمانی، قلع بنا و نحوه محاسبه جریمه‌ها.',
    body: 'تحلیل حقوقی جریمه‌های کمیسیون ماده ۱۰۰ شهرداری و رویه دیوان عدالت اداری در ابطال آرای قلع بنا.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    tags: ['کمیسیون_ماده_۱۰۰', 'شهرداری', 'تخلفات_ساختمانی'],
    views: 185,
    likes: 41,
    featured: false,
    createdAt: new Date().toISOString()
  }
];

export async function GET() {
  return NextResponse.json(defaultLaws);
}