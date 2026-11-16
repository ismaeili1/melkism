'use client';

import { useTranslations } from 'next-intl';
import { useActionState } from 'react';
import { createNewsAction, CmsActionResponse } from '@/actions/cmsActions';
import { UserRole } from '@prisma/client';

interface NewsFormProps {
  userRole: UserRole;
  canPublishDirectly: boolean;
}

export function NewsForm({ userRole, canPublishDirectly }: NewsFormProps) {
  // اتصال فرم به اکشن سرور با تزریق نقش کاربر
  const boundCreateNews = createNewsAction.bind(null, userRole);
  const [state, formAction, isPending] = useActionState<CmsActionResponse | null, FormData>(
    boundCreateNews,
    null
  );

  return (
    <form action={formAction} className="space-y-6 bg-slate-900 p-6 rounded-xl border border-slate-800">
      <h2 className="text-xl font-bold text-slate-100">ثبت خبر یا مقاله جدید</h2>

      {state?.message && (
        <div className={`p-4 rounded-lg text-sm ${state.success ? 'bg-emerald-950/50 text-emerald-400 border border-emerald-800' : 'bg-red-950/50 text-red-400 border border-red-800'}`}>
          {state.message}
        </div>
      )}

      {/* عنوان خبر */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">عنوان خبر</label>
        <input
          type="text"
          name="title"
          required
          className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:border-amber-500 focus:outline-none"
          placeholder="عنوان خبر را وارد کنید..."
        />
        {state?.errors?.title && (
          <p className="mt-1 text-xs text-red-400">{state.errors.title[0]}</p>
        )}
      </div>

      {/* دسته‌بندی و تصویر شاخص */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">دسته‌بندی</label>
          <select
            name="category"
            className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:border-amber-500 focus:outline-none"
          >
            <option value="تحلیل بازار">تحلیل بازار</option>
            <option value="قوانین و مقررات">قوانین و مقررات</option>
            <option value="معماری و ساختمان">معماری و ساختمان</option>
            <option value="عمومی">عمومی</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">آدرس تصویر شاخص (URL)</label>
          <input
            type="url"
            name="imageUrl"
            className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:border-amber-500 focus:outline-none"
            placeholder="https://..."
          />
          {state?.errors?.imageUrl && (
            <p className="mt-1 text-xs text-red-400">{state.errors.imageUrl[0]}</p>
          )}
        </div>
      </div>

      {/* خلاصه خبر */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">خلاصه خبر (اختیاری)</label>
        <textarea
          name="summary"
          rows={2}
          className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:border-amber-500 focus:outline-none"
          placeholder="چکیده‌ای از خبر برای نمایش در کارت‌ها..."
        />
      </div>

      {/* متن کامل */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">متن کامل خبر</label>
        <textarea
          name="content"
          rows={6}
          required
          className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:border-amber-500 focus:outline-none"
          placeholder="متن کامل مقاله یا خبر..."
        />
        {state?.errors?.content && (
          <p className="mt-1 text-xs text-red-400">{state.errors.content[0]}</p>
        )}
      </div>

      {/* گزینه انتشار مستقیم (فقط در صورت داشتن مجوز نمایش داده می‌شود) */}
      {canPublishDirectly && (
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="published"
            name="published"
            value="true"
            className="w-4 h-4 rounded border-slate-700 bg-slate-950 text-amber-500"
          />
          <label htmlFor="published" className="text-sm text-slate-300">
            انتشار مستقیم در سایت (بدون نیاز به صف تأیید)
          </label>
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-slate-950 font-semibold rounded-lg transition-colors"
      >
        {isPending ? 'در حال ثبت...' : 'ذخیره محتوا'}
      </button>
    </form>
  );
}