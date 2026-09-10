import type { ConstructionRecommendation } from "@/lib/construction-intelligence/construction-recommendation.types";

interface ConstructionRecommendationsProps {
  recommendations?: ConstructionRecommendation[];
}

export default function ConstructionRecommendations({
  recommendations = [],
}: ConstructionRecommendationsProps) {
  return (
    <section aria-label="Construction recommendations">
      <h2>Recommendations</h2>

      {recommendations.length === 0 ? (
        <p>No construction recommendations available.</p>
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