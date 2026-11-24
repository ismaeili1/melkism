"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useSearchParams, useParams } from "next/navigation";
import { useLocalizedText } from "@/hooks/useLocalizedText";

interface UserRecord {
  id: string;
  name: string;
  username: string;
  email: string;
  mobile: string;
  role: string;
  specialtyKey: string;
  status: string;
  country?: string;
  province: string;
  city: string;
  specialtyTitle: string;
  licenseNumber: string;
  companyName?: string;
  bankName: string;
  iban: string;
  featuredAllowed: string;
  featuredActive: string;
  description: string;
}

type CurrentAdminRole = "SUPER_ADMIN" | "ADMIN";

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

function normalizeRoleValue(val: unknown): CurrentAdminRole | null {
  if (!val) return null;
  if (typeof val === "string") {
    const trimmed = val.trim().toUpperCase();
    if (trimmed === "SUPER_ADMIN") return "SUPER_ADMIN";
    if (trimmed === "ADMIN") return "ADMIN";
    try {
      const parsed = JSON.parse(decodeURIComponent(val));
      const nested = String(
        parsed?.role || parsed?.user?.role || parsed?.data?.role || ""
      )
        .trim()
        .toUpperCase();
      if (nested === "SUPER_ADMIN") return "SUPER_ADMIN";
      if (nested === "ADMIN") return "ADMIN";
    } catch {
      // رشته ساده است
    }
  }
  if (typeof val === "object") {
    const obj = val as Record<string, unknown>;
    const userObj = (obj.user || obj.data || obj) as Record<string, unknown>;
    const r = String(userObj?.role || obj?.role || "")
      .trim()
      .toUpperCase();
    if (r === "SUPER_ADMIN") return "SUPER_ADMIN";
    if (r === "ADMIN") return "ADMIN";
  }
  return null;
}

