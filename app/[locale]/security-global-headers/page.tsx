import { SecurityGlobalHeadersStatus } from "@/components/security-global-headers/SecurityGlobalHeadersStatus";

export default async function SecurityGlobalHeadersPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <SecurityGlobalHeadersStatus locale={locale} />;
}
