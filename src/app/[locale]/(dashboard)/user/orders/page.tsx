"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useLocalizedText } from "@/hooks/useLocalizedText";
import CurrencyQuoteBox from "@/components/CurrencyQuoteBox";

interface OrderItem {
  id: string;
  titleKey: string;
  customTitle?: string;
  typeKey: string;
  category: "SPECIAL" | "NORMAL" | "RESERVED";
  date: string;
  amountKey: string;
  statusKey: string;
  actionKey: string;
}

export default function UserOrdersPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const isRtl = ["fa", "ar"].includes(locale);
  const dir = isRtl ? "rtl" : "ltr";

  const { t, num } = useLocalizedText("UserOrders");

  const [activeTab, setActiveTab] = useState<"ALL" | "SPECIAL" | "NORMAL">("ALL");
  const [selectedOrderAction, setSelectedOrderAction] = useState<string | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newOrderTitle, setNewOrderTitle] = useState("");
  const [newOrderCategory, setNewOrderCategory] = useState<"SPECIAL" | "NORMAL">("NORMAL");

  const [orders, setOrders] = useState<OrderItem[]>([
    {
      id: "ORD-501",
      titleKey: "order1Title",
      typeKey: "typeProject",
      category: "SPECIAL",
      date: "1405/07/16",
      amountKey: "amount1",
      statusKey: "statusActiveFirstPage",
      actionKey: "actionRenewEdit",
    },
    {
      id: "ORD-502",
      titleKey: "order2Title",
      typeKey: "typeNormalListing",
      category: "NORMAL",
      date: "1405/06/10",
      amountKey: "amountFree",
      statusKey: "statusExpired",
      actionKey: "actionRepublish",
    },
    {
      id: "ORD-503",
      titleKey: "order3Title",
      typeKey: "typeAdvertorial",
      category: "RESERVED",
      date: "1405/07/01",
      amountKey: "amount3",
      statusKey: "statusPendingPublish",
      actionKey: "actionCancelRefund",
    },
  ]);

  const filteredOrders = orders.filter((o) => {
    if (activeTab === "ALL") return true;
    if (activeTab === "SPECIAL") return o.category === "SPECIAL" || o.category === "RESERVED";
    if (activeTab === "NORMAL") return o.category === "NORMAL";
    return true;
  });

  const handleCreateOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newOrderTitle.trim()) return;
    const created: OrderItem = {
      id: `ORD-${500 + orders.length + 1}`,
      titleKey: "",
      customTitle: newOrderTitle.trim(),
      typeKey: newOrderCategory === "SPECIAL" ? "typeFeaturedListing" : "typeNormalListing",
      category: newOrderCategory,
      date: "1405/08/03",
      amountKey: newOrderCategory === "SPECIAL" ? "amount3" : "amountFree",
      statusKey: "statusPendingPublish",
      actionKey: "actionRenewEdit",
    };
    setOrders((prev) => [created, ...prev]);
    setSelectedOrderAction(t("orderCreatedFeedback", { title: newOrderTitle.trim() }));
    setNewOrderTitle("");
    setShowCreateModal(false);
  };

  return (
    <div
      className={`min-h-screen bg-slate-50 text-slate-800 p-6 ${
        isRtl ? "dir-rtl" : "dir-ltr"
      } font-sans space-y-6`}
      dir={dir}
    >
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="text-[11px] font-bold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full inline-block mb-1">
            {t("badge")}
          </span>
          <h1 className="text-2xl font-black text-slate-900">{t("pageTitle")}</h1>
          <p className="text-xs text-slate-500 mt-1">{t("pageSubtitle")}</p>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href={`/${locale}/user/financial`}
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-sm whitespace-nowrap"
          >
            💳 {t("walletBtn")}
          </Link>
          <Link
            href={`/${locale}/user/dashboard`}
            className="bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition whitespace-nowrap"
          >
            {isRtl ? `← ${t("backToDashboard")}` : `${t("backToDashboard")} →`}
          </Link>
        </div>
      </div>

      {selectedOrderAction && (
        <div className="bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs font-bold px-4 py-3 rounded-2xl flex items-center justify-between gap-2">
          <span>{selectedOrderAction}</span>
          <button
            type="button"
            onClick={() => setSelectedOrderAction(null)}
            className="text-indigo-700 hover:underline text-[11px]"
          >
            {t("closeBtn")}
          </button>
        </div>
      )}

      <div className="bg-white border border-slate-200 rounded-2xl p-3 shadow-sm flex flex-wrap gap-2 text-xs">
        {[
          { key: "ALL" as const, labelKey: "tabAll" },
          { key: "SPECIAL" as const, labelKey: "tabSpecial" },
          { key: "NORMAL" as const, labelKey: "tabNormal" },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={`px-4 py-2.5 rounded-xl font-bold transition ${
              activeTab === tab.key
                ? "bg-indigo-600 text-white shadow-sm"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {t(tab.labelKey)}
          </button>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <h3 className="text-sm font-bold text-slate-900">
            📦 {t("listTitle", { count: num(filteredOrders.length) })}
          </h3>
          <button
            type="button"
            onClick={() => setShowCreateModal(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition"
          >
            {t("newOrderBtn")}
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className={`w-full ${isRtl ? "text-right" : "text-left"} text-xs`}>
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-medium">
                <th className="pb-3">{t("colTitle")}</th>
                <th className="pb-3">{t("colType")}</th>
                <th className="pb-3">{t("colAmount")}</th>
                <th className="pb-3">{t("colDate")}</th>
                <th className="pb-3">{t("colStatus")}</th>
                <th className="pb-3 text-center">{t("colAction")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredOrders.map((order) => {
                const displayTitle = order.customTitle || t(order.titleKey);
                return (
                  <tr key={order.id} className="hover:bg-slate-50/80 transition">
                    <td className="py-4 font-bold text-slate-900">{displayTitle}</td>
                    <td className="py-4">
                      <span className="bg-indigo-50 text-indigo-700 font-bold px-2.5 py-1 rounded-lg text-[10px] inline-block">
                        {t(order.typeKey)}
                      </span>
                    </td>
                    <td className="py-4 font-bold text-slate-900">{t(order.amountKey)}</td>
                    <td className="py-4 text-slate-500 font-mono text-[11px]">{order.date}</td>
                    <td className="py-4">
                      <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg text-[10px] inline-block">
                        {t(order.statusKey)}
                      </span>
                    </td>
                    <td className="py-4 text-center">
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedOrderAction(
                            t("orderActionFeedback", {
                              action: t(order.actionKey),
                              title: displayTitle,
                            })
                          )
                        }
                        className="text-indigo-600 font-bold hover:underline"
                      >
                        {t(order.actionKey)}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* واحد پول اعلامی و پیام اعلام قیمت دستی مبدا */}
      <CurrencyQuoteBox isRtl={isRtl} />

      {showCreateModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md space-y-4 shadow-xl text-xs">
            <h3 className="text-sm font-bold text-slate-900">{t("modalNewOrderTitle")}</h3>
            <form onSubmit={handleCreateOrder} className="space-y-3">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {t("fieldOrderTitle")}
                </label>
                <input
                  type="text"
                  value={newOrderTitle}
                  onChange={(e) => setNewOrderTitle(e.target.value)}
                  className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-600"
                  required
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  {t("fieldOrderCategory")}
                </label>
                <select
                  value={newOrderCategory}
                  onChange={(e) =>
                    setNewOrderCategory(e.target.value as "SPECIAL" | "NORMAL")
                  }
                  className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none bg-white"
                >
                  <option value="NORMAL">{t("tabNormal")}</option>
                  <option value="SPECIAL">{t("tabSpecial")}</option>
                </select>
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-xl"
                >
                  {t("cancelBtn")}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white font-bold rounded-xl"
                >
                  {t("submitOrderBtn")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}