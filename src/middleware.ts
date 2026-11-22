import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export const locales = ['fa', 'en', 'de', 'fr', 'es', 'it', 'tr', 'zh', 'ar', 'ru'] as const;
export type AppLocale = (typeof locales)[number];
export const defaultLocale: AppLocale = 'fa';

const handleI18nRouting = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // نادیده گرفتن مسیرهای سیستمی، API و فایل‌های استاتیک
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // اجرای میدل‌ویر رسمی next-intl برای ریدایرکت/بازنویسی لوکیل و تنظیم هدرها
  const response = handleI18nRouting(request);

  // استخراج زبان فعلی از مسیر یا هدر تولیدشده توسط next-intl
  const segments = pathname.split('/');
  const pathLocale = locales.includes(segments[1] as AppLocale)
    ? (segments[1] as AppLocale)
    : undefined;
  const headerLocale = response.headers.get('x-middleware-request-x-next-intl-locale') as AppLocale | null;
  const currentLocale: AppLocale = pathLocale || (headerLocale && locales.includes(headerLocale) ? headerLocale : defaultLocale);

  // محافظت از مسیرهای پنل مدیریت (Admin)
  if (pathname.includes('/admin')) {
    const sessionToken =
      request.cookies.get('next-auth.session-token')?.value ||
      request.cookies.get('__Secure-next-auth.session-token')?.value;

    if (!sessionToken) {
      const loginUrl = new URL(`/${currentLocale}/auth/login`, request.url);
      loginUrl.searchParams.set('callbackUrl', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};