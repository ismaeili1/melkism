import type { ArchitectureRecommendation } from "@/lib/architecture-intelligence/architecture-recommendation.types";

interface ArchitectureRecommendationsProps {
  recommendations?: ArchitectureRecommendation[];
}

export default function ArchitectureRecommendations({
  recommendations = [],
}: ArchitectureRecommendationsProps) {
  return (
    <section aria-label="Architecture recommendations">
      <h2>Recommendations</h2>

      {recommendations.length === 0 ? (
        <p>No architecture recommendations available.</p>
      ) : (
        recommendations.map((recommendation) => (
          <article key={recommendation.id}>
            <h3>{recommendation.title}</h3>
            <p>{recommendation.explanation}</p>
            <p>
              Priority: {recommendation.priority}
            </p>
          </article>
        ))
      )}
    </section>
  );
}