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

type VipDuration = "1M" | "3M" | "6M" | "12M";

interface VipPlanOption {
  id: VipDuration;
  months: number;
  titleKey: "plan1M" | "plan3M" | "plan6M" | "plan12M";
  badgeKey?: "popularBadge" | "bestValueBadge";
  declaredPrice: string;
}

const VIP_PLANS: VipPlanOption[] = [
  { id: "1M", months: 1, titleKey: "plan1M", declaredPrice: "490,000" },
  { id: "3M", months: 3, titleKey: "plan3M", badgeKey: "popularBadge", declaredPrice: "1,290,000" },
  { id: "6M", months: 6, titleKey: "plan6M", declaredPrice: "2,390,000" },
  { id: "12M", months: 12, titleKey: "plan12M", badgeKey: "bestValueBadge", declaredPrice: "4,200,000" },
];

const VIP_FEATURES: {
  titleKey: "featBadgeTitle" | "featVisibilityTitle" | "featMarketTitle" | "featSupportTitle";
  descKey: "featBadgeDesc" | "featVisibilityDesc" | "featMarketDesc" | "featSupportDesc";
}[] = [
  { titleKey: "featBadgeTitle", descKey: "featBadgeDesc" },
  { titleKey: "featVisibilityTitle", descKey: "featVisibilityDesc" },
  { titleKey: "featMarketTitle", descKey: "featMarketDesc" },
  { titleKey: "featSupportTitle", descKey: "featSupportDesc" },
];

export default function UserVipPlansPage() {
  const params = useParams();
  const router = useRouter();
  const locale = (params?.locale as string) || "fa";
  const isRtl = ["fa", "ar"].includes(locale);
  const dir = isRtl ? "rtl" : "ltr";

  const { t: tv, num } = useLocalizedText("UserVip");

  const [selectedDuration, setSelectedDuration] = useState<VipDuration>("3M");
  const [currency, setCurrency] = useState<CurrencyCode>("IRT");
  const [isVipActive, setIsVipActive] = useState(false);

  useEffect(() => {
    setCurrency(loadPreferredCurrency());
    try {
      const rawUser = window.localStorage.getItem("melkism_user");
      if (rawUser) {
        const parsed = JSON.parse(rawUser);
        setIsVipActive(parsed?.subscription === "vip");
      }
    } catch {
      // ignore
    }
  }, []);

  const activePlan = VIP_PLANS.find((p) => p.id === selectedDuration) || VIP_PLANS[1];
  const activePlanTitle = tv(activePlan.titleKey);

  function handleProceedToPayment(e: React.FormEvent) {
    e.preventDefault();
    try {
      window.localStorage.setItem(
        "melkism_pending_vip_request_v1",
        JSON.stringify({
          planId: activePlan.id,
          months: activePlan.months,
          title: activePlanTitle,
          declaredPrice: activePlan.declaredPrice,
          currency,
          createdAt: new Date().toISOString(),
        })
      );
    } catch {
      // ignore
    }

    const query = new URLSearchParams({
      plan: activePlan.id,
      currency,
    }).toString();

    router.push(`/${locale}/user/vip/pay?${query}`);
  }

  return (
    <div
      className={`min-h-screen bg-slate-50 text-slate-800 p-6 ${
        isRtl ? "dir-rtl" : "dir-ltr"
      } font-sans space-y-6`}
      dir={dir}
    >
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200 px-3 py-1 rounded-full">
              {tv("pageBadge")}
            </span>
            {isVipActive && (
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                {tv("activeBadge")}
              </span>
            )}
          </div>
          <h1 className="text-2xl font-black text-slate-900">{tv("pageTitle")}</h1>
          <p className="text-xs text-slate-500">{tv("pageSubtitle")}</p>
        </div>

        <Link
          href={`/${locale}/user/dashboard`}
          className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition whitespace-nowrap"
        >
          {tv("backToDashboard")}
        </Link>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <h2 className="text-sm font-black text-slate-900">{tv("featuresTitle")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {VIP_FEATURES.map((feat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-1.5"
            >
              <div className="font-bold text-slate-900">⭐ {tv(feat.titleKey)}</div>
              <p className="text-[11px] text-slate-500 leading-relaxed">{tv(feat.descKey)}</p>
            </div>
          ))}
        </div>
      </div>

      <form
        onSubmit={handleProceedToPayment}
        className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6 text-xs"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h2 className="text-sm font-black text-slate-900">{tv("selectDurationTitle")}</h2>

          <div className="flex items-center gap-2">
            <label className="font-bold text-slate-600">{tv("declaredCurrencyLabel")}</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
              className="border border-slate-200 rounded-xl px-3 py-1.5 bg-slate-50 font-bold outline-none"
            >
              {SUPPORTED_CURRENCIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.code}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {VIP_PLANS.map((plan) => {
            const isSelected = plan.id === selectedDuration;
            return (
              <button
                key={plan.id}
                type="button"
                onClick={() => setSelectedDuration(plan.id)}
                className={`p-4 rounded-2xl border text-start transition space-y-2 ${
                  isSelected
                    ? "border-indigo-600 bg-indigo-50/60 ring-2 ring-indigo-600/20"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-black text-slate-900 text-sm">{tv(plan.titleKey)}</span>
                  {plan.badgeKey && (
                    <span className="text-[10px] font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                      {tv(plan.badgeKey)}
                    </span>
                  )}
                </div>

                <div className="text-base font-black text-indigo-700">
                  {formatDeclaredMoney(plan.declaredPrice, currency, isRtl)}
                </div>

                <div className="text-[11px] text-slate-500">
                  {tv("planValidityText", { months: num(plan.months) })}
                </div>
              </button>
            );
          })}
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-0.5">
            <span className="text-slate-500 block">{tv("selectedPlanSummaryLabel")}</span>
            <strong className="text-sm font-black text-slate-900">
              {activePlanTitle} — {formatDeclaredMoney(activePlan.declaredPrice, currency, isRtl)}
            </strong>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-black px-6 py-3 rounded-xl transition whitespace-nowrap"
          >
            {tv("proceedToPaymentBtn")}
          </button>
        </div>
      </form>
    </div>
  );
}