function getCookieValue(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function detectCurrentRole(): CurrentAdminRole {
  if (typeof window === "undefined") return "ADMIN";

  // ابتدا کوکی melkism_role بررسی شود چون در لاگین جدید بلافاصله تنظیم می‌شود
  const cookieRole = normalizeRoleValue(getCookieValue("melkism_role"));
  if (cookieRole) return cookieRole;

  const cookieSessionRole = normalizeRoleValue(getCookieValue("melkism_session"));
  if (cookieSessionRole) return cookieSessionRole;

  const storageKeys = [
    "melkism_active_user_session_v2",
    "melkism_session",
    "melkism_user",
    "user",
  ];

  for (const key of storageKeys) {
    try {
      const raw = window.localStorage.getItem(key);
      if (!raw) continue;
      const parsed = JSON.parse(raw);
      const roleFromStorage = normalizeRoleValue(parsed);
      if (roleFromStorage) return roleFromStorage;
    } catch {
      // نادیده گرفتن خطای پارس
    }
  }

  return "ADMIN";
}

export default function AdminUsersManagementPage() {
  const searchParams = useSearchParams();
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const isRtl = ["fa", "ar"].includes(locale);
  const dir = isRtl ? "rtl" : "ltr";

  const { t, num } = useLocalizedText("AdminUsers");

  const [currentRole, setCurrentRole] = useState<CurrentAdminRole>(() => detectCurrentRole());
  const initialRole = searchParams.get("role") || "ALL";

  const [selectedRole, setSelectedRole] = useState(
    initialRole.toUpperCase() === "SUPER_ADMIN" ? "ALL" : initialRole
  );
  const [selectedSpecialty, setSelectedSpecialty] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<UserRecord | null>(null);
  const [selectedDetailUser, setSelectedDetailUser] = useState<UserRecord | null>(null);

  const [showEscalationModal, setShowEscalationModal] = useState(false);
  const [escalationType, setEscalationType] = useState<EscalationType>("REQUEST");
  const [escalationSubject, setEscalationSubject] = useState("");
  const [escalationBody, setEscalationBody] = useState("");
  const [escalations, setEscalations] = useState<EscalationRecord[]>([]);

  const syncRoleAndEscalations = useCallback(() => {
    const detected = detectCurrentRole();
    setCurrentRole(detected);
    if (detected !== "SUPER_ADMIN" && selectedRole.toUpperCase() === "SUPER_ADMIN") {
      setSelectedRole("ALL");
    }

    try {
      const savedRaw = window.localStorage.getItem(ESCALATION_STORAGE_KEY);
      if (savedRaw) {
        const parsed = JSON.parse(savedRaw);
        if (Array.isArray(parsed)) {
          setEscalations(parsed);
        }
      }
    } catch {
      // نادیده گرفتن خطای خواندن ارجاعات
    }
  }, [selectedRole]);

  useEffect(() => {
    syncRoleAndEscalations();
    window.addEventListener("storage", syncRoleAndEscalations);
    window.addEventListener("focus", syncRoleAndEscalations);
    return () => {
      window.removeEventListener("storage", syncRoleAndEscalations);
      window.removeEventListener("focus", syncRoleAndEscalations);
    };
  }, [syncRoleAndEscalations]);

  const isSuperAdmin = currentRole === "SUPER_ADMIN";

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    role: "USER",
    specialtyKey: "specPersonalSeller",
    status: "ACTIVE",
    country: "ایران",
    province: "تهران",
    city: "تهران",
    specialtyTitle: "",
    licenseNumber: "",
    companyName: "",
    bankName: "ملی",
    iban: "IR",
    featuredAllowed: "2",
    featuredActive: "0",
    description: "",
  });

  const [users] = useState<UserRecord[]>([
    {
      id: "1",
      name: "دکتر مرتضی اسماعیلی",
      username: "morteza_admin",
      email: "morteza.admin@melkism.com",
      mobile: "09121112233",
      role: "SUPER_ADMIN",
      specialtyKey: "specConsultant",
      status: "ACTIVE",
      province: "تهران",
      city: "تهران",
      specialtyTitle: "مدیر ارشد و معماری",
      licenseNumber: "IR-ADMIN-01",
      bankName: "پاسارگاد",
      iban: "IR550540101980002133445566",
      featuredAllowed: "10",
      featuredActive: "5",
      description: "دسترسی کامل به فایروال، تراکنش‌ها و مدیریت کلان.",
    },
    {
      id: "2",
      name: "سارا رضایی",
      username: "sara_manager",
      email: "manager.ai@melkism.com",
      mobile: "09123334455",
      role: "MANAGER",
      specialtyKey: "specColleague",
      status: "ACTIVE",
      province: "تهران",
      city: "تهران",
      specialtyTitle: "مدیر محتوا و هوش مصنوعی",
      licenseNumber: "MGR-992",
      bankName: "ملت",
      iban: "IR120120000000123456789012",
      featuredAllowed: "5",
      featuredActive: "2",
      description: "مسئول انتشار اخبار و کتابخانه تخصصی.",
    },
    {
      id: "3",
      name: "شرکت انبوه‌سازی آلتون",
      username: "alton_build",
      email: "info@alton-build.com",
      mobile: "02188889999",
      role: "COMPANY",
      specialtyKey: "specCompany",
      status: "ACTIVE",
      province: "تهران",
      city: "تهران",
      specialtyTitle: "شرکت ساختمانی و تولیدکننده",
      companyName: "سازندگان آلتون",
      licenseNumber: "45120",
      bankName: "تجارت",
      iban: "IR990180000000009876543211",
      featuredAllowed: "20",
      featuredActive: "8",
      description: "مجری برج‌های مسکونی لوکس و پیش‌فروش‌های ویژه.",
    },
    {
      id: "4",
      name: "آژانس املاک مدرن پاسداران",
      username: "modern_agency",
      email: "modern.realestate@agency.ir",
      mobile: "02122223344",
      role: "AGENCY",
      specialtyKey: "specAgency",
      status: "PENDING",
      province: "تهران",
      city: "تهران",
      specialtyTitle: "بنگاه و مشاور املاک",
      licenseNumber: "LCS-8839",
      bankName: "سامان",
      iban: "IR440560000000112233445566",
      featuredAllowed: "10",
      featuredActive: "3",
      description: "در انتظار تأیید پروانه کسب و مدارک صنفی.",
    },
    {
      id: "5",
      name: "مهندس آرش طاهری",
      username: "arash_expert",
      email: "expert.arash@melkism.com",
      mobile: "09195556677",
      role: "EXPERT",
      specialtyKey: "specSupervisor",
      status: "ACTIVE",
      province: "تهران",
      city: "تهران",
      specialtyTitle: "ناظر، طراح و ارزیاب ملک",
      licenseNumber: "ENG-4492",
      bankName: "ملی",
      iban: "IR330170000000004455667788",
      featuredAllowed: "4",
      featuredActive: "1",
      description: "عضو نظام مهندسی و متخصص ارزیابی فنی.",
    },
    {
      id: "6",
      name: "علی اکبری",
      username: "ali_akbari",
      email: "ali.akbari@gmail.com",
      mobile: "09357778899",
      role: "USER",
      specialtyKey: "specPersonalSeller",
      status: "ACTIVE",
      province: "تهران",
      city: "تهران",
      specialtyTitle: "فروشنده شخصی و متقاضی",
      licenseNumber: "-",
      bankName: "ملی",
      iban: "IR110170000000001122334455",
      featuredAllowed: "2",
      featuredActive: "0",
      description: "فروشنده شخصی و متقاضی خرید مسکن و سرمایه‌گذاری.",
    },
  ]);

  const [userList, setUserList] = useState<UserRecord[]>(users);

  const roleOptions = [
    { value: "ALL", labelKey: "roleAll", superOnly: false },
    { value: "SUPER_ADMIN", labelKey: "roleSuperAdmin", superOnly: true },
    { value: "ADMIN", labelKey: "roleAdmin", superOnly: false },
    { value: "MANAGER", labelKey: "roleManager", superOnly: false },
    { value: "COMPANY", labelKey: "roleCompany", superOnly: false },
    { value: "AGENCY", labelKey: "roleAgency", superOnly: false },
    { value: "EXPERT", labelKey: "roleExpert", superOnly: false },
    { value: "USER", labelKey: "roleUser", superOnly: false },
    { value: "GUEST", labelKey: "roleGuest", superOnly: false },
  ].filter((opt) => isSuperAdmin || !opt.superOnly);

  const specialtyOptions = [
    { value: "ALL", labelKey: "specAll" },
    { value: "specColleague", labelKey: "specColleague" },
    { value: "specCompany", labelKey: "specCompany" },
    { value: "specInstitution", labelKey: "specInstitution" },
    { value: "specAgency", labelKey: "specAgency" },
    { value: "specProducer", labelKey: "specProducer" },
    { value: "specConsultant", labelKey: "specConsultant" },
    { value: "specDesigner", labelKey: "specDesigner" },
    { value: "specMaterialSupplier", labelKey: "specMaterialSupplier" },
    { value: "specExecutor", labelKey: "specExecutor" },
    { value: "specSupervisor", labelKey: "specSupervisor" },
    { value: "specContractor", labelKey: "specContractor" },
    { value: "specBroker", labelKey: "specBroker" },
    { value: "specPersonalSeller", labelKey: "specPersonalSeller" },
    { value: "specPersonalLandlord", labelKey: "specPersonalLandlord" },
  ];

  const escalationTypes: { value: EscalationType; fa: string; en: string }[] = [
    { value: "CASE", fa: "ارجاع مورد / پرونده", en: "Case / Item" },
    { value: "PROBLEM", fa: "مشکل سیستمی یا فنی", en: "System Problem" },
    { value: "ISSUE", fa: "مسئله مدیریتی یا کاربری", en: "Operational Issue" },
    { value: "SUGGESTION", fa: "پیشنهاد بهبود", en: "Suggestion" },
    { value: "MESSAGE", fa: "پیام به سوپرادمین", en: "Message" },
    { value: "REQUEST", fa: "درخواست تایید / اقدام", en: "Request" },
  ];

  const handleOpenModal = (user: UserRecord | null = null) => {
    if (user && !isSuperAdmin && user.role.toUpperCase() === "SUPER_ADMIN") {
      setFeedbackMessage(
        isRtl
          ? "دسترسی به اطلاعات یا ویرایش حساب سوپرادمین برای مدیر سیستم مجاز نیست."
          : "Access to or editing of SUPER_ADMIN accounts is not permitted for ADMIN."
      );
      return;
    }

    if (user) {
      setEditingUser(user);
      setFormData({
        name: user.name,
        username: user.username,
        email: user.email,
        mobile: user.mobile,
        role: user.role,
        specialtyKey: user.specialtyKey || "specPersonalSeller",
        status: user.status,
        country: user.country || "ایران",
        province: user.province || "تهران",
        city: user.city || "تهران",
        specialtyTitle: user.specialtyTitle || "",
        licenseNumber: user.licenseNumber || "",
        companyName: user.companyName || "",
        bankName: user.bankName || "ملی",
        iban: user.iban || "IR",
        featuredAllowed: user.featuredAllowed || "2",
        featuredActive: user.featuredActive || "0",
        description: user.description || "",
      });
    } else {
      setEditingUser(null);
      setFormData({
        name: "",
        username: "",
        email: "",
        mobile: "",
        role: "USER",
        specialtyKey: "specPersonalSeller",
        status: "ACTIVE",
        country: "ایران",
        province: "تهران",
        city: "تهران",
        specialtyTitle: "",
        licenseNumber: "",
        companyName: "",
        bankName: "ملی",
        iban: "IR",
        featuredAllowed: "2",
        featuredActive: "0",
        description: "",
      });
    }
    setShowModal(true);
  };

  const handleSaveUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const safeRole =
      !isSuperAdmin && formData.role.toUpperCase() === "SUPER_ADMIN" ? "USER" : formData.role;

    const resolvedSpecialtyTitle =
      formData.specialtyTitle.trim() || t(formData.specialtyKey);

    if (editingUser) {
      if (!isSuperAdmin && editingUser.role.toUpperCase() === "SUPER_ADMIN") {
        setShowModal(false);
        return;
      }
      setUserList((prev) =>
        prev.map((u) =>
          u.id === editingUser.id
            ? {
                ...u,
                ...formData,
                role: safeRole,
                specialtyTitle: resolvedSpecialtyTitle,
                id: u.id,
              }
            : u
        )
      );
      setFeedbackMessage(t("userUpdatedToast", { name: formData.name }));
    } else {
      const newUser: UserRecord = {
        ...formData,
        role: safeRole,
        specialtyTitle: resolvedSpecialtyTitle,
        id: (userList.length + 1).toString(),
      };
      setUserList((prev) => [newUser, ...prev]);
      setFeedbackMessage(t("userCreatedToast", { name: formData.name }));
    }
    setShowModal(false);
  };

  const handleToggleStatus = (user: UserRecord) => {
    if (!isSuperAdmin && user.role.toUpperCase() === "SUPER_ADMIN") return;
    const nextStatus = user.status === "ACTIVE" ? "INACTIVE" : "ACTIVE";
    setUserList((prev) =>
      prev.map((u) => (u.id === user.id ? { ...u, status: nextStatus } : u))
    );
  };

  const handleDeleteUser = (user: UserRecord) => {
    if (!isSuperAdmin && user.role.toUpperCase() === "SUPER_ADMIN") return;
    setUserList((prev) => prev.filter((u) => u.id !== user.id));
    setFeedbackMessage(t("userDeletedToast", { name: user.name }));
  };

  const handleCreateEscalation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!escalationSubject.trim() || !escalationBody.trim()) return;

    const record: EscalationRecord = {
      id: `esc_${Date.now()}`,
      type: escalationType,
      subject: escalationSubject.trim(),
      body: escalationBody.trim(),
      createdAt: new Date().toISOString(),
      fromRole: "ADMIN",
      status: "PENDING",
    };

    const updated = [record, ...escalations];
    setEscalations(updated);
    try {
      window.localStorage.setItem(ESCALATION_STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // نادیده گرفتن خطای ذخیره‌سازی
    }

    setEscalationSubject("");
    setEscalationBody("");
    setShowEscalationModal(false);
    setFeedbackMessage(
      isRtl
        ? "مورد ارجاعی برای سوپرادمین ثبت شد."
        : "Your escalation item has been sent to Super Admin."
    );
  };

  const visibleUsers = userList.filter((user) => {
    const isRowSuperAdmin = user.role.trim().toUpperCase() === "SUPER_ADMIN";
    if (!isSuperAdmin && isRowSuperAdmin) {
      return false;
    }
    const matchesRole = selectedRole === "ALL" || user.role === selectedRole;
    const matchesSpecialty =
      selectedSpecialty === "ALL" || user.specialtyKey === selectedSpecialty;
    const matchesStatus = statusFilter === "ALL" || user.status === statusFilter;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      user.name.toLowerCase().includes(q) ||
      user.username.toLowerCase().includes(q) ||
      user.email.toLowerCase().includes(q) ||
      user.mobile.toLowerCase().includes(q);
    return matchesRole && matchesSpecialty && matchesStatus && matchesSearch;
  });

  const renderStatusBadge = (status: string) => {
    if (status === "ACTIVE") {
      return (
        <span className="font-bold px-2.5 py-1 rounded-lg text-[10px] inline-block bg-emerald-50 text-emerald-700 border border-emerald-200">
          ● {t("statusActive")}
        </span>
      );
    }
    if (status === "PENDING") {
      return (
        <span className="font-bold px-2.5 py-1 rounded-lg text-[10px] inline-block bg-amber-50 text-amber-700 border border-amber-200">
          ● {t("statusPending")}
        </span>
      );
    }
    return (
      <span className="font-bold px-2.5 py-1 rounded-lg text-[10px] inline-block bg-rose-50 text-rose-700 border border-rose-200">
        ● {t("statusInactive")}
      </span>
    );
  };

  return (
    <div
      className={`min-h-screen bg-slate-50 text-slate-800 p-6 ${
        isRtl ? "dir-rtl" : "dir-ltr"
      } font-sans space-y-6`}
      dir={dir}
    >
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full inline-block mb-1">
            {isSuperAdmin
              ? t("badge")
              : isRtl
              ? "مدیریت کاربران (سطح ADMIN — بدون دسترسی به حساب سوپرادمین)"
              : "Users Management (ADMIN — No SUPER_ADMIN Account Access)"}
          </span>
          <h1 className="text-2xl font-black text-slate-900">{t("pageTitle")}</h1>
          <p className="text-xs text-slate-500 mt-1">
            {isSuperAdmin
              ? t("pageSubtitle")
              : isRtl
              ? "مدیریت کاربران و نقش‌های اجرایی؛ دسترسی به اطلاعات یا تغییر سوپرادمین مجاز نیست و موارد نیازمند بررسی ارشد از طریق ارجاع ارسال می‌شوند."
              : "Manage operational accounts; SUPER_ADMIN account data and changes are restricted to escalations."}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {!isSuperAdmin && (
            <button
              type="button"
              onClick={() => setShowEscalationModal(true)}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black px-4 py-2.5 rounded-xl transition shadow-sm whitespace-nowrap"
            >
              📩 {isRtl ? "ارجاع به سوپرادمین" : "Escalate to Super Admin"}
            </button>
          )}
          <Link
            href={`/${locale}/admin/financial/users-ledger`}
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm whitespace-nowrap"
          >
            💰 {t("allUsersLedgerBtn")}
          </Link>
          <button
            type="button"
            onClick={() => handleOpenModal()}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm whitespace-nowrap"
          >
            {t("addUserBtn")}
          </button>
          <Link
            href={`/${locale}/admin/dashboard`}
            className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm whitespace-nowrap"
          >
            {isRtl ? `← ${t("backToDashboard")}` : `${t("backToDashboard")} →`}
          </Link>
        </div>
      </div>

      {feedbackMessage && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-4 py-3 rounded-2xl flex items-center justify-between gap-3">
          <span>{feedbackMessage}</span>
          <button
            type="button"
            onClick={() => setFeedbackMessage(null)}
            className="text-emerald-700 hover:underline text-[11px]"
          >
            {t("closeBtn")}
          </button>
        </div>
      )}

      <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4">
        <div className="flex flex-wrap gap-2 text-xs items-center">
          <span className="font-bold text-slate-700">{t("roleFilterLabel")}</span>
          {roleOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setSelectedRole(opt.value)}
              className={`px-3 py-1.5 rounded-xl font-bold transition ${
                selectedRole === opt.value
                  ? "bg-indigo-600 text-white shadow-xs"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {t(opt.labelKey)}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-3 pt-2 border-t border-slate-100">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <label className="flex items-center gap-2 font-bold text-slate-700">
              <span>{t("specialtyFilterLabel")}</span>
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="border border-slate-200 rounded-xl px-3 py-2 text-xs bg-slate-50 font-medium text-slate-800 outline-none focus:border-indigo-600"
              >
                {specialtyOptions.map((sp) => (
                  <option key={sp.value} value={sp.value}>
                    {t(sp.labelKey)}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex items-center gap-2 font-bold text-slate-700">
              <span>{t("statusFilterLabel")}</span>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border border-slate-200 rounded-xl px-3 py-2 text-xs bg-slate-50 font-medium text-slate-800 outline-none focus:border-indigo-600"
              >
                <option value="ALL">{t("statusAll")}</option>
                <option value="ACTIVE">{t("statusActive")}</option>
                <option value="PENDING">{t("statusPending")}</option>
                <option value="INACTIVE">{t("statusInactive")}</option>
              </select>
            </label>
          </div>

          <input
            type="text"
            placeholder={t("searchPlaceholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-slate-200 rounded-xl px-3.5 py-2 text-xs outline-none focus:border-indigo-600 bg-slate-50/50 w-full md:w-72"
          />
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900">
          📋 {t("listTitleWithCount", { count: num(visibleUsers.length) })}
        </h3>

        <div className="overflow-x-auto">
          <table className={`w-full ${isRtl ? "text-right" : "text-left"} text-xs`}>
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-medium">
                <th className="pb-3">{t("colUser")}</th>
                <th className="pb-3">{t("colContact")}</th>
                <th className="pb-3">{t("colRoleAndSpec")}</th>
                <th className="pb-3">{t("colStatus")}</th>
                <th className="pb-3 text-center">{t("colActions")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {visibleUsers.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-8 text-center text-slate-400 font-medium">
                    {t("emptyUsersMessage")}
                  </td>
                </tr>
              ) : (
                visibleUsers.map((user) => {
                  const isTargetSuperAdmin = user.role.trim().toUpperCase() === "SUPER_ADMIN";
                  if (!isSuperAdmin && isTargetSuperAdmin) return null;

                  return (
                    <tr key={user.id} className="hover:bg-slate-50/80 transition">
                      <td className="py-4 font-bold text-slate-900">
                        {user.name}
                        <span className="block text-[10px] text-slate-400 font-mono">
                          @{user.username}
                        </span>
                      </td>
                      <td className="py-4 text-slate-500 font-mono text-[11px]">
                        {user.email}
                        <span className="block text-[10px] text-slate-400">{user.mobile}</span>
                      </td>
                      <td className="py-4 space-y-1">
                        <span className="bg-indigo-50 text-indigo-700 font-bold px-2.5 py-1 rounded-lg text-[10px] border border-indigo-100 inline-block">
                          {user.role}
                        </span>
                        <span className="block text-[11px] font-medium text-slate-600">
                          {t(user.specialtyKey)}
                        </span>
                      </td>
                      <td className="py-4">{renderStatusBadge(user.status)}</td>
                      <td className="py-4 text-center">
                        <div className="flex flex-wrap items-center justify-center gap-2">
                          <Link
                            href={`/${locale}/admin/financial/users-ledger?userId=${user.id}`}
                            className="inline-block bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold px-2.5 py-1.5 rounded-xl border border-emerald-200 transition"
                          >
                            📊 {t("financialReportBtn")}
                          </Link>
                          <button
                            type="button"
                            onClick={() => handleOpenModal(user)}
                            className="text-indigo-600 hover:underline font-bold px-1.5"
                          >
                            {t("editBtn")}
                          </button>
                          <button
                            type="button"
                            onClick={() => setSelectedDetailUser(user)}
                            className="text-slate-700 hover:underline font-bold px-1.5"
                          >
                            {t("detailsBtn")}
                          </button>
                          <button
                            type="button"
                            onClick={() => handleToggleStatus(user)}
                            className="text-amber-700 hover:underline font-bold px-1.5"
                          >
                            {t("toggleStatusBtn")}
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteUser(user)}
                            className="text-rose-600 hover:underline font-bold px-1.5"
                          >
                            {t("deleteBtn")}
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {!isSuperAdmin && escalations.length > 0 && (
        <div className="bg-white border border-amber-200 rounded-2xl p-6 shadow-sm space-y-3">
          <h3 className="text-sm font-bold text-slate-900">
            📩 {isRtl ? "موارد ارجاع‌شده به سوپرادمین" : "Escalations Submitted to Super Admin"}
          </h3>
          <div className="space-y-2 text-xs">
            {escalations.slice(0, 5).map((item) => (
              <div
                key={item.id}
                className="p-3 rounded-xl bg-amber-50/50 border border-amber-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
              >
                <div>
                  <span className="font-bold text-slate-900">{item.subject}</span>
                  <p className="text-slate-600 text-[11px] mt-0.5">{item.body}</p>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-white border border-amber-200 text-amber-800 whitespace-nowrap">
                  {item.type} • {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {showEscalationModal && !isSuperAdmin && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg space-y-4 shadow-xl">
            <h3 className="text-base font-bold text-slate-900">
              {isRtl
                ? "ارجاع مورد، مشکل، مسئله، پیشنهاد، پیام یا درخواست به سوپرادمین"
                : "Escalate Item, Problem, Issue, Suggestion, Message, or Request"}
            </h3>
            <form onSubmit={handleCreateEscalation} className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-600 font-bold mb-1">
                  {isRtl ? "نوع ارجاع" : "Type"}
                </label>
                <select
                  value={escalationType}
                  onChange={(e) => setEscalationType(e.target.value as EscalationType)}
                  className="w-full border border-slate-200 rounded-xl px-3 py-2 bg-slate-50 outline-none"
                >
                  {escalationTypes.map((et) => (
                    <option key={et.value} value={et.value}>
                      {isRtl ? et.fa : et.en}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-600 font-bold mb-1">
                  {isRtl ? "عنوان / موضوع" : "Subject"}
                </label>
                <input
                  type="text"
                  value={escalationSubject}
                  onChange={(e) => setEscalationSubject(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-600"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-600 font-bold mb-1">
                  {isRtl ? "شرح کامل مورد / مشکل / درخواست" : "Details"}
                </label>
                <textarea
                  rows={4}
                  value={escalationBody}
                  onChange={(e) => setEscalationBody(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-600"
                  required
                />
              </div>

              <div className="pt-2 flex gap-2 justify-end">
                <button
                  type="button"
                  onClick={() => setShowEscalationModal(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-600 font-bold rounded-xl"
                >
                  {t("cancelBtn")}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black rounded-xl"
                >
                  {isRtl ? "ثبت و ارسال ارجاع" : "Submit Escalation"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg space-y-4 shadow-xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-base font-bold text-slate-900">
              {editingUser ? t("modalEditTitle") : t("modalCreateTitle")}
            </h3>
            <form onSubmit={handleSaveUser} className="space-y-3 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-bold mb-1">{t("fieldName")}</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-bold mb-1">{t("fieldUsername")}</label>
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-600 font-mono"
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-bold mb-1">{t("fieldEmail")}</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-600 font-mono"
                    dir="ltr"
                    required
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-bold mb-1">{t("fieldMobile")}</label>
                  <input
                    type="text"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-600 font-mono"
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-slate-600 font-bold mb-1">{t("fieldRole")}</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none bg-white"
                  >
                    {roleOptions
                      .filter((r) => r.value !== "ALL")
                      .map((r) => (
                        <option key={r.value} value={r.value}>
                          {r.value}
                        </option>
                      ))}
                  </select>
                </div>
                <div>
                  <label className="block text-slate-600 font-bold mb-1">{t("fieldSpecialty")}</label>
                  <select
                    value={formData.specialtyKey}
                    onChange={(e) => setFormData({ ...formData, specialtyKey: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none bg-white"
                  >
                    {specialtyOptions
                      .filter((s) => s.value !== "ALL")
                      .map((s) => (
                        <option key={s.value} value={s.value}>
                          {t(s.labelKey)}
                        </option>
                      ))}
                  </select>
                </div>
                <div>
                  <label className="block text-slate-600 font-bold mb-1">{t("fieldStatus")}</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none bg-white"
                  >
                    <option value="ACTIVE">{t("statusActive")}</option>
                    <option value="PENDING">{t("statusPending")}</option>
                    <option value="INACTIVE">{t("statusInactive")}</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-bold mb-1">{t("fieldIban")}</label>
                  <input
                    type="text"
                    value={formData.iban}
                    onChange={(e) => setFormData({ ...formData, iban: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none font-mono"
                    dir="ltr"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-bold mb-1">
                    {t("fieldFeaturedAllowed")}
                  </label>
                  <input
                    type="number"
                    value={formData.featuredAllowed}
                    onChange={(e) =>
                      setFormData({ ...formData, featuredAllowed: e.target.value })
                    }
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none font-mono"
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-600 font-bold mb-1">{t("fieldDescription")}</label>
                <textarea
                  rows={2}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-600"
                />
              </div>

              <div className="pt-2 flex gap-2 justify-end">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-600 font-bold rounded-xl"
                >
                  {t("cancelBtn")}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white font-bold rounded-xl"
                >
                  {t("saveBtn")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {selectedDetailUser &&
        (isSuperAdmin || selectedDetailUser.role.trim().toUpperCase() !== "SUPER_ADMIN") && (
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md space-y-3 shadow-xl text-xs">
              <h3 className="font-bold text-slate-900 text-sm">
                {t("detailTitle", { name: selectedDetailUser.name })}
              </h3>
              <p>
                ● {t("detailRole")}:{" "}
                <span className="font-mono font-bold">{selectedDetailUser.role}</span>
              </p>
              <p>
                ● {t("detailSpecialty")}:{" "}
                <span className="font-bold">{t(selectedDetailUser.specialtyKey)}</span>
              </p>
              <p>
                ● {t("detailLocation")}: {selectedDetailUser.province} - {selectedDetailUser.city}
              </p>
              <p>
                ● {t("detailIban")}: <span className="font-mono">{selectedDetailUser.iban}</span>
              </p>
              <p>
                ●{" "}
                {t("detailFeatured", {
                  active: num(selectedDetailUser.featuredActive || "0"),
                  allowed: num(selectedDetailUser.featuredAllowed || "0"),
                })}
              </p>
              <p>
                ● {t("detailDescription")}: {selectedDetailUser.description}
              </p>
              <button
                type="button"
                onClick={() => setSelectedDetailUser(null)}
                className="w-full mt-2 py-2 bg-slate-800 text-white font-bold rounded-xl"
              >
                {t("closeBtn")}
              </button>
            </div>
          </div>
        )}
    </div>
  );
}