import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const path = url.pathname;

  // ۱. بررسی اینکه آیا در مسیر حروف بزرگ وجود دارد که نیاز به اصلاح داشته باشد
  // (برای جلوگیری از لوپ، بررسی می‌کنیم که آیا بخش‌هایی از مسیر بزرگ هستند)
  const lowerPath = path.toLowerCase();
  if (path !== lowerPath) {
    url.pathname = lowerPath;
    return NextResponse.redirect(url);
  }

  // ۲. بررسی مسیرهای مدیریتی و پنل‌های اختصاصی
  const isAdminRoute = lowerPath.includes("/admin");
  const isProtectedDashboard = 
    lowerPath.includes("/user") || 
    lowerPath.includes("/agency") || 
    lowerPath.includes("/company") || 
    lowerPath.includes("/expert") || 
    lowerPath.includes("/manager");

  if (isAdminRoute || isProtectedDashboard) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    // معماری Fail-Closed: اگر توکن وجود نداشته باشد، دسترسی بسته است
    if (!token) {
      const loginUrl = new URL("/fa/auth/login", req.url);
      loginUrl.searchParams.set("callbackUrl", encodeURI(req.url));
      return NextResponse.redirect(loginUrl);
    }

    // بررسی انحصاری بودن دسترسی ادمین برای سطوح SUPER_ADMIN و MANAGER
    if (isAdminRoute) {
      const role = token.role as string;
      if (role !== "SUPER_ADMIN" && role !== "MANAGER") {
        // هدایت کاربران عادی به پنل خودشان در صورت تلاش برای ورود به ادمین
        return NextResponse.redirect(new URL("/fa/user/dashboard", req.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * پوشش تمام مسیرهای زبان (مثلاً fa یا en) و بخش‌های مختلف پلتفرم
     * برای اینکه میدلور بتواند حروف بزرگ را اصلاح و دسترسی‌ها را کنترل کند
     */
    "/:locale(fa|en)/admin/:path*",
    "/:locale(fa|en)/user/:path*",
    "/:locale(fa|en)/agency/:path*",
    "/:locale(fa|en)/company/:path*",
    "/:locale(fa|en)/expert/:path*",
    "/:locale(fa|en)/manager/:path*",
  ],
};