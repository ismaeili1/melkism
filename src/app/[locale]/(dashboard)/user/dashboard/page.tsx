"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useLocalizedText } from "@/hooks/useLocalizedText";
import {
  SUPPORTED_CURRENCIES,
  CurrencyCode,
  formatDeclaredMoney,
  loadPreferredCurrency,
} from "@/lib/currency";

type UserDashboardTab = "OVERVIEW" | "LISTINGS" | "SAVED" | "REQUESTS" | "PROFILE";
type ListingDealType = "SALE" | "BUY" | "RENT" | "MORTGAGE";

interface PersonalListing {
  id: string;
  title: string;
  dealType: ListingDealType;
  city: string;
  priceLabel: string;
  currency: CurrencyCode;
  status: "PUBLISHED" | "DRAFT";
  isVipFeatured?: boolean;
  createdAt: string;
}

interface SavedItem {
  id: string;
  title: string;
  category: string;
  note: string;
  createdAt: string;
}

interface PersonalRequest {
  id: string;
  topic: string;
  details: string;
  status: "IN_REVIEW" | "ANSWERED";
  priorityVip?: boolean;
  createdAt: string;
}

interface PersonalProfileState {
  fullName: string;
  username: string;
  phone: string;
  email: string;
  country: string;
  province: string;
  city: string;
  district: string;
  birthDate: string;
  avatar: string;
  bio: string;
}

interface VipSubscriptionMeta {
  active: boolean;
  planId?: string;
  months?: number;
  trackingCode?: string;
}

const defaultAvatars = [
  { id: "M-01", src: "/images/Avatars/M-01.png", label: "M-01" },
  { id: "M-02", src: "/images/Avatars/M-02.png", label: "M-02" },
  { id: "M-03", src: "/images/Avatars/M-03.png", label: "M-03" },
  { id: "M-04", src: "/images/Avatars/M-04.png", label: "M-04" },
  { id: "M-05", src: "/images/Avatars/M-05.png", label: "M-05" },
  { id: "W-01", src: "/images/Avatars/W-01.png", label: "W-01" },
  { id: "W-02", src: "/images/Avatars/W-02.png", label: "W-02" },
  { id: "W-03", src: "/images/Avatars/W-03.png", label: "W-03" },
  { id: "W-04", src: "/images/Avatars/W-04.png", label: "W-04" },
  { id: "W-05", src: "/images/Avatars/W-05.png", label: "W-05" },
];

const LISTINGS_KEY = "melkism_user_personal_listings_v1";
const SAVED_KEY = "melkism_user_saved_items_v1";
const REQUESTS_KEY = "melkism_user_requests_v1";
const PERSONAL_PROFILE_KEY = "melkism_user_personal_profile_v1";
const VIP_RECORD_KEY = "melkism_user_vip_v1";

function loadInitialProfile(
  fallbackFullName: string,
  fallbackCountry: string,
  fallbackCity: string
): PersonalProfileState {
  const fallback: PersonalProfileState = {
    fullName: fallbackFullName,
    username: "personal_user",
    phone: "",
    email: "",
    country: fallbackCountry,
    province: fallbackCity,
    city: fallbackCity,
    district: "",
    birthDate: "",
    avatar: "/images/Avatars/M-01.png",
    bio: "",
  };

  if (typeof window === "undefined") return fallback;

  try {
    const personalRaw = window.localStorage.getItem(PERSONAL_PROFILE_KEY);
    const savedUserRaw =
      window.localStorage.getItem("melkism_user") ||
      window.localStorage.getItem("melkism_active_user_session_v2");

    const parsedPersonal = personalRaw ? JSON.parse(personalRaw) : {};
    const parsedUserRaw = savedUserRaw ? JSON.parse(savedUserRaw) : {};
    const parsedUser = parsedUserRaw?.user || parsedUserRaw || {};

    return {
      fullName:
        parsedPersonal.fullName ||
        parsedUser.name ||
        parsedUser.fullName ||
        fallback.fullName,
      username: parsedPersonal.username || parsedUser.username || fallback.username,
      phone:
        parsedPersonal.mobile ||
        parsedUser.phone ||
        parsedUser.mobile ||
        parsedUser.identifier ||
        "",
      email: parsedPersonal.email || parsedUser.email || "",
      country: parsedUser.country || fallback.country,
      province: parsedPersonal.province || parsedUser.province || fallback.province,
      city: parsedPersonal.city || parsedUser.city || fallback.city,
      district: parsedUser.district || "",
      birthDate: parsedUser.birthDate || "",
      avatar: parsedUser.avatar || fallback.avatar,
      bio: parsedPersonal.bio || parsedUser.bio || "",
    };
  } catch {
    return fallback;
  }
}

