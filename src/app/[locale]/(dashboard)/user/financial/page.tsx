"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useLocalizedText } from "@/hooks/useLocalizedText";
import CurrencyQuoteBox from "@/components/CurrencyQuoteBox";

interface WalletTx {
  id: string;
  titleKey: string;
  type: "CREDIT" | "DEBIT";
  amount: string;
  date: string;
}

export default function UserFinancialPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const isRtl = ["fa", "ar"].includes(locale);
  const dir = isRtl ? "rtl" : "ltr";

  const { t, num } = useLocalizedText("UserFinancial");

  const [transactions] = useState<WalletTx[]>([
    {
      id: "TX-101",
      titleKey: "txTopup",
      type: "CREDIT",
      amount: "2,500,000",
      date: "1405/08/10",
    },
    {
      id: "TX-102",
      titleKey: "txListingFee",
      type: "DEBIT",
      amount: "500,000",
      date: "1405/08/14",
    },
  ]);

  const currencyLabel = t("currency");

  return (
    <div
      className={`min-h-screen bg-slate-50 text-slate-800 p-6 ${
        isRtl ? "dir-rtl" : "dir-ltr"
      } font-sans space-y-6`}
      dir={dir}
    >
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full inline-block mb-1">
            {t("badge")}
          </span>
          <h1 className="text-2xl font-black text-slate-900">{t("pageTitle")}</h1>
          <p className="text-xs text-slate-500 mt-1">{t("pageSubtitle")}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Link
            href={`/${locale}/user/orders`}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition whitespace-nowrap"
          >
            {t("ordersBtn")}
          </Link>
          <Link
            href={`/${locale}/user/dashboard`}
            className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition whitespace-nowrap"
          >
            {isRtl ? `← ${t("backToDashboard")}` : `${t("backToDashboard")} →`}
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-1">
          <span className="text-xs text-slate-500">{t("availableBalanceLabel")}</span>
          <div className="text-2xl font-black text-emerald-700">
            {num("2,000,000")} {currencyLabel}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-1">
          <span className="text-xs text-slate-500">{t("totalTransactionsLabel")}</span>
          <div className="text-2xl font-black text-slate-900">{num(transactions.length)}</div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-1">
          <span className="text-xs text-slate-500">{t("walletStatusLabel")}</span>
          <div className="text-lg font-black text-indigo-700">{t("activeStatus")}</div>
        </div>
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <h2 className="text-sm font-black text-slate-900">{t("ledgerTitle")}</h2>

        <div className="overflow-x-auto">
          <table className={`w-full text-xs ${isRtl ? "text-right" : "text-left"}`}>
            <thead>
              <tr className="border-b border-slate-100 text-slate-400">
                <th className="pb-3">{t("colId")}</th>
                <th className="pb-3">{t("colTitle")}</th>
                <th className="pb-3">{t("colAmount")}</th>
                <th className="pb-3">{t("colDate")}</th>
                <th className="pb-3">{t("colStatus")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {transactions.map((tx) => (
                <tr key={tx.id}>
                  <td className="py-3.5 font-mono text-slate-500">{tx.id}</td>
                  <td className="py-3.5 font-bold text-slate-900">{t(tx.titleKey)}</td>
                  <td
                    className={`py-3.5 font-bold ${
                      tx.type === "CREDIT" ? "text-emerald-700" : "text-rose-600"
                    }`}
                  >
                    {tx.type === "CREDIT" ? "+" : "-"}
                    {num(tx.amount)} {currencyLabel}
                  </td>
                  <td className="py-3.5 text-slate-500">{num(tx.date)}</td>
                  <td className="py-3.5">
                    <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-emerald-50 text-emerald-700">
                      {t("completedStatus")}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* واحد پول اعلامی و پیام اعلام قیمت دستی مبدا */}
      <CurrencyQuoteBox isRtl={isRtl} />
    </div>
  );
}