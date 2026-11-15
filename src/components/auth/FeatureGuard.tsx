"use client";

import { useEffect, useState, ReactNode } from "react";

interface FeatureGuardProps {
  allowedRoles: string[];
  children: ReactNode;
  fallback?: ReactNode;
}

export default function FeatureGuard({ 
  allowedRoles, 
  children, 
  fallback = null // پیش‌فرض: هیچ چیزی (حتی پیام خطا) نمایش داده نشود تا صفحه شلوغ نشود
}: FeatureGuardProps) {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function checkUser() {
      try {
        const res = await fetch("/api/auth/me");
        if (res.ok) {
          const data = await res.json();
          // بررسی دقیق ساختار داده‌های برگشتی از API
          setUserRole(data.role || data.user?.role || "USER");
        } else {
          // اگر کاربر لاگین نباشد یا خطا رخ دهد، نقش پیش‌فرض USER در نظر گرفته می‌شود
          setUserRole("USER");
        }
      } catch (err) {
        console.error("خطا در اعتبارسنجی نقش کاربر:", err);
        setUserRole("USER");
      } finally {
        setLoading(false);
      }
    }
    checkUser();
  }, []);

  // 🔒 نکته امنیتی مهم: تا زمانی که بارگذاری تمام نشده، هیچ محتوایی رندر نمی‌شود (جلوگیری از نمایش اولیه برای کاربران عادی)
  if (loading) {
    return null; 
  }

  // اگر نقش کاربر دقیقاً جزء نقش‌های مجاز باشد، ابزار رندر می‌شود
  if (userRole && allowedRoles.includes(userRole)) {
    return <>{children}</>;
  }

  // در غیر این صورت (برای کاربران عادی یا نقش‌های غیرمجاز)، کاملاً مخفی می‌ماند
  return <>{fallback}</>;
}