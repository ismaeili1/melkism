import type { LocaleDefinition } from "@/lib/global-expansion/locale.types";

interface LocaleCoveragePanelProps {
  locales?: LocaleDefinition[];
}

export default function LocaleCoveragePanel({
  locales = [],
}: LocaleCoveragePanelProps) {
  const rtlCount =
    locales.filter(
      (locale) => locale.direction === "rtl"
    ).length;

  return (
    <section aria-label="Locale coverage">
      <h2>Locale Coverage</h2>
      <p>Total locales: {locales.length}</p>
      <p>RTL locales: {rtlCount}</p>
    </section>
  );
}