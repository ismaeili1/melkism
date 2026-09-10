import { SecurityHeaderScopeStatus } from "@/components/security-header-scope/SecurityHeaderScopeStatus";

export default async function SecurityHeaderScopePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <SecurityHeaderScopeStatus locale={locale} />;
}
