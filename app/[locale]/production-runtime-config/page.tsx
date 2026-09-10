import { ProductionRuntimeConfigStatus } from "@/components/production-runtime-config/ProductionRuntimeConfigStatus";

type ProductionRuntimeConfigPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function ProductionRuntimeConfigPage(
  props: ProductionRuntimeConfigPageProps
) {
  const params = await props.params;

  return <ProductionRuntimeConfigStatus locale={params.locale} />;
}
