import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { method, identifier, code, password, isGoogle } = body;

    // ۱. ورود ویژه ادمین
    if (identifier === "admin@melkism.com" && password === "admin123") {
      return NextResponse.json({
        success: true,
        user: {
          id: "usr_admin",
          name: "مدیر ارشد ملکیسم",
          email: "admin@melkism.com",
          phone: "09120000000",
          role: "admin",
          isVerified: true,
          subscription: "vip_unlimited",
          country: "ایران",
          city: "تهران",
          district: "منطقه ۱",
          job: "مدیر سیستم",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
        }
      });
    }

    // ۲. ورود سریع با جیمیل (Google OAuth Mock)
    if (isGoogle) {
      return NextResponse.json({
        success: true,
        message: "ورود موفقیت‌آمیز با حساب گوگل",
        user: {
          id: "usr_google_" + Date.now(),
          name: "کاربر گوگل",
          email: identifier,
          role: "user",
          isVerified: true,
          subscription: "free",
          avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80"
        }
      });
    }

    // ۳. تایید کد ۶ رقمی موبایل / ایمیل
    if (code) {
      if (code === "123456") {
        return NextResponse.json({
          success: true,
          message: "کد تأیید صحیح است.",
          user: {
            id: "usr_" + Date.now(),
            name: "کاربر احراز شده",
            identifier: identifier,
            role: "user",
            isVerified: true,
            subscription: "free"
          }
        });
      } else {
        return NextResponse.json({ success: false, message: "کد ۶ رقمی وارد شده اشتباه است (کد تست: 123456)" }, { status: 400 });
      }
    }

    // ۴. ارسال کد ۶ رقمی
    const generatedCode = "123456"; // در حالت واقعی از SMS / Email Provider استفاده می‌شود
    return NextResponse.json({
      success: true,
      step: "verify_code",
      message: `کد ۶ رقمی تأیید به ${identifier} ارسال شد (کد تست: ${generatedCode})`
    });

  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}