import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// ۱۰ زبان پشتیبانی‌شده در پلتفرم ملکیست
const locales = ['fa', 'en', 'ru', 'fr', 'zh', 'de', 'es', 'it', 'ar', 'tr'] as const;
const defaultLocale = 'fa';

function getLocale(pathname: string): string {
  const pathnameSegments = pathname.split('/');
  const potentialLocale = pathnameSegments[1];
  if (locales.includes(potentialLocale as any)) {
    return potentialLocale;
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  let response = NextResponse.next();

  if (!pathnameHasLocale) {
    const savedLocale = request.cookies.get('NEXT_LOCALE')?.value;
    const targetLocale = savedLocale && locales.includes(savedLocale as any) 
      ? savedLocale 
      : defaultLocale;

    const url = request.nextUrl.clone();
    url.pathname = `/${targetLocale}${pathname === '/' ? '' : pathname}`;
    return NextResponse.redirect(url);
  }

  const currentLocale = getLocale(pathname);

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

  response.cookies.set('NEXT_LOCALE', currentLocale, { 
    path: '/', 
    maxAge: 31536000, 
    sameSite: 'lax' 
  });

  return response;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};