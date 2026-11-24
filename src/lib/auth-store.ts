export type MelkismRole =
  | "SUPER_ADMIN"
  | "ADMIN"
  | "MANAGER"
  | "COMPANY"
  | "AGENCY"
  | "EXPERT"
  | "USER"
  | "GUEST";

export type VerificationStatus = "UNVERIFIED" | "PENDING_KYC" | "VERIFIED" | "RESTRICTED";

export interface MelkismUser {
  id: string;
  username: string;
  password: string;
  fullName: string;
  email: string;
  mobile: string;
  role: MelkismRole;
  tradeSpecialty: string;
  verificationStatus: VerificationStatus;
  isActive: boolean;
  canAdminManage: boolean;
  authProvider: "LOCAL" | "GOOGLE";
  createdAt: string;
  companyName?: string;
  website?: string;
  bio?: string;
}

const USERS_DB_KEY = "melkism_users_master_db_v2";
const SESSION_KEY = "melkism_active_user_session_v2";
const THEME_KEY = "melkism_ui_theme_v1";

export const DEFAULT_MASTER_USERS: MelkismUser[] = [
  {
    id: "usr-super-01",
    username: "superadmin",
    password: "Melk@Super2026",
    fullName: "دکتر مرتضی اسماعیلی",
    email: "super@melkism.com",
    mobile: "09120000001",
    role: "SUPER_ADMIN",
    tradeSpecialty: "مدیریت کلان پلتفرم",
    verificationStatus: "VERIFIED",
    isActive: true,
    canAdminManage: false,
    authProvider: "LOCAL",
    createdAt: "1405/01/01",
    companyName: "MELKIST Core",
  },
  {
    id: "usr-admin-01",
    username: "admin_core",
    password: "Melk@Admin2026",
    fullName: "سارا رادمنش",
    email: "admin@melkism.com",
    mobile: "09120000002",
    role: "ADMIN",
    tradeSpecialty: "مدیر عملیاتی سیستم",
    verificationStatus: "VERIFIED",
    isActive: true,
    canAdminManage: true,
    authProvider: "LOCAL",
    createdAt: "1405/01/10",
  },
  {
    id: "usr-mgr-01",
    username: "manager_cms",
    password: "Melk@Mgr2026",
    fullName: "نوید کریمی",
    email: "manager@melkism.com",
    mobile: "09120000003",
    role: "MANAGER",
    tradeSpecialty: "مدیر محتوا و هوش بازار",
    verificationStatus: "VERIFIED",
    isActive: true,
    canAdminManage: true,
    authProvider: "LOCAL",
    createdAt: "1405/02/05",
  },
  {
    id: "usr-comp-01",
    username: "alton_build",
    password: "Melk@Comp2026",
    fullName: "شرکت انبوه‌سازی سازندگان آلتون",
    email: "info@alton-build.com",
    mobile: "09121112233",
    role: "COMPANY",
    tradeSpecialty: "شرکت سازنده و پیش‌فروش",
    verificationStatus: "VERIFIED",
    isActive: true,
    canAdminManage: true,
    authProvider: "LOCAL",
    createdAt: "1405/03/12",
    companyName: "سازندگان آلتون",
  },
  {
    id: "usr-agcy-01",
    username: "agency_pars",
    password: "Melk@Agcy2026",
    fullName: "دفتر املاک مرکزی پارس",
    email: "pars.agency@melkism.com",
    mobile: "09122223344",
    role: "AGENCY",
    tradeSpecialty: "آژانس املاک",
    verificationStatus: "VERIFIED",
    isActive: true,
    canAdminManage: true,
    authProvider: "LOCAL",
    createdAt: "1405/04/18",
  },
  {
    id: "usr-expr-01",
    username: "expert_arch",
    password: "Melk@Expr2026",
    fullName: "مهندس لیلا شریفی",
    email: "arch.expert@melkism.com",
    mobile: "09123334455",
    role: "EXPERT",
    tradeSpecialty: "مشاور معماری و ارزیابی فنی",
    verificationStatus: "VERIFIED",
    isActive: true,
    canAdminManage: true,
    authProvider: "LOCAL",
    createdAt: "1405/05/22",
  },
  {
    id: "usr-user-01",
    username: "user_rezaei",
    password: "Melk@User2026",
    fullName: "علی رضایی",
    email: "ali.rezaei@melkism.com",
    mobile: "09124445566",
    role: "USER",
    tradeSpecialty: "کاربر عادی / متقاضی",
    verificationStatus: "UNVERIFIED",
    isActive: true,
    canAdminManage: true,
    authProvider: "LOCAL",
    createdAt: "1405/06/30",
  },
];

