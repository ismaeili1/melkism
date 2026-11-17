import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale } from './src/i18n/config';

const handleI18nRouting = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'always',
});

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // نادیده گرفتن مسیرهای سیستمی و فایل‌های استاتیک
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // اجرای میدل‌ویر رسمی next-intl برای ساخت هدرها و تشخیص دقیق لوکیل
  const response = handleI18nRouting(request);

  // استخراج زبان فعلی از مسیر
  const segments = pathname.split('/');
  const currentLocale = locales.includes(segments[1] as any)
    ? segments[1]
    : defaultLocale;

  // محافظت از مسیرهای پنل مدیریت (Admin)
  if (pathname.includes('/admin')) {
    const sessionToken =
      request.cookies.get('next-auth.session-token')?.value ||
      request.cookies.get('__Secure-next-auth.session-token')?.value;

    if (!sessionToken) {
      const loginUrl = new URL(`/${currentLocale}/auth/login`, request.url);
      loginUrl.searchParams.set('callbackUrl', encodeURI(request.url));
      return NextResponse.redirect(loginUrl);
    }
  }

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images).*)'],
};