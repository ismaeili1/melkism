import { BusinessSubscription } from "@/components/business-subscription/BusinessSubscription";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

const LOCALES = [
  "fa",
  "en",
  "ar",
  "tr",
] as const;

export default async function BusinessPage({
  params,
}: Props) {
  const { locale } =
    await params;

  const safeLocale =
    LOCALES.includes(
      locale as
        (typeof LOCALES)[number],
    )
      ? (locale as
          (typeof LOCALES)[number])
      : "en";

  return (
    <BusinessSubscription
      locale={safeLocale}
    />
  );
}
