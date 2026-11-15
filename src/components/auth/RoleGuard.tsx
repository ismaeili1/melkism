"use client";

import { useEffect, useState, ReactNode } from "react";

interface RoleGuardProps {
  allowedRoles: string[];
  children: ReactNode;
  fallback?: ReactNode;
}

export default function RoleGuard({ allowedRoles, children, fallback = null }: RoleGuardProps) {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchUserRole() {
      try {
        const res = await fetch("/api/auth/me");
        if (res.ok) {
          const data = await res.json();
          setUserRole(data.role);
        }
      } catch (err) {
        console.error("خطا در دریافت نقش کاربر:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchUserRole();
  }, []);

  if (loading) {
    return <div className="text-xs text-gray-400 p-2">در حال اعتبارسنجی دسترسی...</div>;
  }

  // اگر نقش کاربر جزو نقش‌های مجاز باشد، محتوا رندر می‌شود، در غیر این صورت فالبک یا تهی
  if (userRole && allowedRoles.includes(userRole)) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
}