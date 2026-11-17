'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function AuthLoginRedirect() {
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as string) || 'fa';

  useEffect(() => {
    // هدایت خودکار کاربر به صفحه لاگینِ همان زبان (locale) فعال
    router.replace(`/${locale}/login`);
  }, [router, locale]);

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center text-sm font-sans">
      در حال انتقال به صفحه ورود...
    </div>
  );
}