"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useLocalizedText } from "@/hooks/useLocalizedText";
import { getMasterUsers, MelkismUser } from "@/lib/auth-store";

type ActiveAdminRole = "SUPER_ADMIN" | "ADMIN";
type AdminSection = "OVERVIEW" | "USERS" | "CONTENT" | "ESCALATION";
type EscalationType =
  | "CASE"
  | "PROBLEM"
  | "ISSUE"
  | "SUGGESTION"
  | "MESSAGE"
  | "REQUEST";

interface EscalationRecord {
  id: string;
  type: EscalationType;
  subject: string;
  body: string;
  createdAt: string;
  fromRole: "ADMIN";
  status: "PENDING";
}

const ESCALATION_STORAGE_KEY = "melkism_superadmin_escalations_v1";

function detectCurrentAdminRole(): ActiveAdminRole {
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

export default function AdminDashboardPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const isRtl = ["fa", "ar"].includes(locale);
  const dir = isRtl ? "rtl" : "ltr";

  const { t, num } = useLocalizedText("SuperAdminDashboard");
  const [role, setRole] = useState<ActiveAdminRole>("ADMIN");
  const [activeSection, setActiveSection] = useState<AdminSection>("OVERVIEW");
  const [localUsers, setLocalUsers] = useState<MelkismUser[]>([]);

  const [escalationType, setEscalationType] = useState<EscalationType>("REQUEST");
  const [escalationSubject, setEscalationSubject] = useState("");
  const [escalationBody, setEscalationBody] = useState("");
  const [escalations, setEscalations] = useState<EscalationRecord[]>([]);
  const [escalationNotice, setEscalationNotice] = useState<string | null>(null);

  const [stats, setStats] = useState({
    usersCount: 0,
    propertiesCount: 0,
    pendingTransactions: 0,
    transactionsTotal: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setRole(detectCurrentAdminRole());
    setLocalUsers(getMasterUsers());

    try {
      const saved = window.localStorage.getItem(ESCALATION_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setEscalations(parsed);
        }
      }
    } catch {
      // نادیده گرفتن خطای خواندن
    }
  }, []);

  useEffect(() => {
    async function fetchAdminData() {
      try {
        const res = await fetch("/api/admin/stats");
        const json = await res.json();
        if (res.ok && json.success) {
          setStats(json.data);
        }
      } catch (err) {
        console.error("Error fetching admin stats:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchAdminData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-500 text-xs font-medium font-sans">
        {t("loadingCommandHub")}
      </div>
    );
  }

  if (role === "SUPER_ADMIN") {
    return (
      <div
        className={`min-h-screen bg-slate-100 text-slate-800 p-6 ${
          isRtl ? "dir-rtl" : "dir-ltr"
        } font-sans space-y-6`}
        dir={dir}
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
          <div>
            <span className="text-[11px] font-bold text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full inline-block mb-1.5">
              {t("accessBadge")}
            </span>
            <h1 className="text-2xl font-black text-slate-900">{t("pageTitle")}</h1>
            <p className="text-xs text-slate-500 mt-1">{t("pageSubtitle")}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link
              href={`/${locale}/admin/security/permissions`}
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm whitespace-nowrap"
            >
              🔐 {t("btnRbac")}
            </Link>
            <Link
              href={`/${locale}/admin/financial`}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm whitespace-nowrap"
            >
              💰 {t("btnFinance")}
            </Link>
            <Link
              href={`/${locale}/admin/security`}
              className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm whitespace-nowrap"
            >
              🛡️ {t("btnSecurity")}
            </Link>
            <Link
              href={`/${locale}/admin/settings`}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm whitespace-nowrap"
            >
              ⚙️ {t("btnSettings")}
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-2">
            <span className="text-xs text-slate-400 font-medium">{t("kpiUsersLabel")}</span>
            <h3 className="text-2xl font-black text-slate-900">
              {t("kpiUsersValue", { count: num(stats.usersCount || localUsers.length) })}
            </h3>
            <span className="text-[10px] text-emerald-600 font-bold block">● {t("kpiUsersSub")}</span>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-2">
            <span className="text-xs text-slate-400 font-medium">{t("kpiContentLabel")}</span>
            <h3 className="text-2xl font-black text-slate-900">
              {t("kpiContentValue", { count: num(stats.propertiesCount) })}
            </h3>
            <span className="text-[10px] text-blue-600 font-bold block">{t("kpiContentSub")}</span>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-2">
            <span className="text-xs text-slate-400 font-medium">{t("kpiRevenueLabel")}</span>
            <h3 className="text-2xl font-black text-slate-900">{num(stats.transactionsTotal)}</h3>
            <span className="text-[10px] text-emerald-600 font-bold block">{t("kpiRevenueSub")}</span>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-2">
            <span className="text-xs text-slate-400 font-medium">{t("kpiPendingLabel")}</span>
            <h3 className="text-2xl font-black text-rose-600">
              {t("kpiPendingValue", { count: num(stats.pendingTransactions || 0) })}
            </h3>
            <span className="text-[10px] text-rose-500 font-bold block">{t("kpiPendingSub")}</span>
          </div>
        </div>
      </div>
    );
  }

  // نمای اختصاصی نقش ADMIN (بدون دسترسی به اطلاعات یا تغییر سوپرادمین، با امکان ارجاع به سوپرادمین)
  const nonSuperAdminUsers = localUsers.filter(
    (u) => String(u.role || "").toUpperCase() !== "SUPER_ADMIN"
  );
  const activeUsersCount = nonSuperAdminUsers.filter((u) => u.isActive).length;

  const escalationOptions: { value: EscalationType; fa: string; en: string }[] = [
    { value: "CASE", fa: "ارجاع مورد / پرونده", en: "Case / Item" },
    { value: "PROBLEM", fa: "مشکل سیستمی یا فنی", en: "System Problem" },
    { value: "ISSUE", fa: "مسئله مدیریتی یا کاربری", en: "Operational Issue" },
    { value: "SUGGESTION", fa: "پیشنهاد اجرایی", en: "Suggestion" },
    { value: "MESSAGE", fa: "پیام به سوپرادمین", en: "Message" },
    { value: "REQUEST", fa: "درخواست تایید / اقدام", en: "Request" },
  ];

  function handleEscalationSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!escalationSubject.trim() || !escalationBody.trim()) return;

    const item: EscalationRecord = {
      id: `esc_${Date.now()}`,
      type: escalationType,
      subject: escalationSubject.trim(),
      body: escalationBody.trim(),
      createdAt: new Date().toISOString(),
      fromRole: "ADMIN",
      status: "PENDING",
    };

    const nextList = [item, ...escalations];
    setEscalations(nextList);
    try {
      window.localStorage.setItem(ESCALATION_STORAGE_KEY, JSON.stringify(nextList));
    } catch {
      // نادیده گرفتن خطای ذخیره
    }

    setEscalationSubject("");
    setEscalationBody("");
    setEscalationNotice(
      isRtl
        ? "مورد ارجاعی برای سوپرادمین ثبت شد."
        : "Escalation recorded for Super Admin."
    );
  }

  const adminCards = [
    {
      title: isRtl ? "مدیریت کاربران" : "Users Management",
      desc: isRtl
        ? "مشاهده و مدیریت کاربران اجرایی (بدون دسترسی به حساب سوپرادمین)"
        : "Manage operational users (no access to SUPER_ADMIN account)",
      href: `/${locale}/admin/users`,
      badge: isRtl ? "کاربران" : "Users",
    },
    {
      title: isRtl ? "مرکز مدیریت محتوا" : "Content Hub",
      desc: isRtl
        ? "انتشار، ویرایش و بررسی محتوا و بخش‌های خبری و تخصصی"
        : "Publish, edit, and review news and content modules",
      href: `/${locale}/admin/content-hub`,
      badge: isRtl ? "محتوا" : "Content",
    },
    {
      title: isRtl ? "بازار ملکیست" : "MELKIST Marketplace",
      desc: isRtl
        ? "بررسی و مدیریت آگهی‌ها و فایل‌های ثبت‌شده"
        : "Review and moderate marketplace listings",
      href: `/${locale}/admin/marketplace`,
      badge: isRtl ? "بازار" : "Market",
    },
    {
      title: isRtl ? "گزارش‌ها" : "Reports",
      desc: isRtl
        ? "مشاهده گزارش‌های عملیاتی و آمار فعالیت‌ها"
        : "Inspect operational reports and activity summaries",
      href: `/${locale}/admin/reports`,
      badge: isRtl ? "گزارش" : "Reports",
    },
  ];

  const sectionTabs: { id: AdminSection; label: string }[] = [
    { id: "OVERVIEW", label: isRtl ? "نمای کلی" : "Overview" },
    { id: "USERS", label: isRtl ? "کاربران اجرایی" : "Operational Users" },
    { id: "CONTENT", label: isRtl ? "بخش‌های اجرایی" : "Workspaces" },
    { id: "ESCALATION", label: isRtl ? "ارجاع به سوپرادمین" : "Escalate to Super Admin" },
  ];

  return (
    <div
      className={`min-h-screen bg-slate-50 text-slate-800 p-6 ${
        isRtl ? "dir-rtl" : "dir-ltr"
      } font-sans space-y-6`}
      dir={dir}
    >
      <div className="bg-white border border-indigo-100 rounded-2xl p-6 shadow-xs flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full">
              {isRtl ? "میز کار مدیر سیستم (ADMIN)" : "Admin Workspace (ADMIN)"}
            </span>
            <span className="text-[11px] text-slate-500">
              {isRtl
                ? "عدم دسترسی به اطلاعات یا تغییر سوپرادمین؛ ارتباط صرفاً از طریق ارجاع"
                : "No SUPER_ADMIN data/edit access; escalation channel only"}
            </span>
          </div>
          <h1 className="text-2xl font-black text-slate-900">
            {isRtl ? "میز کار مدیر سیستم ملکیسم" : "MELKISM Admin Workspace"}
          </h1>
          <p className="text-xs text-slate-500">
            {isRtl
              ? "مدیریت کاربران، محتوا و گزارش‌ها و ثبت موارد، مشکلات، مسائل، پیشنهادات، پیام‌ها و درخواست‌ها برای سوپرادمین."
              : "Manage users, content, and reports, and escalate items, problems, issues, suggestions, messages, or requests to Super Admin."}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveSection("ESCALATION")}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black px-4 py-2.5 rounded-xl transition whitespace-nowrap"
          >
            {isRtl ? "ارجاع به سوپرادمین" : "Escalate to Super Admin"}
          </button>
          <Link
            href={`/${locale}/admin/users`}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition whitespace-nowrap"
          >
            {isRtl ? "مدیریت کاربران" : "Manage Users"}
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1.5">
          <span className="text-xs text-slate-500 font-medium">
            {isRtl ? "کاربران قابل مدیریت" : "Manageable Users"}
          </span>
          <div className="text-2xl font-black text-slate-900">
            {num(nonSuperAdminUsers.length)}
          </div>
          <span className="text-[11px] text-indigo-600 font-bold block">
            {isRtl ? `${num(activeUsersCount)} حساب فعال` : `${num(activeUsersCount)} active`}
          </span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1.5">
          <span className="text-xs text-slate-500 font-medium">
            {isRtl ? "محتوا و آگهی‌ها" : "Content & Listings"}
          </span>
          <div className="text-2xl font-black text-slate-900">{num(stats.propertiesCount)}</div>
          <span className="text-[11px] text-emerald-600 font-bold block">
            {isRtl ? "قابل بررسی و انتشار" : "Ready for review"}
          </span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1.5">
          <span className="text-xs text-slate-500 font-medium">
            {isRtl ? "موارد در انتظار بررسی" : "Pending Items"}
          </span>
          <div className="text-2xl font-black text-amber-600">{num(stats.pendingTransactions)}</div>
          <span className="text-[11px] text-slate-500 font-medium block">
            {isRtl ? "صف بررسی جاری" : "Current queue"}
          </span>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs space-y-1.5">
          <span className="text-xs text-slate-500 font-medium">
            {isRtl ? "ارجاعات ثبت‌شده به سوپرادمین" : "Escalations Sent"}
          </span>
          <div className="text-2xl font-black text-slate-900">{num(escalations.length)}</div>
          <span className="text-[11px] text-amber-700 font-bold block">
            {isRtl ? "در انتظار بررسی ارشد" : "Awaiting senior review"}
          </span>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-2 shadow-xs flex flex-wrap gap-2">
        {sectionTabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveSection(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeSection === tab.id
                ? "bg-indigo-600 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {(activeSection === "OVERVIEW" || activeSection === "CONTENT") && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {adminCards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="bg-white border border-slate-200 hover:border-indigo-400 rounded-2xl p-5 shadow-xs transition flex flex-col justify-between gap-3"
            >
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-sm font-black text-slate-900">{card.title}</h2>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
                  {card.badge}
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
            </Link>
          ))}
        </div>
      )}

      {(activeSection === "OVERVIEW" || activeSection === "USERS") && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-black text-slate-900">
              {isRtl ? "کاربران اجرایی ثبت‌شده" : "Operational Accounts"}
            </h2>
            <Link
              href={`/${locale}/admin/users`}
              className="text-xs font-bold text-indigo-600 hover:underline"
            >
              {isRtl ? "مدیریت کامل کاربران" : "Full Users Directory"}
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className={`py-2.5 px-3 font-bold ${isRtl ? "text-right" : "text-left"}`}>
                    {isRtl ? "نام" : "Name"}
                  </th>
                  <th className={`py-2.5 px-3 font-bold ${isRtl ? "text-right" : "text-left"}`}>
                    {isRtl ? "نام کاربری" : "Username"}
                  </th>
                  <th className={`py-2.5 px-3 font-bold ${isRtl ? "text-right" : "text-left"}`}>
                    {isRtl ? "نقش" : "Role"}
                  </th>
                  <th className={`py-2.5 px-3 font-bold ${isRtl ? "text-right" : "text-left"}`}>
                    {isRtl ? "وضعیت" : "Status"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {nonSuperAdminUsers.slice(0, 6).map((u) => (
                  <tr key={u.id} className="hover:bg-slate-50">
                    <td className="py-2.5 px-3 font-bold text-slate-800">{u.fullName}</td>
                    <td className="py-2.5 px-3 font-mono text-slate-600">{u.username}</td>
                    <td className="py-2.5 px-3">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono text-[11px] font-bold">
                        {u.role}
                      </span>
                    </td>
                    <td className="py-2.5 px-3">
                      <span
                        className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                          u.isActive
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-rose-50 text-rose-700"
                        }`}
                      >
                        {u.isActive
                          ? isRtl
                            ? "فعال"
                            : "Active"
                          : isRtl
                          ? "غیرفعال"
                          : "Inactive"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {(activeSection === "OVERVIEW" || activeSection === "ESCALATION") && (
        <div className="bg-white border border-amber-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full inline-block">
              {isRtl ? "ارجاع به سوپرادمین" : "Super Admin Escalation"}
            </span>
            <h2 className="text-sm font-black text-slate-900">
              {isRtl
                ? "ارجاع موارد، مشکلات، مسائل، پیشنهادات، پیام‌ها و درخواست‌ها به سوپرادمین"
                : "Escalate cases, problems, issues, suggestions, messages, and requests to Super Admin"}
            </h2>
          </div>

          <form onSubmit={handleEscalationSubmit} className="space-y-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">
                  {isRtl ? "نوع ارجاع" : "Type"}
                </label>
                <select
                  value={escalationType}
                  onChange={(e) => setEscalationType(e.target.value as EscalationType)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 outline-none focus:border-indigo-500"
                >
                  {escalationOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {isRtl ? opt.fa : opt.en}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">
                  {isRtl ? "عنوان / موضوع" : "Subject"}
                </label>
                <input
                  type="text"
                  value={escalationSubject}
                  onChange={(e) => setEscalationSubject(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 outline-none focus:border-indigo-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 block">
                {isRtl ? "شرح کامل" : "Details"}
              </label>
              <textarea
                rows={3}
                value={escalationBody}
                onChange={(e) => setEscalationBody(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 outline-none focus:border-indigo-500"
                required
              />
            </div>

            <div className="flex items-center justify-between gap-3 pt-1">
              <span className="text-emerald-700 font-bold">{escalationNotice ?? ""}</span>
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-4 py-2 rounded-xl transition whitespace-nowrap"
              >
                {isRtl ? "ارسال به سوپرادمین" : "Send to Super Admin"}
              </button>
            </div>
          </form>

          {escalations.length > 0 && (
            <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
              {escalations.slice(0, 5).map((esc) => (
                <div
                  key={esc.id}
                  className="p-3 rounded-xl bg-amber-50/50 border border-amber-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div>
                    <span className="font-bold text-slate-900">{esc.subject}</span>
                    <p className="text-slate-600 text-[11px] mt-0.5">{esc.body}</p>
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-white border border-amber-200 text-amber-800 whitespace-nowrap">
                    {esc.type} • {esc.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}