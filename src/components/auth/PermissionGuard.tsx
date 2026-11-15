"use client";

import { useSession } from "next-auth/react";
import { ReactNode } from "react";

type PermissionGuardProps = {
  permissionCode: string;
  children: ReactNode;
  fallback?: ReactNode;
};

export default function PermissionGuard({
  permissionCode,
  children,
  fallback = null,
}: PermissionGuardProps) {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return null; // برای جلوگیری از پرش تصویر و حفظ پنهان‌سازی کامل
  }

  const userRole = session?.user?.role || "GUEST";

  // سوپرادمین دسترسی مطلق دارد
  if (userRole === "SUPER_ADMIN") {
    return <>{children}</>;
  }

  // چک کردن مجوزهای اعطاشده به کاربر از نشست (Session)
  const userPermissions = (session?.user as any)?.permissions || [];

  if (!userPermissions.includes(permissionCode)) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}