"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLocalizedText } from "@/hooks/useLocalizedText";

interface AgentItem {
  id: string;
  name: string;
  specialty: string;
  phone: string;
  activeListings: number;
  commissionShare: number;
  status: "ACTIVE" | "PAUSED";
}

export default function AgencyAgentsPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const isRtl = ["fa", "ar"].includes(locale);
  const dir = isRtl ? "rtl" : "ltr";

  const { t, num } = useLocalizedText("AgencyAgents");

  const [statusFilter, setStatusFilter] = useState<"ALL" | "ACTIVE" | "PAUSED">("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [feedback, setFeedback] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const [newAgent, setNewAgent] = useState({
    name: "",
    specialty: "",
    phone: "",
    commissionShare: 35,
  });

  const [agents, setAgents] = useState<AgentItem[]>([
    {
      id: "AGT-101",
      name: "حسین کاظمی",
      specialty: "مسکونی و برج‌های منطقه ۱",
      phone: "09124441122",
      activeListings: 9,
      commissionShare: 40,
      status: "ACTIVE",
    },
    {
      id: "AGT-102",
      name: "مریم بهرامی",
      specialty: "تجاری، اداری و مستغلات",
      phone: "09125552233",
      activeListings: 6,
      commissionShare: 35,
      status: "ACTIVE",
    },
    {
      id: "AGT-103",
      name: "امیرحسین مرادی",
      specialty: "مشارکت در ساخت و کلنگی",
      phone: "09126663344",
      activeListings: 2,
      commissionShare: 30,
      status: "PAUSED",
    },
  ]);

  const filteredAgents = agents.filter((agent) => {
    const matchesStatus = statusFilter === "ALL" || agent.status === statusFilter;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch =
      !q ||
      agent.name.toLowerCase().includes(q) ||
      agent.specialty.toLowerCase().includes(q) ||
      agent.phone.toLowerCase().includes(q);
    return matchesStatus && matchesSearch;
  });

  const handleToggleStatus = (agent: AgentItem) => {
    const nextStatus = agent.status === "ACTIVE" ? "PAUSED" : "ACTIVE";
    setAgents((prev) =>
      prev.map((a) => (a.id === agent.id ? { ...a, status: nextStatus } : a))
    );
    setFeedback(
      t("statusChangedFeedback", {
        name: agent.name,
        status: nextStatus === "ACTIVE" ? t("statusActive") : t("statusPaused"),
      })
    );
  };

  const handleAddAgent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAgent.name.trim()) return;
    const created: AgentItem = {
      id: `AGT-${100 + agents.length + 1}`,
      name: newAgent.name.trim(),
      specialty: newAgent.specialty.trim() || t("defaultSpecialty"),
      phone: newAgent.phone.trim() || "-",
      activeListings: 0,
      commissionShare: Number(newAgent.commissionShare) || 30,
      status: "ACTIVE",
    };
    setAgents((prev) => [created, ...prev]);
    setFeedback(t("agentAddedFeedback", { name: created.name }));
    setNewAgent({ name: "", specialty: "", phone: "", commissionShare: 35 });
    setShowAddModal(false);
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
            {t("badge", { count: num(agents.length) })}
          </span>
          <h1 className="text-2xl font-black text-slate-950">{t("pageTitle")}</h1>
          <p className="text-xs text-slate-500 mt-1">{t("pageSubtitle")}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setShowAddModal(true)}
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition shadow-xs"
          >
            {t("addAgentBtn")}
          </button>
          <Link
            href={`/${locale}/agency/dashboard`}
            className="bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition"
          >
            {isRtl ? `← ${t("backToDashboard")}` : `${t("backToDashboard")} →`}
          </Link>
        </div>
      </div>

      {feedback && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold px-4 py-3 rounded-2xl flex justify-between items-center">
          <span>{feedback}</span>
          <button
            type="button"
            onClick={() => setFeedback(null)}
            className="text-emerald-700 hover:underline text-[11px]"
          >
            {t("closeBtn")}
          </button>
        </div>
      )}

      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col sm:flex-row justify-between gap-3 items-center text-xs">
        <div className="flex flex-wrap gap-2">
          {[
            { key: "ALL" as const, labelKey: "filterAll" },
            { key: "ACTIVE" as const, labelKey: "filterActive" },
            { key: "PAUSED" as const, labelKey: "filterPaused" },
          ].map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => setStatusFilter(tab.key)}
              className={`px-3.5 py-2 rounded-xl font-bold transition ${
                statusFilter === tab.key
                  ? "bg-indigo-600 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {t(tab.labelKey)}
            </button>
          ))}
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t("searchPlaceholder")}
          className="border border-slate-200 rounded-xl px-3.5 py-2 w-full sm:w-64 outline-none focus:border-indigo-600"
        />
      </div>

      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm overflow-x-auto">
        <table className={`w-full ${isRtl ? "text-right" : "text-left"} text-xs`}>
          <thead>
            <tr className="border-b border-slate-100 text-slate-400 font-medium">
              <th className="pb-3">{t("colAgent")}</th>
              <th className="pb-3">{t("colSpecialty")}</th>
              <th className="pb-3">{t("colListings")}</th>
              <th className="pb-3">{t("colCommission")}</th>
              <th className="pb-3">{t("colStatus")}</th>
              <th className="pb-3 text-center">{t("colActions")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredAgents.map((agent) => (
              <tr key={agent.id} className="hover:bg-slate-50/80 transition">
                <td className="py-4 font-bold text-slate-900">
                  {agent.name}
                  <span className="block text-[10px] text-slate-400 font-mono">{agent.phone}</span>
                </td>
                <td className="py-4 text-slate-600">{agent.specialty}</td>
                <td className="py-4 font-bold text-slate-900">
                  {t("listingsCount", { count: num(agent.activeListings) })}
                </td>
                <td className="py-4 font-mono font-bold text-indigo-700">
                  {num(agent.commissionShare)}%
                </td>
                <td className="py-4">
                  <span
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold inline-block ${
                      agent.status === "ACTIVE"
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {agent.status === "ACTIVE" ? t("statusActive") : t("statusPaused")}
                  </span>
                </td>
                <td className="py-4 text-center">
                  <button
                    type="button"
                    onClick={() => handleToggleStatus(agent)}
                    className="text-indigo-600 font-bold hover:underline"
                  >
                    {t("toggleStatusBtn")}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md space-y-4 shadow-xl text-xs">
            <h3 className="text-sm font-bold text-slate-900">{t("modalTitle")}</h3>
            <form onSubmit={handleAddAgent} className="space-y-3">
              <div>
                <label className="block font-bold text-slate-700 mb-1">{t("fieldName")}</label>
                <input
                  type="text"
                  value={newAgent.name}
                  onChange={(e) => setNewAgent({ ...newAgent, name: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none"
                  required
                />
              </div>
              <div>
                <label className="block font-bold text-slate-700 mb-1">{t("fieldSpecialty")}</label>
                <input
                  type="text"
                  value={newAgent.specialty}
                  onChange={(e) => setNewAgent({ ...newAgent, specialty: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">{t("fieldPhone")}</label>
                  <input
                    type="text"
                    dir="ltr"
                    value={newAgent.phone}
                    onChange={(e) => setNewAgent({ ...newAgent, phone: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none font-mono"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    {t("fieldCommission")}
                  </label>
                  <input
                    type="number"
                    min={1}
                    max={90}
                    value={newAgent.commissionShare}
                    onChange={(e) =>
                      setNewAgent({ ...newAgent, commissionShare: Number(e.target.value) })
                    }
                    className="w-full border border-slate-200 rounded-xl px-3 py-2 outline-none font-mono"
                  />
                </div>
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-xl"
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
    </div>
  );
}