import { SecurityHeaderHttpSmokeStatus } from "@/components/security-header-http-smoke/SecurityHeaderHttpSmokeStatus";

type SecurityHeaderHttpSmokePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function SecurityHeaderHttpSmokePage(
  props: SecurityHeaderHttpSmokePageProps
) {
  const params = await props.params;

  return <SecurityHeaderHttpSmokeStatus locale={params.locale} />;
}
