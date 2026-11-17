'use client';

import { useTranslations } from 'next-intl';
import { useState } from "react";
import { useParams } from "next/navigation";
import { getMediaAssets } from "@/actions/media";

interface ImagePickerInputProps {
  label?: string;
  name: string;
  defaultValue?: string;
  category?: string;
  onChange?: (url: string) => void;
}

export default function ImagePickerInput({
  label,
  name,
  defaultValue = "",
  category = "general",
  onChange,
}: ImagePickerInputProps) {
  const t = useTranslations('ImagePicker');
  const params = useParams();
  const locale = (params?.locale as string) || "fa";
  const dir = ["fa", "ar"].includes(locale) ? "rtl" : "ltr";

  const [value, setValue] = useState(defaultValue);
  const [showModal, setShowModal] = useState(false);
  const [mediaAssets, setMediaAssets] = useState<any[]>([]);
  const [loadingMedia, setLoadingMedia] = useState(false);

  const displayLabel = label || t('defaultLabel');

  async function handleOpenLibrary() {
    setShowModal(true);
    setLoadingMedia(true);
    try {
      const assets = await getMediaAssets(category);
      setMediaAssets(assets);
    } catch (e) {
      console.error(e);
    }
    setLoadingMedia(false);
  }

  function handleSelectAsset(url: string) {
    setValue(url);
    if (onChange) onChange(url);
    setShowModal(false);
  }

  function handleQuickUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setValue(dataUrl);
      if (onChange) onChange(dataUrl);
    };
    reader.readAsDataURL(file);
  }

  return (
    <div className={`space-y-1 ${dir === 'rtl' ? 'text-right dir-rtl' : 'text-left dir-ltr'}`} dir={dir}>
      <label className="block text-xs font-bold text-slate-700">{displayLabel}:</label>
      
      <div className="flex gap-2 items-center">
        <input
          type="text"
          name={name}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            if (onChange) onChange(e.target.value);
          }}
          placeholder={t('inputPlaceholder')}
          className={`flex-1 border border-slate-300 rounded-xl p-2.5 text-xs bg-slate-50 outline-none focus:ring-2 focus:ring-indigo-500 font-mono ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
          dir="ltr"
        />

        <button
          type="button"
          onClick={handleOpenLibrary}
          className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 text-xs font-bold px-3 py-2.5 rounded-xl transition flex items-center gap-1 whitespace-nowrap"
        >
          🖼️ {t('libraryButton')}
        </button>

        <label className="bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 text-xs font-bold px-3 py-2.5 rounded-xl transition cursor-pointer flex items-center gap-1 whitespace-nowrap">
          📤 {t('uploadButton')}
          <input
            type="file"
            accept="image/*"
            onChange={handleQuickUpload}
            className="hidden"
          />
        </label>
      </div>

      {value && (
        <div className="mt-2 relative w-20 h-14 rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
          <img src={value} alt="Preview" className="w-full h-full object-cover" />
          <button
            type="button"
            onClick={() => { setValue(""); if (onChange) onChange(""); }}
            className={`absolute top-0.5 ${dir === 'rtl' ? 'right-0.5' : 'left-0.5'} bg-rose-600 text-white rounded-full w-4 h-4 text-[10px] flex items-center justify-center`}
          >
            ×
          </button>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className={`bg-white rounded-2xl max-w-2xl w-full p-6 space-y-4 max-h-[80vh] flex flex-col shadow-2xl ${dir === 'rtl' ? 'text-right dir-rtl' : 'text-left dir-ltr'}`} dir={dir}>
            
            <div className="flex justify-between items-center border-b pb-3">
              <h3 className="text-sm font-black text-slate-900">{t('modalTitle')}</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-slate-600 font-bold text-lg">×</button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {loadingMedia ? (
                <div className="text-center py-10 text-xs text-slate-400">{t('loadingText')}</div>
              ) : mediaAssets.length === 0 ? (
                <div className="text-center py-10 text-xs text-slate-400">{t('emptyText')}</div>
              ) : (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {mediaAssets.map((asset) => (
                    <div
                      key={asset.id}
                      onClick={() => handleSelectAsset(asset.url)}
                      className="border border-slate-200 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-indigo-500 transition group relative bg-slate-50"
                    >
                      <img src={asset.url} alt={asset.title} className="w-full h-20 object-cover" />
                      <span className="block text-[10px] p-1 truncate text-slate-700 font-bold text-center">
                        {asset.title || t('defaultImageTitle')}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className={`pt-2 border-t flex ${dir === 'rtl' ? 'justify-end' : 'justify-start'}`}>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-4 py-2 rounded-xl"
              >
                {t('cancelButton')}
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}