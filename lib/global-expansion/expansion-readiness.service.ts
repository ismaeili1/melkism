import type {
  ExpansionReadiness,
  ReadinessLevel,
} from "./expansion-readiness.types";

export interface ExpansionReadinessInput {
  countryId: string;
  localization: number;
  currency: number;
  timezone: number;
  legalContext: number;
  marketCoverage: number;
  dataCoverage: number;
  serviceCoverage: number;
}

export class ExpansionReadinessService {
  evaluate(
    input: ExpansionReadinessInput
  ): ExpansionReadiness {
    const dimensions = {
      localization: this.clamp(input.localization),
      currency: this.clamp(input.currency),
      timezone: this.clamp(input.timezone),
      legalContext: this.clamp(input.legalContext),
      marketCoverage: this.clamp(input.marketCoverage),
      dataCoverage: this.clamp(input.dataCoverage),
      serviceCoverage: this.clamp(input.serviceCoverage),
    };

    const values =
      Object.values(dimensions);

    const score =
      values.length > 0
        ? values.reduce(
            (sum, value) => sum + value,
            0
          ) / values.length
        : 0;

    const blockers: string[] = [];

    if (dimensions.localization < 70) {
      blockers.push("localization");
    }

    if (dimensions.currency < 70) {
      blockers.push("currency");
    }

    if (dimensions.legalContext < 70) {
      blockers.push("legal_context");
    }

    if (dimensions.marketCoverage < 70) {
      blockers.push("market_coverage");
    }

    let level: ReadinessLevel =
      "not_ready";

    if (
      score >= 90 &&
      blockers.length === 0
    ) {
      level = "operational";
    } else if (
      score >= 75 &&
      blockers.length <= 1
    ) {
      level = "ready";
    } else if (score >= 50) {
      level = "early";
    } else if (score >= 25) {
      level = "planning";
    }

    return {
      countryId: input.countryId,
      level,
      score,
      dimensions,
      blockers,
      recommendations: [],
      evaluatedAt: new Date().toISOString(),
    };
  }

  private clamp(value: number): number {
    if (!Number.isFinite(value)) {
      return 0;
    }

    return Math.max(
      0,
      Math.min(100, value)
    );
  }
}