interface PageProps {
  params: { locale: string };
}

const translations: Record<string, { title: string; desc: string; sampleRule: string }> = {
  fa: { title: "قوانین و حقوق املاک", desc: "مجموعه قوانین حقوقی، مالیاتی و ساختمانی در حوزه‌های داخلی و بین‌المللی.", sampleRule: "قوانین خرید املاک و اخذ اقامت در کشورهای مختلف" },
  en: { title: "Real Estate Regulations & Law", desc: "Collection of legal, tax, and construction regulations globally.", sampleRule: "Property Acquisition & Residency Regulations Worldwide" },
  ar: { title: "لوائح وقوانين العقارات", desc: "مجموعة القوانين القانونية والضريبية والبناء دولياً.", sampleRule: "قوانين شراء العقارات والحصول على الإقامة" },
  tr: { title: "Gayrimenkul Mevzuatı ve Hukuku", desc: "Küresel ölçekte hukuki, vergi ve inşaat düzenlemeleri koleksiyonu.", sampleRule: "Mülk Edinme ve İkamet İzni Mevzuatı" },
  ru: { title: "Законодательство о недвижимости", desc: "Сборник правовых, налоговых и строительных норм в мире.", sampleRule: "Правила покупки недвижимости и получения ВНЖ" },
  zh: { title: "房地产法规与法律", desc: "全球法律、税务和建筑法规汇编。", sampleRule: "全球购房与居留许可法规" },
  de: { title: "Immobilienvorschriften & Recht", desc: "Sammlung von Rechts-, Steuer- und Bauvorschriften weltweit.", sampleRule: "Bestimmungen zum Immobilienerwerb und Aufenthaltsrecht" },
  fr: { title: "Réglementations & Droit Immobilier", desc: "Recueil de réglementations juridiques, fiscales et de construction.", sampleRule: "Réglementations sur l'Acquisition Immobilière et la Résidence" },
  it: { title: "Normative e Diritto Immobiliare", desc: "Raccolta di normative legali, fiscali ed edilizie a livello globale.", sampleRule: "Normative sull'Acquisto di Immobili e Residenza" },
  es: { title: "Regulaciones y Derecho Inmobiliario", desc: "Colección de regulaciones legales, fiscales y de construcción.", sampleRule: "Regulaciones sobre Adquisición de Propiedades y Residencia" },
};

export default function RegulationsPage({ params: { locale } }: PageProps) {
  const t = translations[locale] || translations.en;

  return (
    <div className="space-y-8">
      <div className="border-b border-brand-slate/20 pb-4">
        <h1 className="text-3xl font-bold text-brand-volcano">{t.title}</h1>
        <p className="text-sm text-brand-slate mt-2">{t.desc}</p>
      </div>

      <div className="p-6 rounded-xl border border-brand-slate/15 bg-white shadow-2xs">
        <h2 className="text-lg font-bold text-brand-blue">{t.sampleRule}</h2>
      </div>
    </div>
  );
}