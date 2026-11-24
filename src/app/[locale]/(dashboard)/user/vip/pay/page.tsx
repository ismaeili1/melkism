"use client";

import { useState, useEffect, Suspense } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useLocalizedText } from "@/hooks/useLocalizedText";
import {
  CurrencyCode,
  formatDeclaredMoney,
  loadPreferredCurrency,
} from "@/lib/currency";

const PLAN_META: Record<
  string,
  { months: number; titleKey: "plan1M" | "plan3M" | "plan6M" | "plan12M"; declaredPrice: string }
> = {
  "1M": { months: 1, titleKey: "plan1M", declaredPrice: "490,000" },
  "3M": { months: 3, titleKey: "plan3M", declaredPrice: "1,290,000" },
  "6M": { months: 6, titleKey: "plan6M", declaredPrice: "2,390,000" },
  "12M": { months: 12, titleKey: "plan12M", declaredPrice: "4,200,000" },
};

function VipPaymentContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const locale = (params?.locale as string) || "fa";
  const isRtl = ["fa", "ar"].includes(locale);
  const dir = isRtl ? "rtl" : "ltr";

  const { t: tv } = useLocalizedText("UserVip");

  const planParam = (searchParams?.get("plan") || "3M").toUpperCase();
  const planInfo = PLAN_META[planParam] || PLAN_META["3M"];
  const planTitle = tv(planInfo.titleKey);

  const [currency, setCurrency] = useState<CurrencyCode>("IRT");
  const [paymentMethod, setPaymentMethod] = useState<"ONLINE" | "WALLET">("ONLINE");
  const [trackingCode, setTrackingCode] = useState("");
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  useEffect(() => {
    const qCurr = (searchParams?.get("currency") || "").toUpperCase() as CurrencyCode;
    if (qCurr) {
      setCurrency(qCurr);
    } else {
      setCurrency(loadPreferredCurrency());
    }
  }, [searchParams]);

  function handleConfirmPayment(e: React.FormEvent) {
    e.preventDefault();
    const refCode = trackingCode.trim() || `VIP-${Date.now().toString().slice(-6)}`;

    try {
      const vipRecord = {
        active: true,
        badge: "VIP",
        planId: planParam,
        months: planInfo.months,
        declaredPrice: planInfo.declaredPrice,
        currency,
        method: paymentMethod,
        trackingCode: refCode,
        activatedAt: new Date().toISOString(),
      };
      window.localStorage.setItem("melkism_user_vip_v1", JSON.stringify(vipRecord));

      const existingRaw = window.localStorage.getItem("melkism_user");
      const existingObj = existingRaw ? JSON.parse(existingRaw) : {};
      window.localStorage.setItem(
        "melkism_user",
        JSON.stringify({
          ...existingObj,
          subscription: "vip",
          vipBadge: true,
          vipPlan: planParam,
          isVerified: true,
        })
      );

      window.dispatchEvent(new Event("storage"));
    } catch {
      // ignore
    }

    setTrackingCode(refCode);
    setPaymentConfirmed(true);
  }

  return (
    <div
      className={`min-h-screen bg-slate-50 text-slate-800 p-6 ${
        isRtl ? "dir-rtl" : "dir-ltr"
      } font-sans space-y-6`}
      dir={dir}
    >
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-indigo-700 bg-indigo-50 border border-indigo-200 px-3 py-1 rounded-full inline-block mb-1">
            {tv("payBadge")}
          </span>
          <h1 className="text-2xl font-black text-slate-900">{tv("payTitle")}</h1>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/${locale}/user/vip`}
            className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-4 py-2.5 rounded-xl transition"
          >
            {tv("changePlanBtn")}
          </Link>
          <Link
            href={`/${locale}/user/dashboard`}
            className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition"
          >
            {tv("dashboardBtn")}
          </Link>
        </div>
      </div>

      {paymentConfirmed ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 shadow-sm space-y-4 text-xs">
          <div className="flex items-center gap-2 text-emerald-900 font-black text-base">
            <span>⭐</span>
            <span>{tv("paymentSuccessTitle")}</span>
          </div>
          <p className="text-emerald-800 leading-relaxed">
            {tv("paymentSuccessDesc", { planTitle, trackingCode })}
          </p>
          <div className="flex flex-wrap gap-2 pt-2">
            <button
              type="button"
              onClick={() => router.push(`/${locale}/user/dashboard`)}
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-black px-5 py-2.5 rounded-xl transition"
            >
              {tv("goToDashboardVipBtn")}
            </button>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleConfirmPayment}
          className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-5 text-xs max-w-2xl"
        >
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
            <div>
              <span className="text-slate-500 block">{tv("selectedPlanLabel")}</span>
              <strong className="text-sm font-black text-slate-900">{planTitle}</strong>
            </div>
            <div className="text-end">
              <span className="text-slate-500 block">{tv("membershipFeeLabel")}</span>
              <strong className="text-base font-black text-indigo-700">
                {formatDeclaredMoney(planInfo.declaredPrice, currency, isRtl)}
              </strong>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-bold text-slate-700 block">{tv("paymentMethodLabel")}</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod("ONLINE")}
                className={`p-3.5 rounded-xl border font-bold text-start transition ${
                  paymentMethod === "ONLINE"
                    ? "border-indigo-600 bg-indigo-50 text-indigo-900"
                    : "border-slate-200 bg-slate-50 text-slate-700"
                }`}
              >
                {tv("onlinePaymentBtn")}
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod("WALLET")}
                className={`p-3.5 rounded-xl border font-bold text-start transition ${
                  paymentMethod === "WALLET"
                    ? "border-indigo-600 bg-indigo-50 text-indigo-900"
                    : "border-slate-200 bg-slate-50 text-slate-700"
                }`}
              >
                {tv("walletPaymentBtn")}
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <label className="font-bold text-slate-700 block">{tv("trackingCodeLabel")}</label>
            <input
              type="text"
              dir="ltr"
              value={trackingCode}
              onChange={(e) => setTrackingCode(e.target.value)}
              placeholder="PAY-1405-9821"
              className="w-full border border-slate-200 rounded-xl px-3.5 py-2.5 bg-slate-50 font-mono outline-none focus:border-indigo-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black py-3 rounded-xl transition"
          >
            {tv("confirmPaymentBtn")}
          </button>
        </form>
      )}
    </div>
  );
}

export default function UserVipPaymentPage() {
  return (
    <Suspense fallback={null}>
      <VipPaymentContent />
    </Suspense>
  );
}