import { DatabaseProductionReadinessStatus } from "@/components/database-production-readiness/DatabaseProductionReadinessStatus";

type DatabaseProductionReadinessPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function DatabaseProductionReadinessPage(
  props: DatabaseProductionReadinessPageProps
) {
  const params = await props.params;

  return <DatabaseProductionReadinessStatus locale={params.locale} />;
}
