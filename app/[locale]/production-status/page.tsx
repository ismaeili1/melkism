import { ProductionReleaseStatus } from "@/components/production-release/ProductionReleaseStatus";

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

export default async function ProductionStatusPage({
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
    <ProductionReleaseStatus
      locale={safeLocale}
    />
  );
}
