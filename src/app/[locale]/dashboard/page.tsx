"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useLocalizedText } from "@/hooks/useLocalizedText";

export default function DashboardRouter() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const { t } = useLocalizedText("DashboardRouter");

  useEffect(() => {
    async function checkUserAndRedirect() {
      try {
        const res = await fetch("/api/auth/me");
        if (res.ok) {
          const user = await res.json();

          switch (user.role) {
            case "SUPER_ADMIN":
            case "ADMIN":
              router.replace(`/${locale}/admin/dashboard`);
              break;
            case "MANAGER":
              router.replace(`/${locale}/admin/news`);
              break;
            case "COMPANY":
              router.replace(`/${locale}/company-panel`);
              break;
            case "AGENCY":
              router.replace(`/${locale}/agency-panel`);
              break;
            case "EXPERT":
              router.replace(`/${locale}/agent/dashboard`);
              break;
            default:
              router.replace(`/${locale}/profile`);
              break;
          }
        } else {
          router.replace(`/${locale}/login`);
        }
      } catch (err) {
        console.error("Dashboard redirect error:", err);
        router.replace(`/${locale}/login`);
      } finally {
        setLoading(false);
      }
    }

    checkUserAndRedirect();
  }, [router, locale]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-slate-600 text-sm font-medium font-sans">
        {t("loadingRedirect")}
      </div>
    );
  }

  return null;
}