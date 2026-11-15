'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function LawsPage() {
  const [laws, setLaws] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState('همه');
  const [selectedJob, setSelectedJob] = useState('همه');
  const [selectedGeo, setSelectedGeo] = useState('همه');
  const [sortBy, setSortBy] = useState<'newest' | 'popular'>('newest');
  const [searchQuery, setSearchQuery] = useState('');

  const [topicInput, setTopicInput] = useState('');
  const [generating, setGenerating] = useState(false);

  const fetchLaws = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/laws');
      const data = await res.json();
      setLaws(Array.isArray(data) ? data : (data.laws || data.data || []));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLaws();
  }, []);

  const handleGenerateLaw = async (e: React.FormEvent) => {
    e.preventDefault();
    setGenerating(true);
    try {
      const res = await fetch('/api/generate-laws', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: topicInput })
      });
      const data = await res.json();
      if (data.success || res.ok) {
        setTopicInput('');
        fetchLaws();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setGenerating(false);
    }
  };

  const filteredLaws = laws.filter(item => {
    const matchesSearch = item.title?.includes(searchQuery) || item.summary?.includes(searchQuery) || item.tags?.some((t: string) => t.includes(searchQuery));
    const matchesCategory = selectedCategory === 'همه' || item.category === selectedCategory;
    const matchesJob = selectedJob === 'همه' || item.jobTarget === selectedJob || item.tags?.includes(selectedJob);
    const matchesGeo = selectedGeo === 'همه' || item.geo === selectedGeo || item.tags?.includes(selectedGeo);
    return matchesSearch && matchesCategory && matchesJob && matchesGeo;
  }).sort((a, b) => {
    if (sortBy === 'newest') return new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime();
    if (sortBy === 'popular') return (b.views || 0) - (a.views || 0);
    return 0;
  });

  const featuredItem = filteredLaws.find(i => i.featured) || filteredLaws[0];
  const gridItems = filteredLaws.filter(i => i.id !== featuredItem?.id).slice(0, 9);
  const latestTextList = filteredLaws.slice(0, 20);

  return (
    <div className="min-h-screen bg-white text-slate-800 py-10 px-4 sm:px-6 lg:px-8 dir-rtl font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* هدر قوانین */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-bold tracking-wide uppercase text-indigo-700 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full inline-block mb-2">
              • LEGAL & LEGISLATION
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              تفسیر حقوقی، رویه‌های قضایی و حقوق ثبتی
            </h1>
            <p className="text-xs text-slate-500 mt-1 max-w-xl">
              پایگاه تخصصی قوانین املاک، آیین‌نامه‌ها و بخشنامه‌های شهرداری.
            </p>
          </div>
          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder="جستجو در مواد قانونی..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-indigo-600 transition"
            />
          </div>
        </div>

        {/* پنل هوش مصنوعی */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-5">
          <h2 className="text-xs font-bold text-slate-900 mb-2.5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            <span>استخراج و تحلیل حقوقی هوشمند</span>
          </h2>
          <form onSubmit={handleGenerateLaw} className="flex flex-col sm:flex-row gap-2.5">
            <input
              type="text"
              value={topicInput}
              onChange={(e) => setTopicInput(e.target.value)}
              placeholder="موضوع قانون یا پرونده (مثلاً: تحلیل قانون پیش‌فروش ساختمان)..."
              className="flex-1 bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-600 transition"
            />
            <button
              type="submit"
              disabled={generating}
              className="bg-indigo-700 hover:bg-indigo-800 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition disabled:opacity-50 whitespace-nowrap shadow-sm"
            >
              {generating ? 'در حال استخراج...' : 'تولید تحلیل ⚡'}
            </button>
          </form>
        </div>

        {/* ۱ قانون برجسته */}
        {featuredItem && !searchQuery && (
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 hover:border-slate-300 transition shadow-sm">
            {featuredItem.imageUrl && (
              <div className="lg:col-span-5 h-64 lg:h-auto relative bg-slate-100">
                <img src={featuredItem.imageUrl} alt={featuredItem.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 right-3 bg-indigo-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                  مصوبه مصوب
                </span>
              </div>
            )}
            <div className="lg:col-span-7 p-6 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[11px] font-bold text-indigo-700">
                  <span>{featuredItem.category || 'قوانین اصلی'}</span>
                  <span>•</span>
                  <span className="text-slate-400 font-normal">مرجع: {featuredItem.jobTarget || 'قوه قضائیه'}</span>
                </div>
                <h2 className="text-lg font-black text-slate-900 leading-snug">
                  {featuredItem.title}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {featuredItem.summary}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400">👁️ {featuredItem.views || 340} بازدید</span>
                <Link href={`/fa/laws/${featuredItem.id}`} className="text-indigo-700 hover:text-indigo-800 font-bold">
                  مطالعه قانون ←
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* گرید ۹ قانون */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {gridItems.map((item: any) => (
            <Link
              key={item.id}
              href={`/fa/laws/${item.id}`}
              className="bg-white border border-slate-200/80 rounded-xl overflow-hidden hover:border-indigo-300 transition duration-200 flex flex-col justify-between group"
            >
              <div>
                {item.imageUrl && (
                  <div className="h-44 overflow-hidden relative bg-slate-50">
                    <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-102 transition duration-300" />
                  </div>
                )}
                <div className="p-4 space-y-2">
                  <span className="text-[10px] text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded font-medium inline-block">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-indigo-700 transition line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>
                </div>
              </div>
              <div className="px-4 pb-4 pt-0">
                <span className="text-xs text-slate-400 group-hover:text-indigo-700 font-bold transition">
                  مشاهده مصوبه ←
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* ۲۰ قانون متنی */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 space-y-3">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
            <h3 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <span>📌</span>
              <span>فهرست ۲۰ مصوبه و رای اخیر</span>
            </h3>
            <span className="text-[11px] text-slate-400">بانک قوانین ملکیسم</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {latestTextList.map((item: any, index: number) => (
              <Link 
                key={item.id} 
                href={`/fa/laws/${item.id}`}
                className="flex items-center justify-between p-2.5 rounded-lg bg-white border border-slate-200/60 hover:border-indigo-300 transition group"
              >
                <span className="text-xs text-slate-700 group-hover:text-indigo-700 transition truncate font-medium">
                  #{index + 1} {item.title}
                </span>
                <span className="text-[10px] text-slate-400 whitespace-nowrap mr-2">
                  {item.category}
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}