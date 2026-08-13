import type { Locale } from "@/lib/i18n/config";

const content: Record<
  Locale,
  {
    eyebrow: string;
    title: string;
    description: string;
  }
> = {
  fa: {
    eyebrow: "MELKISM Media & Intelligence",
    title: "بازار را بشناسید؛ آینده را بهتر بسازید.",
    description:
      "MELKISM پلتفرم رسانه، دانش، تحلیل و هوشمندی در حوزه املاک، مستغلات و محیط ساخته‌شده است.",
  },

  en: {
    eyebrow: "MELKISM Media & Intelligence",
    title: "Understand the Market. Shape the Future.",
    description:
      "MELKISM is a media, knowledge, analysis and intelligence platform for real estate and the built environment.",
  },

  ar: {
    eyebrow: "MELKISM Media & Intelligence",
    title: "افهم السوق. اصنع المستقبل.",
    description:
      "MELKISM منصة للإعلام والمعرفة والتحليل والذكاء في مجال العقارات والبيئة المبنية.",
  },

  tr: {
    eyebrow: "MELKISM Media & Intelligence",
    title: "Pazarı Anlayın. Geleceği Şekillendirin.",
    description:
      "MELKISM, gayrimenkul ve yapılaşmış çevre alanlarında medya, bilgi, analiz ve istihbarat platformudur.",
  },
};

type HomePageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export default async function LocaleHomePage({
  params,
}: HomePageProps) {
  const { locale } = await params;
  const page = content[locale];

  return (
    <main>
      <section>
        <p>{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p>{page.description}</p>
      </section>
    </main>
  );
}
