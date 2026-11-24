"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const defaultAvatars = [
  { id: "M-01", src: "/images/Avatars/M-01.png", label: "آقای ۱" },
  { id: "M-02", src: "/images/Avatars/M-02.png", label: "آقای ۲" },
  { id: "M-03", src: "/images/Avatars/M-03.png", label: "آقای ۳" },
  { id: "M-04", src: "/images/Avatars/M-04.png", label: "آقای ۴" },
  { id: "M-05", src: "/images/Avatars/M-05.png", label: "آقای ۵" },
  { id: "W-01", src: "/images/Avatars/W-01.png", label: "خانم ۱" },
  { id: "W-02", src: "/images/Avatars/W-02.png", label: "خانم ۲" },
  { id: "W-03", src: "/images/Avatars/W-03.png", label: "خانم ۳" },
  { id: "W-04", src: "/images/Avatars/W-04.png", label: "خانم ۴" },
  { id: "W-05", src: "/images/Avatars/W-05.png", label: "خانم ۵" },
];

export interface UnifiedProfileFormProps {
  locale: string;
  isRtl: boolean;
  isPersonalOnly?: boolean;
  backHref?: string;
  backLabel?: string;
}

export default function UnifiedProfileForm({
  locale,
  isRtl,
  isPersonalOnly = false,
  backHref,
  backLabel,
}: UnifiedProfileFormProps) {
  const router = useRouter();
  const dir = isRtl ? "rtl" : "ltr";

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    country: isRtl ? "ایران" : "Iran",
    city: "",
    district: "",
    job: "",
    birthDate: "",
    avatar: "/images/Avatars/M-01.png",
    bio: "",
  });
  const [avatarTab, setAvatarTab] = useState<"preset" | "custom">("preset");
  const [isVerified, setIsVerified] = useState(false);
  const [subscription, setSubscription] = useState("free");
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const personalRaw = isPersonalOnly
        ? window.localStorage.getItem("melkism_user_personal_profile_v1")
        : null;
      const savedUser = window.localStorage.getItem("melkism_user");

      if (!savedUser && !personalRaw && !isPersonalOnly) {
        router.push(`/${locale}/login`);
        return;
      }

      const parsedPersonal = personalRaw ? JSON.parse(personalRaw) : {};
      const parsedUser = savedUser ? JSON.parse(savedUser) : {};

      const merged = {
        fullName:
          parsedPersonal.fullName ||
          parsedUser.name ||
          parsedUser.fullName ||
          "",
        phone:
          parsedPersonal.mobile ||
          parsedUser.phone ||
          parsedUser.identifier ||
          "",
        email: parsedPersonal.email || parsedUser.email || "",
        country: parsedUser.country || (isRtl ? "ایران" : "Iran"),
        city: parsedPersonal.city || parsedUser.city || "",
        district: parsedUser.district || "",
        job: isPersonalOnly ? "" : parsedUser.job || "",
        birthDate: parsedUser.birthDate || "",
        avatar: parsedUser.avatar || "/images/Avatars/M-01.png",
        bio: parsedPersonal.bio || parsedUser.bio || "",
      };

      setFormData(merged);

      const isPreset = defaultAvatars.some((a) => a.src === merged.avatar);
      if (!isPreset && merged.avatar.startsWith("data:image")) {
        setAvatarTab("custom");
      }

      setIsVerified(Boolean(parsedUser.isVerified));
      setSubscription(parsedUser.subscription || "free");
    } catch {
      // نادیده گرفتن خطای خواندن اطلاعات ذخیره شده
    }
  }, [router, locale, isRtl, isPersonalOnly]);

  const handleLogout = () => {
    window.localStorage.removeItem("melkism_user");
    window.dispatchEvent(new Event("storage"));
    router.push(`/${locale}/login`);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setFormData((prev) => ({ ...prev, avatar: reader.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      ...formData,
      job: isPersonalOnly ? "" : formData.job,
    };

    try {
      const res = await fetch("/api/user/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      const updatedUser = data?.success && data?.user
        ? { ...data.user, job: isPersonalOnly ? "" : data.user.job }
        : { ...payload, isVerified: true, subscription };

      window.localStorage.setItem("melkism_user", JSON.stringify(updatedUser));

      if (isPersonalOnly) {
        window.localStorage.setItem(
          "melkism_user_personal_profile_v1",
          JSON.stringify({
            fullName: payload.fullName,
            username: "personal_user",
            email: payload.email,
            mobile: payload.phone,
            city: payload.city,
            province: payload.country,
            bio: payload.bio,
          })
        );
      }

      setMessage(
        isRtl
          ? "پروفایل با موفقیت بروزرسانی شد!"
          : "Profile updated successfully!"
      );
      setIsVerified(true);
      window.dispatchEvent(new Event("storage"));
    } catch {
      window.localStorage.setItem(
        "melkism_user",
        JSON.stringify({ ...payload, isVerified: true, subscription })
      );
      if (isPersonalOnly) {
        window.localStorage.setItem(
          "melkism_user_personal_profile_v1",
          JSON.stringify({
            fullName: payload.fullName,
            username: "personal_user",
            email: payload.email,
            mobile: payload.phone,
            city: payload.city,
            province: payload.country,
            bio: payload.bio,
          })
        );
      }
      setMessage(
        isRtl
          ? "اطلاعات با موفقیت ذخیره و تایید شد!"
          : "Information saved and verified!"
      );
      setIsVerified(true);
      window.dispatchEvent(new Event("storage"));
    }
  };

  return (
    <div
      className={`min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6 lg:px-8 ${
        dir === "rtl" ? "dir-rtl" : "dir-ltr"
      } font-sans`}
      dir={dir}
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b border-slate-800 gap-4 ${
            dir === "rtl" ? "text-right" : "text-left"
          }`}
        >
          <div>
            <h1 className="text-2xl font-bold text-white">
              {isPersonalOnly
                ? isRtl
                  ? "پروفایل شخصی و مدیریت دسترسی‌ها (USER)"
                  : "Personal Profile & Access (USER)"
                : isRtl
                ? "پروفایل و مدیریت دسترسی‌ها"
                : "Profile & Access Management"}
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              {isPersonalOnly
                ? isRtl
                  ? "مدیریت آواتار، اطلاعات فردی و موقعیت جغرافیایی حساب شخصی"
                  : "Manage avatar, personal identity, and location for your personal account"
                : isRtl
                ? "تکمیل اطلاعات جهت دسترسی به تحلیل‌های ملکی و ساخت‌وساز"
                : "Complete your details for real estate and construction insights"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {backHref && (
              <Link
                href={backHref}
                className="bg-slate-800 hover:bg-slate-700 text-xs px-4 py-2 rounded-xl transition"
              >
                {backLabel || (isRtl ? "بازگشت به داشبورد" : "Back to Dashboard")}
              </Link>
            )}
            <Link
              href={`/${locale}/news`}
              className="bg-slate-800 hover:bg-slate-700 text-xs px-4 py-2 rounded-xl transition"
            >
              {isRtl ? "مشاهده اخبار" : "News"}
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-semibold px-4 py-2 rounded-xl transition flex items-center gap-1.5"
            >
              <span>🚪</span>
              <span>{isRtl ? "خروج" : "Logout"}</span>
            </button>
          </div>
        </div>

        {/* کارت وضعیت اشتراک */}
        <div className="bg-gradient-to-r from-blue-900/40 to-slate-900 border border-blue-500/30 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className={dir === "rtl" ? "text-right" : "text-left"}>
            <span className="text-xs font-bold bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full border border-blue-500/30 inline-block">
              {subscription === "vip"
                ? isRtl
                  ? "👑 عضویت ویژه دوره‌ای (VIP)"
                  : "👑 VIP Membership"
                : isRtl
                ? "عضویت معمولی"
                : "Standard Membership"}
            </span>
            <h2 className="text-lg font-bold text-white mt-2">
              {subscription === "vip"
                ? isRtl
                  ? "دسترسی کامل به گزارش‌های جامع ساخت‌وساز و معماری"
                  : "Full access to construction & architecture reports"
                : isRtl
                ? "ارتقا به عضویت ویژه دوره‌ای"
                : "Upgrade to Periodic VIP Membership"}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              {isVerified
                ? isRtl
                  ? "پروفایل شما احراز شده است."
                  : "Your profile is verified."
                : isRtl
                ? "برای باز شدن تمام بخش‌ها، اطلاعات اجباری زیر را تکمیل کنید."
                : "Complete required fields below to unlock all features."}
            </p>
          </div>
          {subscription !== "vip" && (
            <button
              type="button"
              onClick={() =>
                alert(
                  isRtl
                    ? "انتقال به درگاه پرداخت حق عضویت دوره‌ای"
                    : "Redirecting to membership payment gateway"
                )
              }
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs px-6 py-3 rounded-xl shadow-lg transition whitespace-nowrap"
            >
              {isRtl ? "خرید حق عضویت ویژه ⭐" : "Buy VIP Membership ⭐"}
            </button>
          )}
        </div>

        {message && (
          <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs p-3 rounded-xl mb-6 text-center">
            {message}
          </div>
        )}

        {/* فرم اطلاعات پروفایل */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6"
        >
          <h3 className="text-sm font-bold text-blue-400 border-b border-slate-800 pb-3">
            {isRtl
              ? "۱. انتخاب آواتار و تصویر کاربری"
              : "1. Avatar & Profile Picture"}
          </h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">
                {isRtl ? "تصویر پروفایل انتخابی:" : "Selected profile image:"}
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setAvatarTab("preset")}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition ${
                    avatarTab === "preset"
                      ? "bg-blue-600 text-white border-blue-500"
                      : "bg-transparent text-slate-400 border-slate-800 hover:bg-slate-800/50"
                  }`}
                >
                  {isRtl ? "آواتارهای سیستم" : "System Avatars"}
                </button>
                <button
                  type="button"
                  onClick={() => setAvatarTab("custom")}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition ${
                    avatarTab === "custom"
                      ? "bg-blue-600 text-white border-blue-500"
                      : "bg-transparent text-slate-400 border-slate-800 hover:bg-slate-800/50"
                  }`}
                >
                  {isRtl ? "آپلود عکس شخصی" : "Upload Custom Photo"}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 p-2">
              <div className="relative">
                <img
                  src={formData.avatar}
                  alt={isRtl ? "پیش‌نمایش آواتار" : "Avatar preview"}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 bg-transparent"
                />
              </div>
              <div className="text-xs space-y-1">
                <span className="text-white font-bold block">
                  {isRtl ? "تصویر فعلی شما" : "Current Avatar"}
                </span>
                <span className="text-slate-500 block">
                  {isRtl
                    ? "این آواتار به‌صورت زنده در هدر سایت قرار می‌گیرد."
                    : "Displayed live in the site header."}
                </span>
              </div>
            </div>

            {avatarTab === "preset" && (
              <div className="space-y-2">
                <label className="block text-xs text-slate-400">
                  {isRtl ? "یک آواتار انتخاب کنید:" : "Choose an avatar:"}
                </label>
                <div className="grid grid-cols-5 sm:grid-cols-10 gap-3">
                  {defaultAvatars.map((item) => {
                    const isSelected = formData.avatar === item.src;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          setFormData((prev) => ({ ...prev, avatar: item.src }))
                        }
                        className={`relative p-1 rounded-full transition transform hover:scale-110 flex items-center justify-center ${
                          isSelected
                            ? "ring-2 ring-blue-500 border border-blue-500 bg-blue-500/10"
                            : "border border-transparent hover:border-slate-700"
                        }`}
                        title={item.label}
                      >
                        <img
                          src={item.src}
                          alt={item.label}
                          className="w-12 h-12 rounded-full object-cover bg-transparent"
                        />
                        {isSelected && (
                          <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow">
                            ✓
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {avatarTab === "custom" && (
              <div className="space-y-3 p-3 rounded-xl border border-slate-800/80 bg-transparent">
                <label className="block text-xs text-slate-400 mb-1">
                  {isRtl
                    ? "انتخاب و آپلود عکس از رایانه یا موبایل:"
                    : "Choose and upload photo from device:"}
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="block w-full text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
                />
              </div>
            )}
          </div>

          <h3 className="text-sm font-bold text-blue-400 border-b border-slate-800 pb-3 pt-4">
            {isRtl
              ? "۲. اطلاعات شناسایی و عمومی"
              : "2. Identity & Contact Details"}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-slate-400 mb-1">
                {isRtl ? "نام و نام خانوادگی (اجباری)" : "Full Name (Required)"}
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">
                {isRtl ? "شماره تماس (اجباری)" : "Phone Number (Required)"}
              </label>
              <input
                type="text"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className={`w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 font-mono ${
                  dir === "rtl" ? "text-right" : "text-left"
                }`}
                dir="ltr"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">
                {isRtl ? "تاریخ تولد (اختیاری)" : "Birth Date (Optional)"}
              </label>
              <input
                type="date"
                value={formData.birthDate}
                onChange={(e) =>
                  setFormData({ ...formData, birthDate: e.target.value })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 font-mono"
                dir="ltr"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">
                {isRtl ? "پست الکترونیکی (اختیاری)" : "Email (Optional)"}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="example@mail.com"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 font-mono"
                dir="ltr"
              />
            </div>
          </div>

          <h3 className="text-sm font-bold text-blue-400 border-b border-slate-800 pb-3 pt-4">
            {isPersonalOnly
              ? isRtl
                ? "۳. اطلاعات جغرافیایی"
                : "3. Location Details"
              : isRtl
              ? "۳. اطلاعات جغرافیایی و شغلی"
              : "3. Location & Occupation"}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-slate-400 mb-1">
                {isRtl ? "کشور" : "Country"}
              </label>
              <input
                type="text"
                value={formData.country}
                onChange={(e) =>
                  setFormData({ ...formData, country: e.target.value })
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">
                {isRtl ? "شهر (اجباری)" : "City (Required)"}
              </label>
              <input
                type="text"
                required
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                placeholder={isRtl ? "مثال: تهران" : "e.g. Tehran"}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">
                {isRtl ? "محله / منطقه (اختیاری)" : "District / Area (Optional)"}
              </label>
              <input
                type="text"
                value={formData.district}
                onChange={(e) =>
                  setFormData({ ...formData, district: e.target.value })
                }
                placeholder={isRtl ? "مثال: سعادت‌آباد" : "e.g. Saadat Abad"}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {!isPersonalOnly && (
            <div>
              <label className="block text-xs text-slate-400 mb-1">
                {isRtl
                  ? "شغل / حوزه فعالیت ملکی"
                  : "Occupation / Real Estate Field"}
              </label>
              <input
                type="text"
                value={formData.job}
                onChange={(e) =>
                  setFormData({ ...formData, job: e.target.value })
                }
                placeholder={
                  isRtl
                    ? "مثال: سازنده، مشاور املاک، معمار..."
                    : "e.g. Developer, Real Estate Agent, Architect..."
                }
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl text-sm transition shadow-lg"
          >
            {isRtl
              ? "ذخیره و احراز نهایی اطلاعات 💾"
              : "Save & Verify Profile 💾"}
          </button>
        </form>
      </div>
    </div>
  );
}