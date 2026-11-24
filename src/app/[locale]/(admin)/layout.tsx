"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import { useLocalizedText } from "@/hooks/useLocalizedText";

interface AdminLayoutProps {
  children: React.ReactNode;
}

type LayoutRole = "SUPER_ADMIN" | "ADMIN";

function resolveLayoutRole(): LayoutRole {
  if (typeof window === "undefined") return "ADMIN";

  try {
    const rawSession = window.localStorage.getItem("melkism_active_user_session_v2");
    if (rawSession) {
      const parsed = JSON.parse(rawSession);
      const r = String(parsed?.user?.role || parsed?.role || "").toUpperCase();
      if (r === "SUPER_ADMIN") return "SUPER_ADMIN";
      if (r === "ADMIN") return "ADMIN";
    }
  } catch {
    // نادیده گرفتن خطای پارس
  }

  try {
    const rawUser =
      window.localStorage.getItem("melkism_user") || window.localStorage.getItem("user");
    if (rawUser) {
      const parsed = JSON.parse(rawUser);
      const r = String(parsed?.role || "").toUpperCase();
      if (r === "SUPER_ADMIN") return "SUPER_ADMIN";
      if (r === "ADMIN") return "ADMIN";
    }
  } catch {
    // نادیده گرفتن خطای پارس
  }

  try {
    const match = document.cookie.match(/(?:^|;\s*)melkism_role=([^;]*)/);
    if (match?.[1]) {
      const r = decodeURIComponent(match[1]).trim().toUpperCase();
      if (r === "SUPER_ADMIN") return "SUPER_ADMIN";
      if (r === "ADMIN") return "ADMIN";
    }
  } catch {
    // نادیده گرفتن خطای خواندن کوکی
  }

  return "ADMIN";
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const isRtl = ["fa", "ar"].includes(locale);
  const dir = isRtl ? "rtl" : "ltr";

  const { t, num } = useLocalizedText("AdminShell");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [role, setRole] = useState<LayoutRole>("ADMIN");

  useEffect(() => {
    setRole(resolveLayoutRole());
  }, [pathname]);

  const isSuperAdmin = role === "SUPER_ADMIN";

  const allNavItems = [
    {
      key: "navOverview",
      customLabel: isSuperAdmin
        ? undefined
        : isRtl
        ? "میز کار مدیر سیستم"
        : "Admin Workspace",
      href: `/${locale}/admin/dashboard`,
      icon: "🎛️",
      superOnly: false,
    },
    { key: "navUsersRoles", href: `/${locale}/admin/users`, icon: "👥", superOnly: false },
    { key: "navContentHub", href: `/${locale}/admin/content-hub`, icon: "🗂️", superOnly: false },
    { key: "navManagerPanel", href: `/${locale}/manager/dashboard`, icon: "📋", superOnly: false },
    { key: "navFinance", href: `/${locale}/admin/financial`, icon: "💰", superOnly: false },
    {
      key: "navScenarios",
      href: `/${locale}/admin/transactions/scenarios`,
      icon: "📣",
      superOnly: false,
    },
    { key: "navSecurity", href: `/${locale}/admin/security`, icon: "🛡️", superOnly: true },
    { key: "navSettings", href: `/${locale}/admin/settings`, icon: "⚙️", superOnly: true },
    { key: "navReports", href: `/${locale}/admin/reports`, icon: "📊", superOnly: false },
  ];

  const navItems = allNavItems.filter((item) => isSuperAdmin || !item.superOnly);

  const isActive = (href: string) => pathname === href || pathname?.startsWith(`${href}/`);

  return (
    <div
      dir={dir}
      className={`min-h-screen bg-slate-100 text-slate-800 flex ${
        isRtl ? "dir-rtl" : "dir-ltr"
      } font-sans`}
    >
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-slate-950/50 backdrop-blur-xs lg:hidden"
        />
      )}

      <aside
        className={`fixed lg:sticky top-0 z-40 h-screen w-72 shrink-0 bg-slate-900 text-slate-100 border-slate-800 flex flex-col justify-between transition-transform duration-200 ${
          isRtl ? "right-0 border-l" : "left-0 border-r"
        } ${
          sidebarOpen
            ? "translate-x-0"
            : isRtl
            ? "translate-x-full lg:translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-5 space-y-5 overflow-y-auto">
          <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-800">
            <div>
              <div className="text-sm font-black text-white tracking-tight">
                {isSuperAdmin
                  ? t("brandTitle")
                  : isRtl
                  ? "پنل مدیر سیستم ملکیسم"
                  : "MELKISM Admin Panel"}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {isSuperAdmin
                  ? t("brandSubtitle")
                  : isRtl
                  ? "مدیریت کاربران، محتوا و گزارش‌ها"
                  : "Users, content & reports desk"}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-slate-400 hover:text-white text-xs px-2 py-1 rounded-lg bg-slate-800"
            >
              {t("closeSidebar")}
            </button>
          </div>

          {isSuperAdmin ? (
            <div className="px-3 py-2 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-300 text-[11px] font-bold">
              {t("superAdminBadge", { count: num(4) })}
            </div>
          ) : (
            <div className="px-3 py-2 rounded-xl bg-indigo-500/15 border border-indigo-400/30 text-indigo-200 text-[11px] font-bold">
              {isRtl ? "سطح دسترسی: مدیر سیستم (ADMIN)" : "Access Role: System Admin (ADMIN)"}
            </div>
          )}

          <nav className="space-y-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition ${
                    active
                      ? isSuperAdmin
                        ? "bg-amber-500 text-slate-950 shadow-sm"
                        : "bg-indigo-600 text-white shadow-sm"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <span className="text-base leading-none">{item.icon}</span>
                  <span className="truncate">{item.customLabel ?? t(item.key)}</span>
                </Link>
              );
            })}

            {!isSuperAdmin && (
              <Link
                href={`/${locale}/admin/dashboard?escalate=1`}
                onClick={() => setSidebarOpen(false)}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition text-amber-300 hover:bg-slate-800 hover:text-amber-200 mt-2 border border-amber-500/20"
              >
                <span className="text-base leading-none">📩</span>
                <span className="truncate">
                  {isRtl ? "ارجاع و پیام به سوپرادمین" : "Escalate to Super Admin"}
                </span>
              </Link>
            )}
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800">
          <Link
            href={`/${locale}`}
            className="w-full block text-center text-xs font-bold py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition"
          >
            {t("backToSite")}
          </Link>
        </div>
      </aside>

      <div className="flex-1 min-w-0 flex flex-col">
        <header className="lg:hidden sticky top-0 z-20 bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
          <span className="text-xs font-black text-slate-900">
            {isSuperAdmin
              ? t("brandTitle")
              : isRtl
              ? "پنل مدیر سیستم ملکیسم"
              : "MELKISM Admin Panel"}
          </span>
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl"
          >
            ☰ {t("openSidebar")}
          </button>
        </header>

        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
}