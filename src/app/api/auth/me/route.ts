import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    // بازگرداندن داده‌های کاربر موقت جهت تست سطح دسترسی
    // می‌توانید نقش را به "USER" یا "ADMIN" تغییر دهید تا رفتار فرانت‌اند را تست کنید
    return NextResponse.json({
      id: "admin-user-id",
      name: "مدیر سیستم ملکیسم",
      email: "admin@melkism.com",
      role: "ADMIN"
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}