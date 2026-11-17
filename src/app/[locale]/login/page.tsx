'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function LoginPage() {
  const t = useTranslations('LoginPage');
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as string) || 'fa';
  const dir = ['fa', 'ar'].includes(locale) ? 'rtl' : 'ltr';

  const [step, setStep] = useState<'input' | 'code'>('input');
  const [identifier, setIdentifier] = useState('');
  const [code, setCode] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setMessage('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, locale })
      });
      const data = await res.json();
      if (data.success) {
        setStep('code');
        setMessage(data.message);
      } else {
        setError(data.message || 'خطا در ارسال کد');
      }
    } catch (err) {
      setError('خطا در ارتباط با سرور');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, code })
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem('melkism_user', JSON.stringify(data.user));
        if (data.user.role === 'SUPER_ADMIN' || data.user.role === 'MANAGER' || data.user.role === 'ADMIN') {
          router.push(`/${locale}/admin`);
        } else {
          router.push(`/${locale}/profile`);
        }
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError('خطا در بررسی کد');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier: 'user@gmail.com', isGoogle: true })
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem('melkism_user', JSON.stringify(data.user));
        router.push(`/${locale}/profile`);
      }
    } catch (err) {
      setError('خطا در ورود با گوگل');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 font-sans ${dir === 'rtl' ? 'dir-rtl' : 'dir-ltr'}`} dir={dir}>
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
        <div className="text-center mb-8">
          <span className="text-blue-400 text-xs font-semibold bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 inline-block">
            {t('badge')}
          </span>
          <h1 className="text-2xl font-bold text-white mt-3">{t('title')}</h1>
          <p className="text-slate-400 text-xs mt-1">{t('subtitle')}</p>
        </div>

        {error && <div className="bg-red-500/10 border border-red-500/30 text-red-400 text-xs p-3 rounded-xl mb-4 text-center">{error}</div>}
        {message && <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs p-3 rounded-xl mb-4 text-center">{message}</div>}

        {step === 'input' ? (
          <form onSubmit={handleSendCode} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">{t('identifierLabel')}</label>
              <input
                type="text"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder={t('identifierPlaceholder')}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500 transition font-mono"
                dir="ltr"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl text-sm transition shadow-lg shadow-blue-600/20"
            >
              {loading ? t('sendingCode') : t('sendCodeButton')}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyCode} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1">{t('codeLabel')}</label>
              <input
                type="text"
                maxLength={6}
                required
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="123456"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-center text-lg tracking-widest text-white focus:outline-none focus:border-blue-500 transition font-mono"
                dir="ltr"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-xl text-sm transition"
            >
              {loading ? t('verifyingCode') : t('verifyButton')}
            </button>
            <button
              type="button"
              onClick={() => setStep('input')}
              className="w-full text-xs text-slate-400 hover:underline pt-2"
            >
              {t('changeIdentifier')}
            </button>
          </form>
        )}

        <div className="mt-6 pt-6 border-t border-slate-800 space-y-3">
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 rounded-xl text-xs flex items-center justify-center gap-2 border border-slate-700 transition"
          >
            {t('googleLogin')}
          </button>
        </div>
      </div>
    </div>
  );
}