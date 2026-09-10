import { SecurityDeploymentAuditStatus } from "@/components/security-deployment-audit/SecurityDeploymentAuditStatus";

export default async function SecurityDeploymentAuditPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <SecurityDeploymentAuditStatus locale={locale} />;
}
