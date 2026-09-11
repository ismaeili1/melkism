import type {
  ConstructionProgressAssessment,
  ConstructionProgressSnapshot,
} from "./construction-progress.types";

export class ConstructionProgressService {
  assess(
    snapshot: ConstructionProgressSnapshot,
    expectedProgressPercent?: number
  ): ConstructionProgressAssessment {
    const current = Math.max(
      0,
      Math.min(100, snapshot.progressPercent)
    );

    const scheduleDeltaPercent =
      expectedProgressPercent !== undefined
        ? current - expectedProgressPercent
        : undefined;

    let status: ConstructionProgressAssessment["status"] =
      "unknown";

    if (scheduleDeltaPercent !== undefined) {
      if (scheduleDeltaPercent >= 5) {
        status = "ahead";
      } else if (scheduleDeltaPercent >= -5) {
        status = "on_track";
      } else if (scheduleDeltaPercent >= -15) {
        status = "behind";
      } else {
        status = "critical";
      }
    }

    return {
      projectId: snapshot.projectId,
      currentProgressPercent: current,
      expectedProgressPercent,
      scheduleDeltaPercent,
      status,
      observations: [],
      assessedAt: new Date().toISOString(),
    };
  }
}