function loadSubscriptionState(): { subscription: string; vipMeta: VipSubscriptionMeta | null } {
  if (typeof window === "undefined") {
    return { subscription: "free", vipMeta: null };
  }

  try {
    const vipRaw = window.localStorage.getItem(VIP_RECORD_KEY);
    const parsedVip = vipRaw ? (JSON.parse(vipRaw) as VipSubscriptionMeta) : null;

    const savedUserRaw = window.localStorage.getItem("melkism_user");
    const parsedUser = savedUserRaw ? JSON.parse(savedUserRaw) : null;

    const isVip =
      Boolean(parsedVip?.active) ||
      parsedUser?.subscription === "vip" ||
      Boolean(parsedUser?.vipBadge);

    return {
      subscription: isVip ? "vip" : "free",
      vipMeta: parsedVip?.active ? parsedVip : null,
    };
  } catch {
    return { subscription: "free", vipMeta: null };
  }
}

export default function UserDashboardPage() {
  const params = useParams();
  const router = useRouter();
  const locale = (params?.locale as string) || "fa";
  const isRtl = ["fa", "ar"].includes(locale);
  const dir = isRtl ? "rtl" : "ltr";

  const { t, num } = useLocalizedText("UserDashboardHome");
  const { t: tp } = useLocalizedText("UserDashboardProfile");

  const defaultFullName = tp("defaultFullName");
  const defaultCountry = tp("defaultCountry");
  const defaultCity = tp("defaultCity");

  const [activeTab, setActiveTab] = useState<UserDashboardTab>("OVERVIEW");

  // آگهی‌ها و فایل‌های شخصی
  const [listings, setListings] = useState<PersonalListing[]>([]);
  const [listingTitle, setListingTitle] = useState("");
  const [listingDealType, setListingDealType] = useState<ListingDealType>("SALE");
  const [listingCity, setListingCity] = useState(defaultCity);
  const [listingPrice, setListingPrice] = useState("");
  const [listingCurrency, setListingCurrency] = useState<CurrencyCode>(() =>
    loadPreferredCurrency()
  );
  const [vipFeaturedListing, setVipFeaturedListing] = useState(true);

  // موارد نشان‌شده
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);
  const [savedTitle, setSavedTitle] = useState("");
  const [savedCategory, setSavedCategory] = useState(tp("savedDefaultCategory"));
  const [savedNote, setSavedNote] = useState("");

  // درخواست‌ها و مشاوره‌ها
  const [requests, setRequests] = useState<PersonalRequest[]>([]);
  const [requestTopic, setRequestTopic] = useState("");
  const [requestDetails, setRequestDetails] = useState("");
  const [vipPriorityRequest, setVipPriorityRequest] = useState(true);

  // پروفایل شخصی ادغام‌شده + پاپ‌آپ تغییر آواتار
  const [profileData, setProfileData] = useState<PersonalProfileState>(() =>
    loadInitialProfile(defaultFullName, defaultCountry, defaultCity)
  );
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);
  const [tempAvatar, setTempAvatar] = useState<string>("/images/Avatars/M-01.png");
  const [tempAvatarTab, setTempAvatarTab] = useState<"preset" | "custom">("preset");
  const [isVerified, setIsVerified] = useState(false);
  const [subscription, setSubscription] = useState<string>("free");
  const [vipMeta, setVipMeta] = useState<VipSubscriptionMeta | null>(null);
  const [profileMessage, setProfileMessage] = useState("");

  const isVip = subscription === "vip";

  useEffect(() => {
    setListingCurrency(loadPreferredCurrency());
    setListingCity((prev) => prev || defaultCity);
    setSavedCategory((prev) => prev || tp("savedDefaultCategory"));

    const initialProfile = loadInitialProfile(defaultFullName, defaultCountry, defaultCity);
    setProfileData(initialProfile);
    setTempAvatar(initialProfile.avatar);

    const isPreset = defaultAvatars.some((a) => a.src === initialProfile.avatar);
    if (!isPreset && initialProfile.avatar.startsWith("data:image")) {
      setTempAvatarTab("custom");
    }

    const syncVipAndUser = () => {
      const subState = loadSubscriptionState();
      setSubscription(subState.subscription);
      setVipMeta(subState.vipMeta);
      setVipFeaturedListing(subState.subscription === "vip");
      setVipPriorityRequest(subState.subscription === "vip");

      try {
        const savedUserRaw = window.localStorage.getItem("melkism_user");
        if (savedUserRaw) {
          const parsedUser = JSON.parse(savedUserRaw);
          setIsVerified(Boolean(parsedUser.isVerified) || subState.subscription === "vip");
        }
      } catch {
        // ignore
      }
    };

    syncVipAndUser();
    window.addEventListener("storage", syncVipAndUser);

    try {
      const rawListings = window.localStorage.getItem(LISTINGS_KEY);
      if (rawListings) {
        const parsed = JSON.parse(rawListings);
        if (Array.isArray(parsed)) {
          setListings(
            parsed.map((item) => ({
              ...item,
              currency: (item?.currency || "IRT") as CurrencyCode,
            }))
          );
        }
      }

      const rawSaved = window.localStorage.getItem(SAVED_KEY);
      if (rawSaved) {
        const parsed = JSON.parse(rawSaved);
        if (Array.isArray(parsed)) setSavedItems(parsed);
      }

      const rawRequests = window.localStorage.getItem(REQUESTS_KEY);
      if (rawRequests) {
        const parsed = JSON.parse(rawRequests);
        if (Array.isArray(parsed)) setRequests(parsed);
      }
    } catch {
      // ignore
    }

    return () => {
      window.removeEventListener("storage", syncVipAndUser);
    };
  }, [defaultFullName, defaultCountry, defaultCity, tp]);

  function persistListings(next: PersonalListing[]) {
    setListings(next);
    try {
      window.localStorage.setItem(LISTINGS_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  }

  function persistSaved(next: SavedItem[]) {
    setSavedItems(next);
    try {
      window.localStorage.setItem(SAVED_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  }

  function persistRequests(next: PersonalRequest[]) {
    setRequests(next);
    try {
      window.localStorage.setItem(REQUESTS_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
  }

  function handleAddListing(e: React.FormEvent) {
    e.preventDefault();
    if (!listingTitle.trim() || !listingPrice.trim()) return;

    const item: PersonalListing = {
      id: `lst_${Date.now()}`,
      title: listingTitle.trim(),
      dealType: listingDealType,
      city: listingCity.trim() || defaultCity,
      priceLabel: listingPrice.trim(),
      currency: listingCurrency,
      status: "PUBLISHED",
      isVipFeatured: isVip && vipFeaturedListing,
      createdAt: new Date().toISOString(),
    };

    const next = isVip && vipFeaturedListing ? [item, ...listings] : [...listings, item];
    persistListings(next);
    setListingTitle("");
    setListingPrice("");
  }

  function handleToggleListingStatus(id: string) {
    const next = listings.map((item) =>
      item.id === id
        ? {
            ...item,
            status: item.status === "PUBLISHED" ? ("DRAFT" as const) : ("PUBLISHED" as const),
          }
        : item
    );
    persistListings(next);
  }

  function handleDeleteListing(id: string) {
    persistListings(listings.filter((item) => item.id !== id));
  }

  function handleAddSaved(e: React.FormEvent) {
    e.preventDefault();
    if (!savedTitle.trim()) return;

    const item: SavedItem = {
      id: `sav_${Date.now()}`,
      title: savedTitle.trim(),
      category: savedCategory.trim() || tp("savedFallbackCategory"),
      note: savedNote.trim(),
      createdAt: new Date().toISOString(),
    };

    persistSaved([item, ...savedItems]);
    setSavedTitle("");
    setSavedNote("");
  }

  function handleDeleteSaved(id: string) {
    persistSaved(savedItems.filter((item) => item.id !== id));
  }

  function handleAddRequest(e: React.FormEvent) {
    e.preventDefault();
    if (!requestTopic.trim() || !requestDetails.trim()) return;

    const item: PersonalRequest = {
      id: `req_${Date.now()}`,
      topic: requestTopic.trim(),
      details: requestDetails.trim(),
      status: "IN_REVIEW",
      priorityVip: isVip && vipPriorityRequest,
      createdAt: new Date().toISOString(),
    };

    const next = isVip && vipPriorityRequest ? [item, ...requests] : [...requests, item];
    persistRequests(next);
    setRequestTopic("");
    setRequestDetails("");
  }

  const handleLogout = () => {
    window.localStorage.removeItem("melkism_user");
    window.localStorage.removeItem("melkism_active_user_session_v2");
    window.dispatchEvent(new Event("storage"));
    router.push(`/${locale}/login`);
  };

  const openAvatarModal = () => {
    setTempAvatar(profileData.avatar);
    const isPreset = defaultAvatars.some((a) => a.src === profileData.avatar);
    setTempAvatarTab(
      !isPreset && profileData.avatar.startsWith("data:image") ? "custom" : "preset"
    );
    setIsAvatarModalOpen(true);
  };

  const handleTempAvatarFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setTempAvatar(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConfirmAvatar = () => {
    setProfileData((prev) => ({ ...prev, avatar: tempAvatar }));
    setIsAvatarModalOpen(false);
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();

    const personalPayload = {
      fullName: profileData.fullName,
      username: profileData.username,
      email: profileData.email,
      mobile: profileData.phone,
      city: profileData.city,
      province: profileData.province,
      bio: profileData.bio,
    };

    const userPayload = {
      ...profileData,
      name: profileData.fullName,
      mobile: profileData.phone,
      isVerified: true,
      subscription,
      vipBadge: isVip,
    };

    try {
      window.localStorage.setItem(PERSONAL_PROFILE_KEY, JSON.stringify(personalPayload));
      window.localStorage.setItem("melkism_user", JSON.stringify(userPayload));

      const sessionRaw = window.localStorage.getItem("melkism_active_user_session_v2");
      if (sessionRaw) {
        const parsedSession = JSON.parse(sessionRaw);
        if (parsedSession?.user) {
          parsedSession.user = {
            ...parsedSession.user,
            fullName: profileData.fullName,
            name: profileData.fullName,
            email: profileData.email,
            mobile: profileData.phone,
            city: profileData.city,
            province: profileData.province,
            avatar: profileData.avatar,
            bio: profileData.bio,
            subscription,
            vipBadge: isVip,
          };
          window.localStorage.setItem(
            "melkism_active_user_session_v2",
            JSON.stringify(parsedSession)
          );
        }
      }

      await fetch("/api/user/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userPayload),
      }).catch(() => null);
    } catch {
      // ignore
    }

    setIsVerified(true);
    setProfileMessage(tp("profileSavedToast"));
    window.dispatchEvent(new Event("storage"));
  };

  const tabs: { id: UserDashboardTab; label: string }[] = [
    { id: "OVERVIEW", label: t("tabOverview") },
    { id: "LISTINGS", label: t("tabListings", { count: num(listings.length) }) },
    { id: "SAVED", label: t("tabSaved", { count: num(savedItems.length) }) },
    { id: "REQUESTS", label: t("tabRequests", { count: num(requests.length) }) },
    { id: "PROFILE", label: tp("tabPersonalProfile") },
  ];

  const dealTypeLabels: Record<ListingDealType, string> = {
    SALE: tp("dealSale"),
    BUY: tp("dealBuy"),
    RENT: tp("dealRent"),
    MORTGAGE: tp("dealMortgage"),
  };

  const quickModules = [
    {
      title: t("modMarketplaceTitle"),
      desc: t("modMarketplaceDesc"),
      href: `/${locale}/melkist`,
    },
    {
      title: t("modExpertsTitle"),
      desc: t("modExpertsDesc"),
      href: `/${locale}/specialists`,
    },
    {
      title: t("modMarketHubTitle"),
      desc: t("modMarketHubDesc"),
      href: `/${locale}/market-intelligence`,
    },
    {
      title: t("modLibraryTitle"),
      desc: t("modLibraryDesc"),
      href: `/${locale}/library`,
    },
  ];

  return (
    <div
      className={`min-h-screen bg-slate-50 text-slate-800 p-6 ${
        isRtl ? "dir-rtl" : "dir-ltr"
      } font-sans space-y-6`}
      dir={dir}
    >
      {/* هدر پنل کاربر عادی / شخصی */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div className="flex items-center gap-4">
          <img
            src={profileData.avatar}
            alt={profileData.fullName}
            className={`w-14 h-14 rounded-full object-cover border-2 bg-slate-100 shrink-0 ${
              isVip ? "border-amber-500 ring-2 ring-amber-300/60" : "border-indigo-500"
            }`}
          />
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full inline-block">
                {t("roleBadge")}
              </span>
              {isVip && (
                <span className="text-[11px] font-black text-amber-950 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full inline-flex items-center gap-1 shadow-2xs">
                  <span>{tp("vipBadge")}</span>
                </span>
              )}
            </div>
            <h1 className="text-2xl font-black text-slate-900">{t("pageTitle")}</h1>
            <p className="text-xs text-slate-500 mt-1">{t("pageSubtitle")}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveTab("PROFILE")}
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-4 py-3 rounded-xl transition whitespace-nowrap"
          >
            ⚙️ {t("profileCardLink")}
          </button>
          <Link
            href={`/${locale}/user/orders`}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-3 rounded-xl transition whitespace-nowrap"
          >
            📦 {t("ordersCardLink")}
          </Link>
          <Link
            href={`/${locale}/user/financial`}
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-3 rounded-xl transition shadow-sm flex items-center gap-2 whitespace-nowrap"
          >
            <span>💳 {t("walletTopBtn")}</span>
            <span className="bg-emerald-700 px-2 py-0.5 rounded text-[10px]">
              {t("walletActiveBadge")}
            </span>
          </Link>
          <Link
            href={`/${locale}/news`}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-3.5 py-3 rounded-xl transition whitespace-nowrap"
          >
            {tp("viewNewsBtn")}
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold px-3.5 py-3 rounded-xl transition whitespace-nowrap"
          >
            {tp("logoutBtn")}
          </button>
        </div>
      </div>

      {/* بنر امکانات فعال عضو ویژه پس از تایید پرداخت */}
      {isVip && (
        <div className="bg-amber-50/90 border border-amber-300 rounded-2xl p-5 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs">
          <div className="space-y-1">
            <div className="font-black text-amber-950 text-sm flex items-center gap-1.5">
              <span>⭐</span>
              <span>{tp("vipActiveBannerTitle")}</span>
            </div>
            <p className="text-amber-900/80 text-[11px] leading-relaxed">
              {tp("vipActiveBannerDesc")}
              {vipMeta?.months ? ` (${num(vipMeta.months)}M)` : ""}
              {vipMeta?.trackingCode ? ` • ${vipMeta.trackingCode}` : ""}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab("LISTINGS")}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-black px-3.5 py-2 rounded-xl transition whitespace-nowrap"
            >
              {tp("postVipListingBtn")}
            </button>
            <Link
              href={`/${locale}/market-intelligence`}
              className="bg-white hover:bg-amber-100/60 text-amber-950 border border-amber-300 font-bold px-3.5 py-2 rounded-xl transition whitespace-nowrap"
            >
              {tp("vipMarketIntelBtn")}
            </Link>
          </div>
        </div>
      )}

      {/* کارت‌های اصلی سفارش‌ها، موجودی و پروفایل */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-2 flex flex-col justify-between">
          <div className="space-y-1">
            <h3 className="font-bold text-slate-900">📦 {t("ordersCardTitle")}</h3>
            <p className="text-xs text-slate-500">{t("ordersCardDesc")}</p>
          </div>
          <Link
            href={`/${locale}/user/orders`}
            className="text-xs text-indigo-600 font-bold block pt-2 hover:underline"
          >
            {isRtl ? `← ${t("ordersCardLink")}` : `${t("ordersCardLink")} →`}
          </Link>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-2 flex flex-col justify-between">
          <div className="space-y-1">
            <h3 className="font-bold text-slate-900">💰 {t("balanceCardTitle")}</h3>
            <p className="text-xs text-slate-500">{t("balanceCardDesc")}</p>
          </div>
          <Link
            href={`/${locale}/user/financial`}
            className="text-xs text-emerald-600 font-bold block pt-2 hover:underline"
          >
            {isRtl ? `← ${t("balanceCardLink")}` : `${t("balanceCardLink")} →`}
          </Link>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-2 flex flex-col justify-between">
          <div className="space-y-1">
            <h3 className="font-bold text-slate-900">⚙️ {t("profileCardTitle")}</h3>
            <p className="text-xs text-slate-500">{t("profileCardDesc")}</p>
          </div>
          <button
            type="button"
            onClick={() => setActiveTab("PROFILE")}
            className="text-xs text-slate-700 font-bold pt-2 hover:underline text-start"
          >
            {isRtl ? `← ${t("profileCardLink")}` : `${t("profileCardLink")} →`}
          </button>
        </div>
      </div>

      {/* تب‌های بخش‌های اختصاصی کاربر عادی */}
      <div className="bg-white border border-slate-200 rounded-2xl p-2 shadow-sm flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeTab === tab.id
                ? "bg-indigo-600 text-white"
                : "text-slate-600 hover:bg-slate-100"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* نمای کلی و دسترسی سریع به بخش‌های سایت */}
      {activeTab === "OVERVIEW" && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-sm font-black text-slate-900">{t("quickAccessTitle")}</h2>
            <span className="text-[11px] text-slate-500">
              {t("summaryCounts", {
                listings: num(listings.length),
                saved: num(savedItems.length),
                requests: num(requests.length),
              })}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
            {quickModules.map((mod) => (
              <Link
                key={mod.href}
                href={mod.href}
                className="p-4 rounded-xl border border-slate-200 hover:border-indigo-400 bg-slate-50/60 transition space-y-1 block"
              >
                <div className="flex items-center justify-between gap-1">
                  <span className="font-bold text-slate-900">{mod.title}</span>
                  {isVip && (
                    <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                      VIP
                    </span>
                  )}
                </div>
                <span className="text-slate-500 text-[11px] block leading-relaxed">
                  {mod.desc}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* مدیریت آگهی‌ها و فایل‌های شخصی */}
      {activeTab === "LISTINGS" && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <h2 className="text-sm font-black text-slate-900">{tp("listingsSectionTitle")}</h2>
            {isVip && (
              <span className="text-[11px] font-black text-amber-950 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full">
                {tp("vipListingBadge")}
              </span>
            )}
          </div>

          <form onSubmit={handleAddListing} className="space-y-3 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
              <input
                type="text"
                value={listingTitle}
                onChange={(e) => setListingTitle(e.target.value)}
                placeholder={tp("listingTitlePlaceholder")}
                className="border border-slate-200 rounded-xl px-3 py-2 bg-slate-50 outline-none focus:border-indigo-600 lg:col-span-2"
                required
              />
              <select
                value={listingDealType}
                onChange={(e) => setListingDealType(e.target.value as ListingDealType)}
                className="border border-slate-200 rounded-xl px-3 py-2 bg-slate-50 outline-none"
              >
                {(Object.keys(dealTypeLabels) as ListingDealType[]).map((key) => (
                  <option key={key} value={key}>
                    {dealTypeLabels[key]}
                  </option>
                ))}
              </select>
              <input
                type="text"
                value={listingCity}
                onChange={(e) => setListingCity(e.target.value)}
                placeholder={tp("listingCityPlaceholder")}
                className="border border-slate-200 rounded-xl px-3 py-2 bg-slate-50 outline-none focus:border-indigo-600"
              />
              <div className="flex gap-1.5">
                <input
                  type="text"
                  value={listingPrice}
                  onChange={(e) => setListingPrice(e.target.value)}
                  placeholder={tp("listingPricePlaceholder")}
                  className="border border-slate-200 rounded-xl px-3 py-2 bg-slate-50 outline-none focus:border-indigo-600 w-full"
                  required
                />
                <select
                  value={listingCurrency}
                  onChange={(e) => setListingCurrency(e.target.value as CurrencyCode)}
                  className="border border-slate-200 rounded-xl px-2 py-2 bg-slate-50 font-bold outline-none"
                >
                  {SUPPORTED_CURRENCIES.map((c) => (
                    <option key={c.code} value={c.code}>
                      {c.code}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-3.5 py-2 rounded-xl transition whitespace-nowrap"
              >
                {isVip && vipFeaturedListing ? tp("submitVipListingBtn") : tp("addBtn")}
              </button>
            </div>

            {isVip && (
              <label className="inline-flex items-center gap-2 text-[11px] font-bold text-amber-900 bg-amber-50 border border-amber-200 px-3 py-2 rounded-xl cursor-pointer">
                <input
                  type="checkbox"
                  checked={vipFeaturedListing}
                  onChange={(e) => setVipFeaturedListing(e.target.checked)}
                  className="rounded border-amber-400"
                />
                <span>{tp("vipListingCheckbox")}</span>
              </label>
            )}
          </form>

          {listings.length === 0 ? (
            <p className="text-xs text-slate-400 py-4">{tp("noListingsText")}</p>
          ) : (
            <div className="space-y-2 text-xs">
              {listings.map((item) => (
                <div
                  key={item.id}
                  className={`p-3.5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    item.isVipFeatured
                      ? "border-amber-300 bg-amber-50/40"
                      : "border-slate-200"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-slate-900">{item.title}</span>
                      {item.isVipFeatured && (
                        <span className="text-[10px] font-black text-amber-950 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-full">
                          {tp("vipFeaturedTag")}
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      {dealTypeLabels[item.dealType]} • {item.city} •{" "}
                      {formatDeclaredMoney(item.priceLabel, item.currency, isRtl)}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleToggleListingStatus(item.id)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-bold ${
                        item.status === "PUBLISHED"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-amber-50 text-amber-700"
                      }`}
                    >
                      {item.status === "PUBLISHED"
                        ? tp("publishedStatus")
                        : tp("draftStatus")}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteListing(item.id)}
                      className="text-rose-600 hover:underline font-bold px-2 py-1"
                    >
                      {tp("deleteBtn")}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* موارد نشان‌شده */}
      {activeTab === "SAVED" && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5">
          <h2 className="text-sm font-black text-slate-900">{tp("savedSectionTitle")}</h2>

          <form
            onSubmit={handleAddSaved}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs"
          >
            <input
              type="text"
              value={savedTitle}
              onChange={(e) => setSavedTitle(e.target.value)}
              placeholder={tp("savedTitlePlaceholder")}
              className="border border-slate-200 rounded-xl px-3 py-2 bg-slate-50 outline-none focus:border-indigo-600"
              required
            />
            <input
              type="text"
              value={savedCategory}
              onChange={(e) => setSavedCategory(e.target.value)}
              placeholder={tp("savedCategoryPlaceholder")}
              className="border border-slate-200 rounded-xl px-3 py-2 bg-slate-50 outline-none focus:border-indigo-600"
            />
            <div className="flex gap-2">
              <input
                type="text"
                value={savedNote}
                onChange={(e) => setSavedNote(e.target.value)}
                placeholder={tp("savedNotePlaceholder")}
                className="border border-slate-200 rounded-xl px-3 py-2 bg-slate-50 outline-none focus:border-indigo-600 w-full"
              />
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-3.5 py-2 rounded-xl transition whitespace-nowrap"
              >
                {tp("saveBtn")}
              </button>
            </div>
          </form>

          {savedItems.length === 0 ? (
            <p className="text-xs text-slate-400 py-4">{tp("noSavedText")}</p>
          ) : (
            <div className="space-y-2 text-xs">
              {savedItems.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl border border-slate-200 flex items-center justify-between gap-3"
                >
                  <div>
                    <span className="font-bold text-slate-900">{item.title}</span>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      {item.category}
                      {item.note ? ` • ${item.note}` : ""}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleDeleteSaved(item.id)}
                    className="text-rose-600 hover:underline font-bold px-2 py-1"
                  >
                    {tp("removeBtn")}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* درخواست‌ها و مشاوره‌ها */}
      {activeTab === "REQUESTS" && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <h2 className="text-sm font-black text-slate-900">{tp("requestsSectionTitle")}</h2>
            {isVip && (
              <span className="text-[11px] font-black text-amber-950 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full">
                {tp("vipRequestBadge")}
              </span>
            )}
          </div>

          <form onSubmit={handleAddRequest} className="space-y-3 text-xs">
            <input
              type="text"
              value={requestTopic}
              onChange={(e) => setRequestTopic(e.target.value)}
              placeholder={tp("requestTopicPlaceholder")}
              className="w-full border border-slate-200 rounded-xl px-3 py-2 bg-slate-50 outline-none focus:border-indigo-600"
              required
            />
            <textarea
              rows={3}
              value={requestDetails}
              onChange={(e) => setRequestDetails(e.target.value)}
              placeholder={tp("requestDetailsPlaceholder")}
              className="w-full border border-slate-200 rounded-xl px-3 py-2 bg-slate-50 outline-none focus:border-indigo-600"
              required
            />

            {isVip && (
              <label className="inline-flex items-center gap-2 text-[11px] font-bold text-amber-900 bg-amber-50 border border-amber-200 px-3 py-2 rounded-xl cursor-pointer">
                <input
                  type="checkbox"
                  checked={vipPriorityRequest}
                  onChange={(e) => setVipPriorityRequest(e.target.checked)}
                  className="rounded border-amber-400"
                />
                <span>{tp("vipRequestCheckbox")}</span>
              </label>
            )}

            <div>
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-4 py-2 rounded-xl transition"
              >
                {isVip && vipPriorityRequest ? tp("submitVipRequestBtn") : tp("submitRequestBtn")}
              </button>
            </div>
          </form>

          {requests.length > 0 && (
            <div className="space-y-2 text-xs pt-2 border-t border-slate-100">
              {requests.map((req) => (
                <div
                  key={req.id}
                  className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 ${
                    req.priorityVip
                      ? "border-amber-300 bg-amber-50/40"
                      : "border-slate-200"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-slate-900">{req.topic}</span>
                      {req.priorityVip && (
                        <span className="text-[10px] font-black text-amber-950 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-full">
                          {tp("vipPriorityTag")}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">{req.details}</p>
                  </div>
                  <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-amber-50 text-amber-800 whitespace-nowrap">
                    {req.status === "IN_REVIEW" ? tp("inReviewStatus") : tp("answeredStatus")}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* بخش ادغام‌شده پروفایل شخصی کاربر عادی */}
      {activeTab === "PROFILE" && (
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6 text-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full inline-block">
                  {tp("personalAccountBadge")}
                </span>
                {isVip ? (
                  <span className="text-[11px] font-black text-amber-950 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full inline-flex items-center gap-1">
                    <span>{tp("vipBadge")}</span>
                  </span>
                ) : (
                  <span className="text-[11px] font-bold text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full inline-block">
                    {tp("standardMembership")}
                  </span>
                )}
              </div>
              <h2 className="text-base font-black text-slate-900">{tp("editProfileTitle")}</h2>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {isVerified ? tp("profileVerifiedDesc") : tp("profileIncompleteDesc")}
              </p>
            </div>

            <Link
              href={`/${locale}/user/vip`}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-4 py-2.5 rounded-xl transition whitespace-nowrap self-start sm:self-center"
            >
              {isVip ? tp("manageVipBtn") : tp("upgradeVipBtn")}
            </Link>
          </div>

          {profileMessage && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold px-4 py-3 rounded-xl">
              {profileMessage}
            </div>
          )}

          <form onSubmit={handleSaveProfile} className="space-y-5">
            <div className="flex items-center gap-4 pb-2">
              <div className="relative inline-block">
                <img
                  src={profileData.avatar}
                  alt={tp("avatarSectionTitle")}
                  className={`w-16 h-16 rounded-full object-cover border-2 bg-slate-100 ${
                    isVip ? "border-amber-500 ring-2 ring-amber-300/60" : "border-indigo-500"
                  }`}
                />
                <button
                  type="button"
                  onClick={openAvatarModal}
                  title={tp("changeAvatarTitle")}
                  className="absolute -bottom-1 -end-1 w-8 h-8 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white shadow-md flex items-center justify-center border-2 border-white transition"
                >
                  ✏️
                </button>
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-slate-900">{tp("avatarSectionTitle")}</span>
                  {isVip && (
                    <span className="text-[10px] font-black text-amber-950 bg-amber-100 border border-amber-300 px-2 py-0.5 rounded-full">
                      {tp("vipBadge")}
                    </span>
                  )}
                </div>
                <p className="text-[11px] text-slate-500">{tp("avatarSectionHint")}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 border-t border-slate-100">
              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">{tp("fieldFullName")}</label>
                <input
                  type="text"
                  required
                  value={profileData.fullName}
                  onChange={(e) =>
                    setProfileData({ ...profileData, fullName: e.target.value })
                  }
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 bg-slate-50 outline-none focus:border-indigo-600"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">{tp("fieldUsername")}</label>
                <input
                  type="text"
                  dir="ltr"
                  value={profileData.username}
                  onChange={(e) =>
                    setProfileData({ ...profileData, username: e.target.value })
                  }
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 bg-slate-50 font-mono outline-none focus:border-indigo-600"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">{tp("fieldMobile")}</label>
                <input
                  type="text"
                  dir="ltr"
                  value={profileData.phone}
                  onChange={(e) =>
                    setProfileData({ ...profileData, phone: e.target.value })
                  }
                  placeholder="09120000000"
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 bg-slate-50 font-mono outline-none focus:border-indigo-600"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">{tp("fieldEmail")}</label>
                <input
                  type="email"
                  dir="ltr"
                  value={profileData.email}
                  onChange={(e) =>
                    setProfileData({ ...profileData, email: e.target.value })
                  }
                  placeholder="name@example.com"
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 bg-slate-50 font-mono outline-none focus:border-indigo-600"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">{tp("fieldProvince")}</label>
                <input
                  type="text"
                  value={profileData.province}
                  onChange={(e) =>
                    setProfileData({ ...profileData, province: e.target.value })
                  }
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 bg-slate-50 outline-none focus:border-indigo-600"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700 block">{tp("fieldCity")}</label>
                <input
                  type="text"
                  required
                  value={profileData.city}
                  onChange={(e) =>
                    setProfileData({ ...profileData, city: e.target.value })
                  }
                  className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 bg-slate-50 outline-none focus:border-indigo-600"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700 block">{tp("fieldBio")}</label>
              <textarea
                rows={3}
                value={profileData.bio}
                onChange={(e) =>
                  setProfileData({ ...profileData, bio: e.target.value })
                }
                placeholder={tp("bioPlaceholder")}
                className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 bg-slate-50 outline-none focus:border-indigo-600"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-black px-5 py-2.5 rounded-xl transition"
              >
                {tp("saveProfileBtn")}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* باکس پاپ‌آپ انتخاب و تایید تصویر آواتار */}
      {isAvatarModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div
            className="bg-white border border-slate-200 rounded-2xl w-full max-w-lg p-6 shadow-2xl space-y-5 text-xs text-slate-800"
            dir={dir}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h4 className="text-sm font-black text-slate-900">{tp("avatarModalTitle")}</h4>
              <button
                type="button"
                onClick={() => setIsAvatarModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 font-bold px-2 py-1"
              >
                ✕
              </button>
            </div>

            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-3">
                <img
                  src={tempAvatar}
                  alt={tp("previewBeforeConfirm")}
                  className="w-14 h-14 rounded-full object-cover border-2 border-indigo-600 bg-slate-100"
                />
                <span className="text-[11px] text-slate-500 font-bold">
                  {tp("previewBeforeConfirm")}
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setTempAvatarTab("preset")}
                  className={`px-3 py-1.5 rounded-lg border font-bold transition ${
                    tempAvatarTab === "preset"
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-slate-50 text-slate-600 border-slate-200"
                  }`}
                >
                  {tp("systemAvatarsTab")}
                </button>
                <button
                  type="button"
                  onClick={() => setTempAvatarTab("custom")}
                  className={`px-3 py-1.5 rounded-lg border font-bold transition ${
                    tempAvatarTab === "custom"
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-slate-50 text-slate-600 border-slate-200"
                  }`}
                >
                  {tp("customPhotoTab")}
                </button>
              </div>
            </div>

            {tempAvatarTab === "preset" ? (
              <div className="grid grid-cols-5 gap-3 pt-1">
                {defaultAvatars.map((item) => {
                  const isSelected = tempAvatar === item.src;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setTempAvatar(item.src)}
                      title={item.label}
                      className={`p-1.5 rounded-full transition flex items-center justify-center ${
                        isSelected
                          ? "ring-2 ring-indigo-600 bg-indigo-50"
                          : "border border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <img
                        src={item.src}
                        alt={item.label}
                        className="w-11 h-11 rounded-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="p-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 space-y-2">
                <label className="block font-bold text-slate-700">{tp("uploadPhotoLabel")}</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleTempAvatarFileUpload}
                  className="block w-full text-xs text-slate-600"
                />
              </div>
            )}

            <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setIsAvatarModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition"
              >
                {tp("cancelBtn")}
              </button>
              <button
                type="button"
                onClick={handleConfirmAvatar}
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-black transition"
              >
                {tp("confirmImageBtn")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}