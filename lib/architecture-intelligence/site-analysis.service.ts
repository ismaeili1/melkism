import type {
  SiteAnalysisResult,
  SiteContext,
} from "./site-analysis.types";

export class SiteAnalysisService {
  analyze(
    projectId: string,
    context: SiteContext
  ): SiteAnalysisResult {
    const opportunities: string[] = [];
    const constraints: string[] = [];
    const risks: string[] = [];

    if (context.slopePercent !== undefined) {
      if (context.slopePercent <= 5) {
        opportunities.push("Relatively accessible site topography.");
      } else if (context.slopePercent <= 15) {
        constraints.push("Moderate topographic complexity.");
      } else {
        constraints.push("High topographic complexity.");
        risks.push("Potential increased site and foundation complexity.");
      }
    }

    if (
      context.transportConnections &&
      context.transportConnections.length > 0
    ) {
      opportunities.push("Existing transport connectivity detected.");
    }

    if (
      context.nearbyAmenities &&
      context.nearbyAmenities.length > 0
    ) {
      opportunities.push("Nearby amenities can support mixed activity.");
    }

    return {
      projectId,
      context,
      opportunities,
      constraints,
      risks,
      confidence: 0.5,
      analyzedAt: new Date().toISOString(),
    };
  }
}