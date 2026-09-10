import { SecurityEnforcementStatus } from "@/components/security-enforcement/SecurityEnforcementStatus";

export default async function SecurityEnforcementPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <SecurityEnforcementStatus locale={locale} />;
}
