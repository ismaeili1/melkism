import type { ExpansionReadiness } from "@/lib/global-expansion/expansion-readiness.types";

interface ExpansionReadinessPanelProps {
  readiness?: ExpansionReadiness;
}

export default function ExpansionReadinessPanel({
  readiness,
}: ExpansionReadinessPanelProps) {
  if (!readiness) {
    return (
      <section aria-label="Expansion readiness">
        <h2>Expansion Readiness</h2>
        <p>No readiness assessment available.</p>
      </section>
    );
  }

  return (
    <section aria-label="Expansion readiness">
      <h2>Expansion Readiness</h2>
      <p>
        Country: {readiness.countryId}
      </p>
      <p>
        Score: {readiness.score.toFixed(1)}
      </p>
      <p>
        Level: {readiness.level}
      </p>
      <p>
        Blockers: {readiness.blockers.length}
      </p>
    </section>
  );
}