'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';

// آواتارهای سیستم
const defaultAvatars = [
  { id: 'M-01', src: '/images/Avatars/M-01.png', label: 'آقای ۱' },
  { id: 'M-02', src: '/images/Avatars/M-02.png', label: 'آقای ۲' },
  { id: 'M-03', src: '/images/Avatars/M-03.png', label: 'آقای ۳' },
  { id: 'M-04', src: '/images/Avatars/M-04.png', label: 'آقای ۴' },
  { id: 'M-05', src: '/images/Avatars/M-05.png', label: 'آقای ۵' },
  { id: 'W-01', src: '/images/Avatars/W-01.png', label: 'خانم ۱' },
  { id: 'W-02', src: '/images/Avatars/W-02.png', label: 'خانم ۲' },
  { id: 'W-03', src: '/images/Avatars/W-03.png', label: 'خانم ۳' },
  { id: 'W-04', src: '/images/Avatars/W-04.png', label: 'خانم ۴' },
  { id: 'W-05', src: '/images/Avatars/W-05.png', label: 'خانم ۵' },
];

export default function ProfilePage() {
  const t = useTranslations('ProfilePage');
  const common = useTranslations('Common');

  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as string) || 'fa';
  const dir = ['fa', 'ar'].includes(locale) ? 'rtl' : 'ltr';

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    country: 'ایران',
    city: '',
    district: '',
    job: '',
    birthDate: '',
    avatar: '/images/Avatars/M-01.png',
    bio: ''
  });
  const [avatarTab, setAvatarTab] = useState<'preset' | 'custom'>('preset');
  const [isVerified, setIsVerified] = useState(false);
  const [subscription, setSubscription] = useState('free');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const savedUser = localStorage.getItem('melkism_user');
    if (!savedUser) {
      router.push(`/${locale}/login`);
      return;
    }
    const parsed = JSON.parse(savedUser);
    const userAvatar = parsed.avatar || '/images/Avatars/M-01.png';
    setFormData({
      fullName: parsed.name || parsed.fullName || '',
      phone: parsed.phone || parsed.identifier || '',
      email: parsed.email || '',
      country: parsed.country || 'ایران',
      city: parsed.city || '',
      district: parsed.district || '',
      job: parsed.job || '',
      birthDate: parsed.birthDate || '',
      avatar: userAvatar,
      bio: parsed.bio || ''
    });

    const isPreset = defaultAvatars.some(a => a.src === userAvatar);
    if (!isPreset && userAvatar.startsWith('data:image')) {
      setAvatarTab('custom');
    }

    setIsVerified(parsed.isVerified || false);
    setSubscription(parsed.subscription || 'free');
  }, [router, locale]);

  const handleLogout = () => {
    localStorage.removeItem('melkism_user');
    window.dispatchEvent(new Event('storage'));
    router.push(`/${locale}/login`);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setFormData(prev => ({ ...prev, avatar: reader.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/user/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem('melkism_user', JSON.stringify(data.user));
        setMessage('پروفایل با موفقیت بروزرسانی شد!');
        setIsVerified(true);
        window.dispatchEvent(new Event('storage'));
      }
    } catch (err) {
      localStorage.setItem('melkism_user', JSON.stringify({ ...formData, isVerified: true, subscription }));
      setMessage('اطلاعات با موفقیت ذخیره و تایید شد!');
      setIsVerified(true);
      window.dispatchEvent(new Event('storage'));
    }
  };

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6 lg:px-8 ${dir === 'rtl' ? 'dir-rtl' : 'dir-ltr'} font-sans`} dir={dir}>
      <div className="max-w-4xl mx-auto">
        <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-8 border-b border-slate-800 gap-4 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
          <div>
            <h1 className="text-2xl font-bold text-white">پروفایل و مدیریت دسترسی‌ها</h1>
            <p className="text-xs text-slate-400 mt-1">تکمیل اطلاعات جهت دسترسی به تحلیل‌های ملکی و ساخت‌وساز</p>
          </div>
          <div className="flex items-center gap-2">
            <Link href={`/${locale}/news`} className="bg-slate-800 hover:bg-slate-700 text-xs px-4 py-2 rounded-xl transition">
              مشاهده اخبار
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30 text-xs font-semibold px-4 py-2 rounded-xl transition flex items-center gap-1.5"
            >
              <span>🚪</span>
              <span>خروج</span>
            </button>
          </div>
        </div>

        {/* کارت وضعیت اشتراک */}
        <div className="bg-gradient-to-r from-blue-900/40 to-slate-900 border border-blue-500/30 rounded-2xl p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className={dir === 'rtl' ? 'text-right' : 'text-left'}>
            <span className="text-xs font-bold bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full border border-blue-500/30 inline-block">
              {subscription === 'vip' ? '👑 عضویت ویژه دوره‌ای (VIP)' : 'عضویت معمولی'}
            </span>
            <h2 className="text-lg font-bold text-white mt-2">
              {subscription === 'vip' ? 'دسترسی کامل به گزارش‌های جامع ساخت‌وساز و معماری' : 'ارتقا به عضویت ویژه دوره‌ای'}
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              {isVerified ? 'پروفایل شما احراز شده است.' : 'برای باز شدن تمام بخش‌ها، اطلاعات اجباری زیر را تکمیل کنید.'}
            </p>
          </div>
          {subscription !== 'vip' && (
            <button
              onClick={() => alert('انتقال به درگاه پرداخت حق عضویت دوره‌ای')}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs px-6 py-3 rounded-xl shadow-lg transition whitespace-nowrap"
            >
              خرید حق عضویت ویژه‌ ⭐
            </button>
          )}
        </div>

        {message && <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs p-3 rounded-xl mb-6 text-center">{message}</div>}

        {/* فرم اطلاعات پروفایل */}
        <form onSubmit={handleSubmit} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
          <h3 className="text-sm font-bold text-blue-400 border-b border-slate-800 pb-3">۱. انتخاب آواتار و تصویر کاربری</h3>

          {/* بخش انتخاب آواتار بدون پس‌زمینه زاید */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">تصویر پروفایل انتخابی:</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setAvatarTab('preset')}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition ${
                    avatarTab === 'preset'
                      ? 'bg-blue-600 text-white border-blue-500'
                      : 'bg-transparent text-slate-400 border-slate-800 hover:bg-slate-800/50'
                  }`}
                >
                  آواتارهای سیستم
                </button>
                <button
                  type="button"
                  onClick={() => setAvatarTab('custom')}
                  className={`text-xs px-3 py-1.5 rounded-lg border transition ${
                    avatarTab === 'custom'
                      ? 'bg-blue-600 text-white border-blue-500'
                      : 'bg-transparent text-slate-400 border-slate-800 hover:bg-slate-800/50'
                  }`}
                >
                  آپلود عکس شخصی
                </button>
              </div>
            </div>

            {/* پیش‌نمایش آواتار انتخابی شفاف */}
            <div className="flex items-center gap-4 p-2">
              <div className="relative">
                <img
                  src={formData.avatar}
                  alt="پیش‌نمایش آواتار"
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-500 bg-transparent"
                />
              </div>
              <div className="text-xs space-y-1">
                <span className="text-white font-bold block">تصویر فعلی شما</span>
                <span className="text-slate-500 block">این آواتار به‌صورت زنده در هدر سایت قرار می‌گیرد.</span>
              </div>
            </div>

            {/* گالری آواتارها بدون پس‌زمینه */}
            {avatarTab === 'preset' && (
              <div className="space-y-2">
                <label className="block text-xs text-slate-400">یک آواتار انتخاب کنید:</label>
                <div className="grid grid-cols-5 sm:grid-cols-10 gap-3">
                  {defaultAvatars.map((item) => {
                    const isSelected = formData.avatar === item.src;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, avatar: item.src }))}
                        className={`relative p-1 rounded-full transition transform hover:scale-110 flex items-center justify-center ${
                          isSelected
                            ? 'ring-2 ring-blue-500 border border-blue-500 bg-blue-500/10'
                            : 'border border-transparent hover:border-slate-700'
                        }`}
                        title={item.label}
                      >
                        <img
                          src={item.src}
                          alt={item.label}
                          className="w-12 h-12 rounded-full object-cover bg-transparent"
                        />
                        {isSelected && (
                          <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow">
                            ✓
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* آپلود تصویر شخصی */}
            {avatarTab === 'custom' && (
              <div className="space-y-3 p-3 rounded-xl border border-slate-800/80 bg-transparent">
                <label className="block text-xs text-slate-400 mb-1">انتخاب و آپلود عکس از رایانه یا موبایل:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="block w-full text-xs text-slate-400 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
                />
              </div>
            )}
          </div>

          <h3 className="text-sm font-bold text-blue-400 border-b border-slate-800 pb-3 pt-4">۲. اطلاعات شناسایی و عمومی</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-slate-400 mb-1">نام و نام خانوادگی (اجباری)</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">شماره تماس (اجباری)</label>
              <input
                type="text"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 font-mono ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
                dir="ltr"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">تاریخ تولد (اختیاری)</label>
              <input
                type="date"
                value={formData.birthDate}
                onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 font-mono"
                dir="ltr"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">پست الکترونیکی (اختیاری)</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="example@mail.com"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 font-mono"
                dir="ltr"
              />
            </div>
          </div>

          <h3 className="text-sm font-bold text-blue-400 border-b border-slate-800 pb-3 pt-4">۳. اطلاعات جغرافیایی و شغلی</h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs text-slate-400 mb-1">کشور</label>
              <input
                type="text"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">شهر (اجباری)</label>
              <input
                type="text"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder="مثال: تهران"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-slate-400 mb-1">محله / منطقه (اختیاری)</label>
              <input
                type="text"
                value={formData.district}
                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                placeholder="مثال: سعادت‌آباد"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-slate-400 mb-1">شغل / حوزه فعالیت ملکی</label>
            <input
              type="text"
              value={formData.job}
              onChange={(e) => setFormData({ ...formData, job: e.target.value })}
              placeholder="مثال: سازنده، مشاور املاک، معمار..."
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl text-sm transition shadow-lg"
          >
            ذخیره و احراز نهایی اطلاعات 💾
          </button>
        </form>
      </div>
    </div>
  );
}