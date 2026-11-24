"use client";

import { useState, useEffect } from "react";
import {
  SUPPORTED_CURRENCIES,
  CurrencyCode,
  ManualCurrencyQuoteMessage,
  formatDeclaredMoney,
  getCurrencyMeta,
  loadPreferredCurrency,
  savePreferredCurrency,
  loadManualCurrencyQuotes,
  saveManualCurrencyQuotes,
} from "@/lib/currency";

interface CurrencyQuoteBoxProps {
  isRtl?: boolean;
  defaultTitle?: string;
  defaultAmount?: string;
  defaultCurrency?: CurrencyCode;
  onCurrencyChange?: (code: CurrencyCode) => void;
}

export default function CurrencyQuoteBox({
  isRtl = true,
  defaultTitle = "",
  defaultAmount = "",
  defaultCurrency,
  onCurrencyChange,
}: CurrencyQuoteBoxProps) {
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyCode>(() =>
    defaultCurrency || loadPreferredCurrency()
  );
  const [itemTitle, setItemTitle] = useState(defaultTitle);
  const [declaredAmount, setDeclaredAmount] = useState(defaultAmount);
  const [declaredCurrency, setDeclaredCurrency] = useState<CurrencyCode>(
    defaultCurrency || "IRT"
  );
  const [requestedCurrency, setRequestedCurrency] = useState<CurrencyCode>("EUR");
  const [manualConvertedAmount, setManualConvertedAmount] = useState("");
  const [originNote, setOriginNote] = useState("");
  const [quotes, setQuotes] = useState<ManualCurrencyQuoteMessage[]>([]);

  useEffect(() => {
    setQuotes(loadManualCurrencyQuotes());
  }, []);

  useEffect(() => {
    if (defaultTitle) setItemTitle(defaultTitle);
  }, [defaultTitle]);

  useEffect(() => {
    if (defaultAmount) setDeclaredAmount(defaultAmount);
  }, [defaultAmount]);

  function handleSelectCurrency(code: CurrencyCode) {
    setSelectedCurrency(code);
    savePreferredCurrency(code);
    onCurrencyChange?.(code);
  }

  function handleCreateManualQuoteMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!declaredAmount.trim() || !manualConvertedAmount.trim()) return;

    const entry: ManualCurrencyQuoteMessage = {
      id: `q_${Date.now()}`,
      listingOrItemTitle:
        itemTitle.trim() || (isRtl ? "مورد استعلام‌شده" : "Quoted Item"),
      declaredAmount: declaredAmount.trim(),
      declaredCurrency,
      requestedCurrency,
      manualConvertedAmount: manualConvertedAmount.trim(),
      originNote: originNote.trim(),
      createdAt: new Date().toISOString(),
    };

    const next = [entry, ...quotes];
    setQuotes(next);
    saveManualCurrencyQuotes(next);
    setManualConvertedAmount("");
    setOriginNote("");
  }

  const activeMeta = getCurrencyMeta(selectedCurrency);

  return (
    <div
      className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm space-y-4 text-xs"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
        <div>
          <h3 className="text-sm font-black text-slate-900">
            {isRtl
              ? "واحد پول اعلامی و پیام اعلام قیمت دستی مبدا"
              : "Declared Currency & Manual Origin Quote Message"}
          </h3>
          <p className="text-[11px] text-slate-500 mt-0.5">
            {isRtl
              ? "مبالغ بدون تبدیل نرخ خودکار با واحد اعلام‌شده نمایش داده می‌شوند؛ در صورت درخواست ارز دیگر، مبدا مبلغ را به‌صورت دستی در پیام اعلام می‌کند."
              : "Amounts display as declared without auto-conversion; if another currency is requested, the origin enters the quote manually in a message."}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold text-slate-600">
            {isRtl ? "واحد نمایش:" : "Display:"}
          </span>
          <select
            value={selectedCurrency}
            onChange={(e) => handleSelectCurrency(e.target.value as CurrencyCode)}
            className="border border-slate-200 rounded-xl px-3 py-2 bg-slate-50 font-bold text-slate-800 outline-none focus:border-indigo-600"
          >
            {SUPPORTED_CURRENCIES.map((c) => (
              <option key={c.code} value={c.code}>
                {isRtl ? c.labelFa : c.labelEn}
              </option>
            ))}
          </select>
        </div>
      </div>

      {declaredAmount.trim() && (
        <div className="bg-indigo-50/70 border border-indigo-100 rounded-xl p-3 flex flex-wrap items-center justify-between gap-2">
          <span className="text-slate-700 font-bold">
            {isRtl ? "مبلغ ثبت‌شده با واحد مبدا:" : "Declared Amount:"}
          </span>
          <span className="font-black text-indigo-800">
            {formatDeclaredMoney(declaredAmount, declaredCurrency, isRtl)}
          </span>
          <span className="text-[11px] text-slate-500">
            {isRtl
              ? `واحد فعال فعلی: ${activeMeta.labelFa}`
              : `Active currency: ${activeMeta.labelEn}`}
          </span>
        </div>
      )}

      <form
        onSubmit={handleCreateManualQuoteMessage}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2.5"
      >
        <input
          type="text"
          value={itemTitle}
          onChange={(e) => setItemTitle(e.target.value)}
          placeholder={isRtl ? "عنوان ملک / سفارش..." : "Listing or order title..."}
          className="border border-slate-200 rounded-xl px-3 py-2 bg-slate-50 outline-none focus:border-indigo-600 lg:col-span-2"
        />

        <div className="flex gap-1.5">
          <input
            type="text"
            value={declaredAmount}
            onChange={(e) => setDeclaredAmount(e.target.value)}
            placeholder={isRtl ? "مبلغ مبدا" : "Source amount"}
            className="border border-slate-200 rounded-xl px-2.5 py-2 bg-slate-50 outline-none focus:border-indigo-600 w-full"
            required
          />
          <select
            value={declaredCurrency}
            onChange={(e) => setDeclaredCurrency(e.target.value as CurrencyCode)}
            className="border border-slate-200 rounded-xl px-2 py-2 bg-slate-50 font-bold outline-none"
          >
            {SUPPORTED_CURRENCIES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.code}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-1.5">
          <input
            type="text"
            value={manualConvertedAmount}
            onChange={(e) => setManualConvertedAmount(e.target.value)}
            placeholder={isRtl ? "اعلام قیمت دستی" : "Manual quote"}
            className="border border-slate-200 rounded-xl px-2.5 py-2 bg-slate-50 outline-none focus:border-indigo-600 w-full"
            required
          />
          <select
            value={requestedCurrency}
            onChange={(e) => setRequestedCurrency(e.target.value as CurrencyCode)}
            className="border border-slate-200 rounded-xl px-2 py-2 bg-slate-50 font-bold outline-none"
          >
            {SUPPORTED_CURRENCIES.map((c) => (
              <option key={c.code} value={c.code}>
                {c.code}
              </option>
            ))}
          </select>
        </div>

        <input
          type="text"
          value={originNote}
          onChange={(e) => setOriginNote(e.target.value)}
          placeholder={isRtl ? "توضیح مبدا در پیام..." : "Origin message note..."}
          className="border border-slate-200 rounded-xl px-3 py-2 bg-slate-50 outline-none focus:border-indigo-600"
        />

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-3 py-2 rounded-xl transition whitespace-nowrap"
        >
          {isRtl ? "ثبت پیام اعلام قیمت" : "Send Quote Message"}
        </button>
      </form>

      {quotes.length > 0 && (
        <div className="space-y-2 pt-2 border-t border-slate-100">
          {quotes.map((q) => (
            <div
              key={q.id}
              className="p-3 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div className="space-y-0.5">
                <div className="font-bold text-slate-900">{q.listingOrItemTitle}</div>
                <div className="text-[11px] text-slate-600">
                  {isRtl
                    ? `مبلغ مبدا: ${formatDeclaredMoney(
                        q.declaredAmount,
                        q.declaredCurrency,
                        true
                      )} ← اعلام قیمت دستی به ارز درخواستی: ${formatDeclaredMoney(
                        q.manualConvertedAmount,
                        q.requestedCurrency,
                        true
                      )}`
                    : `Declared: ${formatDeclaredMoney(
                        q.declaredAmount,
                        q.declaredCurrency,
                        false
                      )} → Manual Quote: ${formatDeclaredMoney(
                        q.manualConvertedAmount,
                        q.requestedCurrency,
                        false
                      )}`}
                </div>
                {q.originNote && (
                  <p className="text-[11px] text-indigo-800 font-medium">
                    {isRtl ? `پیام مبدا: ${q.originNote}` : `Origin note: ${q.originNote}`}
                  </p>
                )}
              </div>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 whitespace-nowrap self-start sm:self-center">
                {isRtl ? "اعلام‌شده توسط مبدا" : "Quoted by Origin"}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
