"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useLocalizedText } from "@/hooks/useLocalizedText";
import {
  MelkismUser,
  getMasterUsers,
  getSavedTheme,
  saveMasterUsers,
} from "@/lib/auth-store";

export default function ForgotPasswordPage() {
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const isRtl = ["fa", "ar"].includes(locale);
  const dir = isRtl ? "rtl" : "ltr";

  const { t, num } = useLocalizedText("UnifiedAuth");

  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [contactInput, setContactInput] = useState("");
  const [matchedUser, setMatchedUser] = useState<MelkismUser | null>(null);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [enteredOtp, setEnteredOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    setTheme(getSavedTheme());
  }, []);

  const handleFindAccount = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const users = getMasterUsers();
    const clean = contactInput.trim().toLowerCase();

    const found = users.find(
      (u) =>
        u.role !== "SUPER_ADMIN" &&
        (u.email.toLowerCase() === clean ||
          u.mobile === contactInput.trim() ||
          u.username.toLowerCase() === clean)
    );

    if (!found) {
      setError(t("accountNotFoundError"));
      return;
    }

    const code = String(Math.floor(100000 + Math.random() * 900000));
    setMatchedUser(found);
    setGeneratedOtp(code);
    setEnteredOtp(code);
    setSuccess(t("recoveryCodeSent", { code: num(code) }));
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!matchedUser || enteredOtp.trim() !== generatedOtp.trim()) {
      setError(t("invalidOtpError"));
      return;
    }

    if (newPassword.trim().length < 6) {
      setError(t("weakPasswordError"));
      return;
    }

    const users = getMasterUsers();
    const updated = users.map((u) =>
      u.id === matchedUser.id ? { ...u, password: newPassword.trim() } : u
    );
    saveMasterUsers(updated);
    setSuccess(
      t("recoveryCompletedNotice", {
        username: matchedUser.username,
      })
    );
  };

  const isDark = theme === "dark";

  return (
    <div
      dir={dir}
      className={`min-h-screen flex items-center justify-center p-4 font-sans ${
        isDark ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"
      }`}
    >
      <div
        className={`w-full max-w-md rounded-3xl border p-7 shadow-sm space-y-5 text-xs ${
          isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
        }`}
      >
        <div className="space-y-1">
          <h1 className="text-xl font-black">{t("recoveryTitle")}</h1>
          <p className={isDark ? "text-slate-400" : "text-slate-500"}>{t("recoverySubtitle")}</p>
        </div>

        {error && (
          <div className="bg-rose-50 border border-rose-200 text-rose-800 font-bold px-4 py-3 rounded-2xl">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold px-4 py-3 rounded-2xl leading-relaxed">
            {success}
          </div>
        )}

        {!matchedUser ? (
          <form onSubmit={handleFindAccount} className="space-y-4">
            <div>
              <label className="block font-bold mb-1.5">{t("recoveryInputLabel")}</label>
              <input
                type="text"
                dir="ltr"
                value={contactInput}
                onChange={(e) => setContactInput(e.target.value)}
                className={`w-full rounded-2xl border px-4 py-3 outline-none font-mono ${
                  isDark ? "bg-slate-950 border-slate-700" : "bg-slate-50 border-slate-200"
                }`}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-2xl"
            >
              {t("sendRecoveryCodeBtn")}
            </button>
          </form>
        ) : (
          <form onSubmit={handleResetPassword} className="space-y-4">
            <div className="p-3.5 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-950 font-bold">
              {t("recoveredUsernameLabel", { username: matchedUser.username })}
            </div>

            <div>
              <label className="block font-bold mb-1">{t("enterOtpLabel")}</label>
              <input
                type="text"
                dir="ltr"
                value={enteredOtp}
                onChange={(e) => setEnteredOtp(e.target.value)}
                className={`w-full rounded-2xl border px-4 py-2.5 outline-none font-mono text-center ${
                  isDark ? "bg-slate-950 border-slate-700" : "bg-slate-50 border-slate-200"
                }`}
                required
              />
            </div>

            <div>
              <label className="block font-bold mb-1">{t("newPasswordLabel")}</label>
              <input
                type="password"
                dir="ltr"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className={`w-full rounded-2xl border px-4 py-2.5 outline-none font-mono ${
                  isDark ? "bg-slate-950 border-slate-700" : "bg-slate-50 border-slate-200"
                }`}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-2xl"
            >
              {t("saveNewPasswordBtn")}
            </button>
          </form>
        )}

        <div className="text-center pt-1">
          <Link href={`/${locale}/login`} className="text-indigo-600 font-bold hover:underline">
            {t("backToLoginBtn")}
          </Link>
        </div>
      </div>
    </div>
  );
}