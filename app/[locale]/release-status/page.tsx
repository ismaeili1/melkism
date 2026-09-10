import { ReleaseGovernanceStatus } from "@/components/release-governance/ReleaseGovernanceStatus";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

const SUPPORTED_LOCALES = [
  "fa",
  "en",
  "ar",
  "tr",
] as const;

export default async function ReleaseStatusPage({
  params,
}: Props) {
  const { locale } =
    await params;

  const safeLocale =
    SUPPORTED_LOCALES.includes(
      locale as
        (typeof SUPPORTED_LOCALES)[number],
    )
      ? (locale as
          (typeof SUPPORTED_LOCALES)[number])
      : "en";

  return (
    <ReleaseGovernanceStatus
      locale={safeLocale}
    />
  );
}
