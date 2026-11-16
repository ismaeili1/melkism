'use client';


import { useTranslations } from 'next-intl';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthLoginRedirect() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/fa/login');
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center text-sm">
      در حال انتقال به صفحه ورود...
    </div>
  );
}