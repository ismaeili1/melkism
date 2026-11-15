import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // اینجا بر اساس سیستم لاگین پروژه خودت (مثل NextAuth یا کوکی سفارشی) اطلاعات کاربر را می‌خوانید
    // به عنوان نمونه موقت برای تست، می‌توانید نقش پیش‌فرض یا اطلاعات کاربر دلخواه را برگردانید:
    
    // مثال: اگر کاربر ادمین است، نقش را ADMIN برگردانید تا دکمه‌ها تست شوند
    return NextResponse.json({
      id: "1",
      name: "مدیر سیستم",
      email: "admin@melkism.com",
      role: "ADMIN" // یا "USER" برای تست حالت کاربر عادی
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}