import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const profileData = await req.json();
    
    // ارزیابی الزامی بودن اطلاعات پایه
    if (!profileData.fullName || !profileData.city || !profileData.phone) {
      return NextResponse.json({
        success: false,
        message: "لطفاً موارد اجباری (نام، شماره تماس و شهر) را تکمیل کنید."
      }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: "پروفایل با موفقیت به‌روزرسانی شد. دسترسی‌های سطح بالاتر فعال گردید.",
      user: {
        ...profileData,
        isVerified: true
      }
    });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}