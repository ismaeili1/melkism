'use client';

import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import RoleGuard from '@/components/auth/RoleGuard';

export default function NewsPage() {
  const t = useTranslations('NewsPage');
  const common = useTranslations('Common');
  
  const params = useParams();
  const locale = (params?.locale as string) || 'fa';
  const dir = ['fa', 'ar'].includes(locale) ? 'rtl' : 'ltr';

  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [selectedTopic, setSelectedTopic] = useState('همه');
  const [selectedJob, setSelectedJob] = useState('همه');
  const [selectedGeo, setSelectedGeo] = useState('همه');
  const [selectedFormat, setSelectedFormat] = useState('همه');
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'commented'>('newest');
  const [searchQuery, setSearchQuery] = useState('');

  const [topicInput, setTopicInput] = useState('');
  const [generating, setGenerating] = useState(false);

  const fetchArticles = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/news');
      const data = await res.json();
      setArticles(Array.isArray(data) ? data : (data.articles || data.data || []));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleGenerateNews = async (e: React.FormEvent) => {
    e.preventDefault();
    setGenerating(true);
    try {
      const res = await fetch('/api/generate-news', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: topicInput, locale })
      });
      const data = await res.json();
      if (data.success || res.ok) {
        setTopicInput('');
        fetchArticles();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setGenerating(false);
    }
  };

  const filteredArticles = articles.filter(item => {
    const matchesSearch = item.title?.includes(searchQuery) || item.lead?.includes(searchQuery) || item.tags?.some((t: string) => t.includes(searchQuery));
    const matchesTopic = selectedTopic === 'همه' || item.category === selectedTopic || item.tags?.includes(selectedTopic);
    const matchesJob = selectedJob === 'همه' || item.jobTarget === selectedJob || item.tags?.includes(selectedJob);
    const matchesGeo = selectedGeo === 'همه' || item.geo === selectedGeo || item.tags?.includes(selectedGeo);
    const matchesFormat = selectedFormat === 'همه' || item.format === selectedFormat;
    return matchesSearch && matchesTopic && matchesJob && matchesGeo && matchesFormat;
  }).sort((a, b) => {
    if (sortBy === 'newest') return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
    if (sortBy === 'popular') return (b.views || 0) - (a.views || 0);
    if (sortBy === 'commented') return (b.comments?.length || 0) - (a.comments?.length || 0);
    return 0;
  });

  const featuredArticle = filteredArticles.find(i => i.type === 'featured' || i.isTrending) || filteredArticles[0];
  const gridArticles = filteredArticles.filter(i => i.id !== featuredArticle?.id).slice(0, 9);
  const latestTextList = filteredArticles.slice(0, 20);

  return (
    <div className={`min-h-screen bg-white text-slate-800 py-10 px-4 sm:px-6 lg:px-8 ${dir === 'rtl' ? 'dir-rtl' : 'dir-ltr'} font-sans`} dir={dir}>
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* هدر اخبار */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-bold tracking-wide uppercase text-rose-600 bg-rose-50 border border-rose-100 px-3 py-1 rounded-full inline-block mb-2">
              • NEWS & REPORTING
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {t('title')}
            </h1>
            <p className="text-xs text-slate-500 mt-1 max-w-xl">
              {t('subtitle')}
            </p>
          </div>
          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder={common('search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-rose-500 transition"
            />
          </div>
        </div>

        {/* 🔒 پنل تولید خبر با هوش مصنوعی: فقط برای مدیران و ادمین‌ها رندر می‌شود */}
        <RoleGuard allowedRoles={['SUPER_ADMIN', 'ADMIN', 'MANAGER']}>
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5">
            <h2 className="text-xs font-bold text-slate-900 mb-2.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-600 animate-pulse" />
              <span>تولید و انتشار هوشمند خبر (ویژه مدیران)</span>
            </h2>
            <form onSubmit={handleGenerateNews} className="flex flex-col sm:flex-row gap-2.5">
              <input
                type="text"
                value={topicInput}
                onChange={(e) => setTopicInput(e.target.value)}
                placeholder="موضوع خبر یا رپرتاژ (مثلاً: نوسانات نرخ ارز و بازار مسکن)..."
                className="flex-1 bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-rose-500 transition"
              />
              <button
                type="submit"
                disabled={generating}
                className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition disabled:opacity-50 whitespace-nowrap shadow-sm"
              >
                {generating ? 'در حال تولید...' : 'تولید خبر ⚡'}
              </button>
            </form>
          </div>
        </RoleGuard>

        {/* فیلترها */}
        <div className="bg-white border border-slate-200/80 rounded-xl p-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-xs">
          <div>
            <select value={selectedTopic} onChange={e => setSelectedTopic(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-slate-700 font-medium">
              <option value="همه">همه موضوعات</option>
              <option value="تحلیل بازار">تحلیل بازار</option>
              <option value="قوانین و حقوقی">قوانین و حقوقی</option>
              <option value="ساخت و ساز">ساخت و ساز</option>
            </select>
          </div>
          <div>
            <select value={selectedJob} onChange={e => setSelectedJob(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-slate-700 font-medium">
              <option value="همه">همه مشاغل</option>
              <option value="سازندگان">سازندگان</option>
              <option value="مشاوران املاک">مشاوران املاک</option>
            </select>
          </div>
          <div>
            <select value={selectedGeo} onChange={e => setSelectedGeo(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-slate-700 font-medium">
              <option value="همه">همه مناطق</option>
              <option value="تهران">تهران</option>
              <option value="بین‌المللی">بین‌المللی</option>
            </select>
          </div>
          <div>
            <select value={selectedFormat} onChange={e => setSelectedFormat(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-slate-700 font-medium">
              <option value="همه">همه فرمت‌ها</option>
              <option value="short">خبر کوتاه</option>
              <option value="long">خبر مشروح</option>
            </select>
          </div>
          <div>
            <select value={sortBy} onChange={(e: any) => setSortBy(e.target.value)} className="w-full bg-slate-50 border border-slate-200 rounded-lg p-2 text-slate-700 font-medium">
              <option value="newest">جدیدترین</option>
              <option value="popular">پربازدیدترین</option>
            </select>
          </div>
          <div>
            <button onClick={() => { setSelectedTopic('همه'); setSelectedJob('همه'); setSelectedGeo('همه'); setSelectedFormat('همه'); setSearchQuery(''); }} className="w-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-semibold p-2 rounded-lg transition">
              حذف فیلترها ⟲
            </button>
          </div>
        </div>

        {/* ۱ خبر مهم اصلی */}
        {featuredArticle && !searchQuery && (
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 hover:border-slate-300 transition shadow-sm">
            {featuredArticle.imageUrl && (
              <div className="lg:col-span-7 h-64 lg:h-auto relative bg-slate-100">
                <img src={featuredArticle.imageUrl} alt={featuredArticle.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 right-3 bg-rose-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                  خبر ویژه
                </span>
              </div>
            )}
            <div className="lg:col-span-5 p-6 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[11px] font-bold text-rose-600">
                  <span>{featuredArticle.category || 'تحلیل بازار'}</span>
                  <span>•</span>
                  <span className="text-slate-400 font-normal">{new Date(featuredArticle.createdAt || Date.now()).toLocaleDateString(locale === 'fa' ? 'fa-IR' : 'en-US')}</span>
                </div>
                <h2 className="text-lg font-black text-slate-900 leading-snug">
                  {featuredArticle.title}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {featuredArticle.lead}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400">👁️ {featuredArticle.views || 120} بازدید</span>
                <Link href={`/${locale}/news/${featuredArticle.id}`} className="text-rose-600 hover:text-rose-700 font-bold">
                  {t('readMore')} ←
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* گرید ۹ خبر */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {gridArticles.map((item: any) => (
            <Link
              key={item.id}
              href={`/${locale}/news/${item.id}`}
              className="bg-white border border-slate-200/80 rounded-xl overflow-hidden hover:border-rose-300 transition duration-200 flex flex-col justify-between group"
            >
              <div>
                {item.imageUrl && (
                  <div className="h-44 overflow-hidden relative bg-slate-50">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-102 transition duration-300" />
                  </div>
                )}
                <div className="p-4 space-y-2">
                  <span className="text-[10px] text-rose-600 bg-rose-50 px-2 py-0.5 rounded font-medium inline-block">
                    {item.category || 'خبر'}
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-rose-600 transition line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {item.lead}
                  </p>
                </div>
              </div>
              <div className="px-4 pb-4 pt-0">
                <span className="text-xs text-slate-400 group-hover:text-rose-600 font-bold transition">
                  {t('readMore')} ←
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* لیست متنی ۲۰ خبر */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
            <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <span>📌</span>
              <span>عناوین ۲۰ خبر و گزارش اخیر</span>
            </h3>
            <span className="text-[11px] text-slate-400">به‌روزرسانی لحظه‌ای</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {latestTextList.map((item: any, index: number) => (
              <Link 
                key={item.id} 
                href={`/${locale}/news/${item.id}`}
                className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200/60 hover:border-rose-300 transition group"
              >
                <span className="text-xs text-slate-700 group-hover:text-rose-600 transition truncate font-medium">
                  #{index + 1} {item.title}
                </span>
                <span className="text-[10px] text-slate-400 whitespace-nowrap mr-2 font-mono">
                  {new Date(item.createdAt || Date.now()).toLocaleDateString(locale === 'fa' ? 'fa-IR' : 'en-US')}
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}