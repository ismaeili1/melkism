import type { UrbanRecommendation } from "@/lib/smart-city-intelligence/urban-recommendation.types";

interface CityRecommendationsProps {
  recommendations?: UrbanRecommendation[];
}

export default function CityRecommendations({
  recommendations = [],
}: CityRecommendationsProps) {
  return (
    <section aria-label="City recommendations">
      <h2>Urban Recommendations</h2>

      {recommendations.length === 0 ? (
        <p>No urban recommendations available.</p>
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
