"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useLocalizedText } from "@/hooks/useLocalizedText";
import {
  MelkismUser,
  getDashboardRouteForRole,
  getMasterUsers,
  persistSessionAndRedirect,
} from "@/lib/auth-store";

export default function SuperAdminGatePage() {
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const isRtl = ["fa", "ar"].includes(locale);
  const dir = isRtl ? "rtl" : "ltr";

  const { t, num } = useLocalizedText("SuperAdminGate");

  const [step, setStep] = useState<1 | 2>(1);
  const [identifier, setIdentifier] = useState("superadmin");
  const [password, setPassword] = useState("");
  const [candidateUser, setCandidateUser] = useState<MelkismUser | null>(null);

  const [otpCode, setOtpCode] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  const handleStepOne = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const users = getMasterUsers();
    const cleanId = identifier.trim().toLowerCase();

    const found = users.find(
      (u) =>
        u.role === "SUPER_ADMIN" &&
        (u.username.toLowerCase() === cleanId ||
          u.email.toLowerCase() === cleanId ||
          u.mobile === identifier.trim())
    );

    if (!found || found.password !== password) {
      setError(t("invalidCredentials"));
      return;
    }

    const code = String(Math.floor(100000 + Math.random() * 900000));
    setCandidateUser(found);
    setGeneratedOtp(code);
    setOtpCode(code);
    setStep(2);
    setInfo(t("twoFactorSent", { code: num(code) }));
  };

  const handleStepTwo = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!candidateUser || otpCode.trim() !== generatedOtp.trim()) {
      setError(t("invalidOtp"));
      return;
    }

    await persistSessionAndRedirect(
      candidateUser,
      getDashboardRouteForRole(locale, "SUPER_ADMIN")
    );
  };

  return (
    <div
      dir={dir}
      className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 font-sans"
    >
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6 text-xs">
        <div className="space-y-1.5 text-center">
          <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30">
            {t("badge")}
          </span>
          <h1 className="text-xl font-black text-white">{t("title")}</h1>
          <p className="text-slate-400">{t("subtitle")}</p>
        </div>

        {error && (
          <div className="bg-rose-950/70 border border-rose-700 text-rose-200 px-4 py-3 rounded-2xl font-bold">
            {error}
          </div>
        )}

        {info && (
          <div className="bg-emerald-950/70 border border-emerald-700 text-emerald-200 px-4 py-3 rounded-2xl font-bold">
            {info}
          </div>
        )}

        {step === 1 ? (
          <form onSubmit={handleStepOne} className="space-y-4">
            <div>
              <label className="block font-bold text-slate-300 mb-1.5">
                {t("identifierLabel")}
              </label>
              <input
                type="text"
                dir="ltr"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-4 py-3 font-mono outline-none focus:border-amber-400"
                required
              />
            </div>

            <div>
              <label className="block font-bold text-slate-300 mb-1.5">
                {t("passwordLabel")}
              </label>
              <input
                type="password"
                dir="ltr"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-2xl px-4 py-3 font-mono outline-none focus:border-amber-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3.5 rounded-2xl transition"
            >
              {t("nextStepBtn")}
            </button>
          </form>
        ) : (
          <form onSubmit={handleStepTwo} className="space-y-4">
            <div>
              <label className="block font-bold text-slate-300 mb-1.5">
                {t("otpLabel")}
              </label>
              <input
                type="text"
                dir="ltr"
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
                className="w-full bg-slate-950 border border-amber-500/50 rounded-2xl px-4 py-3 font-mono text-center text-base tracking-widest font-black"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-3.5 rounded-2xl transition"
            >
              {t("verifyEnterBtn")}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}