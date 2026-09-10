import type {
  MarketCoverage,
  CoverageStatus,
} from "./market-coverage.types";

export class MarketCoverageService {
  calculateReadiness(
    coverage: MarketCoverage
  ): {
    score: number;
    status: CoverageStatus;
    blockers: string[];
  } {
    const dimensions = [
      coverage.propertyCoverage,
      coverage.transactionCoverage,
      coverage.architectureCoverage,
      coverage.constructionCoverage,
      coverage.cityIntelligenceCoverage,
      coverage.dataCoverage,
      coverage.localeCoverage,
      coverage.currencyCoverage,
    ];

    const completed = dimensions.filter(Boolean).length;

    const score =
      dimensions.length > 0
        ? (completed / dimensions.length) * 100
        : 0;

    const blockers: string[] = [];

    if (!coverage.propertyCoverage) {
      blockers.push("property_coverage");
    }

    if (!coverage.localeCoverage) {
      blockers.push("locale_coverage");
    }

    if (!coverage.currencyCoverage) {
      blockers.push("currency_coverage");
    }

    let status: CoverageStatus =
      "not_available";

    if (score >= 95) {
      status = "available";
    } else if (score >= 70) {
      status = "limited";
    } else if (score >= 40) {
      status = "beta";
    } else if (score > 0) {
      status = "planned";
    }

    return {
      score,
      status,
      blockers,
    };
  }
}