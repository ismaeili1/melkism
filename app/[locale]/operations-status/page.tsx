import { ProductionOperationsStatus } from "@/components/production-operations/ProductionOperationsStatus";

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

export default async function OperationsStatusPage({
  params,
}: Props) {
  const { locale } =
    await params;

  const safeLocale =
    LOCALES.includes(
      locale as (typeof LOCALES)[number],
    )
      ? (locale as (typeof LOCALES)[number])
      : "en";

  return (
    <ProductionOperationsStatus
      locale={safeLocale}
    />
  );
}
