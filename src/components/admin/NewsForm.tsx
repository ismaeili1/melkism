'use client';

import { useTranslations } from 'next-intl';
import { useActionState, useState } from 'react';
import { useParams } from 'next/navigation';
import { createNewsAction, CmsActionResponse } from '@/actions/cmsActions';
import { UserRole } from '@prisma/client';
import ImagePickerInput from '@/components/admin/ImagePickerInput';

interface NewsFormProps {
  userRole: UserRole;
  canPublishDirectly: boolean;
}

export function NewsForm({ userRole, canPublishDirectly }: NewsFormProps) {
  const t = useTranslations('NewsForm');
  const params = useParams();
  const locale = (params?.locale as string) || 'fa';
  const dir = ['fa', 'ar'].includes(locale) ? 'rtl' : 'ltr';

  const [imageUrl, setImageUrl] = useState('');

  // اتصال فرم به اکشن سرور با تزریق نقش کاربر
  const boundCreateNews = createNewsAction.bind(null, userRole);
  const [state, formAction, isPending] = useActionState<CmsActionResponse | null, FormData>(
    boundCreateNews,
    null
  );

  return (
    <form action={formAction} className={`space-y-6 bg-slate-900 p-6 rounded-xl border border-slate-800 ${dir === 'rtl' ? 'text-right dir-rtl' : 'text-left dir-ltr'}`} dir={dir}>
      <h2 className="text-xl font-bold text-slate-100">{t('formTitle')}</h2>

      {state?.message && (
        <div className={`p-4 rounded-lg text-sm ${state.success ? 'bg-emerald-950/50 text-emerald-400 border border-emerald-800' : 'bg-red-950/50 text-red-400 border border-red-800'}`}>
          {state.message}
        </div>
      )}

      {/* عنوان خبر */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">{t('titleLabel')}</label>
        <input
          type="text"
          name="title"
          required
          className={`w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:border-amber-500 focus:outline-none ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
          placeholder={t('titlePlaceholder')}
        />
        {state?.errors?.title && (
          <p className="mt-1 text-xs text-red-400">{state.errors.title[0]}</p>
        )}
      </div>

      {/* دسته‌بندی و تصویر شاخص (استفاده از ImagePickerInput متصل به مخزن رسانه) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">{t('categoryLabel')}</label>
          <select
            name="category"
            className={`w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:border-amber-500 focus:outline-none ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
          >
            <option value="تحلیل بازار">{t('catMarket')}</option>
            <option value="قوانین و مقررات">{t('catLaws')}</option>
            <option value="معماری و ساختمان">{t('catArchitecture')}</option>
            <option value="عمومی">{t('catGeneral')}</option>
          </select>
        </div>

        <div>
          <input type="hidden" name="imageUrl" value={imageUrl} />
          <ImagePickerInput
            label={t('imageLabel')}
            name="imagePicker"
            defaultValue={imageUrl}
            category="news"
            onChange={(url) => setImageUrl(url)}
          />
          {state?.errors?.imageUrl && (
            <p className="mt-1 text-xs text-red-400">{state.errors.imageUrl[0]}</p>
          )}
        </div>
      </div>

      {/* خلاصه خبر */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">{t('summaryLabel')}</label>
        <textarea
          name="summary"
          rows={2}
          className={`w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:border-amber-500 focus:outline-none ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
          placeholder={t('summaryPlaceholder')}
        />
      </div>

      {/* متن کامل */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">{t('contentLabel')}</label>
        <textarea
          name="content"
          rows={6}
          required
          className={`w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 focus:border-amber-500 focus:outline-none ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
          placeholder={t('contentPlaceholder')}
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
          <label htmlFor="published" className="text-sm text-slate-300 cursor-pointer">
            {t('publishDirectlyLabel')}
          </label>
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-slate-950 font-semibold rounded-lg transition-colors"
      >
        {isPending ? t('submittingButton') : t('submitButton')}
      </button>
    </form>
  );
}