export function getDashboardRouteForRole(locale: string, role: MelkismRole): string {
  switch (role) {
    case "SUPER_ADMIN":
    case "ADMIN":
      return `/${locale}/admin/dashboard`;
    case "MANAGER":
      return `/${locale}/manager/dashboard`;
    case "COMPANY":
      return `/${locale}/company/dashboard`;
    case "AGENCY":
      return `/${locale}/agency/dashboard`;
    case "EXPERT":
      return `/${locale}/expert/dashboard`;
    case "USER":
      return `/${locale}/user/dashboard`;
    default:
      return `/${locale}`;
  }
}

export function getMasterUsers(): MelkismUser[] {
  if (typeof window === "undefined") return DEFAULT_MASTER_USERS;
  try {
    const raw = window.localStorage.getItem(USERS_DB_KEY);
    if (!raw) {
      window.localStorage.setItem(USERS_DB_KEY, JSON.stringify(DEFAULT_MASTER_USERS));
      return DEFAULT_MASTER_USERS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_MASTER_USERS;
  } catch {
    return DEFAULT_MASTER_USERS;
  }
}

export function saveMasterUsers(users: MelkismUser[]): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(USERS_DB_KEY, JSON.stringify(users));
}

export async function persistSessionAndRedirect(
  user: MelkismUser,
  targetUrl: string
): Promise<void> {
  if (typeof window === "undefined") return;

  const sessionPayload = {
    user,
    role: user.role,
    loggedInAt: new Date().toISOString(),
  };

  // ۱. ذخیره در حافظه اصلی مرورگر
  window.localStorage.setItem(SESSION_KEY, JSON.stringify(sessionPayload));
  // سازگاری با کلیدهای احتمالی قبلی در هدر و داشبوردها
  window.localStorage.setItem("melkism_user", JSON.stringify(user));
  window.localStorage.setItem("user", JSON.stringify(user));

  // ۲. تنظیم کوکی برای خواندن در Middleware و Server Components
  const encodedRole = encodeURIComponent(user.role);
  const encodedUser = encodeURIComponent(
    JSON.stringify({
      id: user.id,
      username: user.username,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    })
  );
  document.cookie = `melkism_role=${encodedRole}; path=/; max-age=86400; SameSite=Lax`;
  document.cookie = `melkism_session=${encodedUser}; path=/; max-age=86400; SameSite=Lax`;

  // ۳. تلاش برای همگام‌سازی با API سمت سرور (اگر اندپوینت در پروژه موجود باشد)
  try {
    await fetch("/api/auth/demo-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
  } catch {
    // در صورت نبود اندپوینت سرور، کوکی و localStorage نشست را فعال نگه می‌دارند
  }

  // ۴. انتقال کامل (Full Navigation) تا هدر، Middleware و پنل مقصد نشست را بلافاصله بخوانند
  window.location.assign(targetUrl);
}

export function getSavedTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  const saved = window.localStorage.getItem(THEME_KEY);
  return saved === "dark" ? "dark" : "light";
}

export function setSavedTheme(theme: "light" | "dark"): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(THEME_KEY, theme);
}