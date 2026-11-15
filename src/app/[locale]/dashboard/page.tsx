"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardRouter() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function checkUserAndRedirect() {
      try {
        const res = await fetch("/api/auth/me");
        if (res.ok) {
          const user = await res.json();
          
          // هدایت هوشمند بر اساس ۶ سطح نقش استاندارد ملکیسم
          switch (user.role) {
            case "SUPER_ADMIN":
            case "ADMIN":
              router.replace("/fa/admin/dashboard");
              break;
            case "MANAGER":
              router.replace("/fa/admin/news"); // پنل مدیریت محتوا و اخبار هوش مصنوعی
              break;
            case "COMPANY":
              router.replace("/fa/company-panel");
              break;
            case "AGENCY":
              router.replace("/fa/agency-panel");
              break;
            case "EXPERT":
              router.replace("/fa/agent/dashboard");
              break;
            default:
              router.replace("/fa/profile");
              break;
          }
        } else {
          router.replace("/fa/login");
        }
      } catch (err) {
        console.error("خطا در هدایت داشبورد:", err);
        router.replace("/fa/login");
      } finally {
        setLoading(false);
      }
    }

    checkUserAndRedirect();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-slate-600 text-sm font-medium">
        در حال بارگذاری و تشخیص سطح دسترسی پنل...
      </div>
    );
  }

  return null;
}