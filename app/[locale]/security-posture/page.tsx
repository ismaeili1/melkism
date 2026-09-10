import { SecurityPostureStatus } from "@/components/security-posture/SecurityPostureStatus";

export default async function SecurityPosturePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <SecurityPostureStatus locale={locale} />;
}
