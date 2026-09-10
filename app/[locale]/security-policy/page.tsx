import { SecurityPolicyStatus } from "@/components/security-policy/SecurityPolicyStatus";

export default async function SecurityPolicyPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <SecurityPolicyStatus locale={locale} />;
}
