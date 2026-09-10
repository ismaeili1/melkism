import type {
  TrustScore,
  VerificationRecord,
} from "./trust.types";

export class TrustService {
  calculateScore(
    subjectId: string,
    verifications: VerificationRecord[]
  ): TrustScore {
    if (verifications.length === 0) {
      return {
        subjectId,
        score: 0,
        confidence: 0,
        factors: [],
        calculatedAt: new Date().toISOString(),
      };
    }

    const verified = verifications.filter(
      (item) => item.status === "verified"
    );

    const score =
      (verified.length / verifications.length) * 100;

    const confidence = Math.min(
      1,
      verified.length / 5
    );

    return {
      subjectId,
      score,
      confidence,
      factors: verified.map(
        (item) => item.type
      ),
      calculatedAt: new Date().toISOString(),
    };
  }
}