'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [user, setUser] = useState<any>(null);

  const checkUser = () => {
    const savedUser = localStorage.getItem('melkism_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        setUser(null);
      }
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    checkUser();
    window.addEventListener('storage', checkUser);
    const interval = setInterval(checkUser, 1000);
    return () => {
      window.removeEventListener('storage', checkUser);
      clearInterval(interval);
    };
  }, []);

  const getInitial = (name: string) => {
    return name ? name.trim().charAt(0).toUpperCase() : '👤';
  };

  return (
    <header className="bg-slate-950 border-b border-slate-800 text-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* لوگو و منوی اصلی */}
        <div className="flex items-center gap-6">
          <Link href="/fa" className="flex items-center gap-2">
            <span className="text-xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
              MELKISM
            </span>
            <span className="text-[10px] bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
              رسانه املاک
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-5 text-xs text-slate-300">
            <Link href="/fa/news" className="hover:text-blue-400 transition">اخبار</Link>
            <Link href="/fa/news" className="hover:text-blue-400 transition">بازار ملکیسم</Link>
            <Link href="/fa/news" className="hover:text-blue-400 transition">کتابخانه</Link>
            <Link href="/fa/news" className="hover:text-blue-400 transition">هوش بازار</Link>
            <Link href="/fa/news" className="hover:text-blue-400 transition">قوانین</Link>
          </nav>
        </div>

        {/* بخش آواتار دایره‌ای یا دکمه ورود */}
        <div className="flex items-center gap-3">
          {user ? (
            <Link 
              href={user.role === 'admin' ? '/fa/admin' : '/fa/profile'}
              className="flex items-center gap-2.5 hover:opacity-90 transition group bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-2xl shadow-md"
              title={user.name || user.fullName || 'پروفایل کاربری'}
            >
              {user.avatar ? (
                <img 
                  src={user.avatar} 
                  alt={user.name || user.fullName || 'آواتار'} 
                  className="w-9 h-9 rounded-full object-cover border-2 border-blue-500 shadow-sm"
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-bold flex items-center justify-center text-xs border border-blue-400 shadow-sm">
                  {getInitial(user.name || user.fullName)}
                </div>
              )}
              
              <div className="flex flex-col text-right">
                <span className="text-xs font-bold text-white group-hover:text-blue-400 transition">
                  {user.name || user.fullName || 'کاربر احراز شده'}
                </span>
                <span className="text-[9px] text-blue-400">
                  {user.role === 'admin' ? 'مدیر ارشد' : (user.subscription === 'vip' ? 'عضو VIP ⭐' : 'پروفایل کاربری')}
                </span>
              </div>
            </Link>
          ) : (
            <Link 
              href="/fa/login"
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-2 rounded-xl transition font-medium shadow-md shadow-blue-600/20"
            >
              ورود / ثبت‌نام
            </Link>
          )}

          <Link href="/fa/news" className="bg-slate-800 hover:bg-slate-700 text-xs px-3.5 py-2 rounded-xl transition text-slate-300 hidden sm:block">
            دستیار هوش مصنوعی
          </Link>
        </div>

      </div>
    </header>
  );
}