import type {
  ConstructionScheduleAssessment,
  ConstructionTask,
} from "./construction-schedule.types";

export class ConstructionScheduleService {
  assess(
    projectId: string,
    tasks: ConstructionTask[]
  ): ConstructionScheduleAssessment {
    const completedTasks = tasks.filter(
      (task) => task.status === "completed"
    ).length;

    const delayedTasks = tasks.filter(
      (task) => task.status === "delayed"
    ).length;

    const blockedTasks = tasks.filter(
      (task) => task.status === "blocked"
    ).length;

    const progressValues = tasks
      .map((task) => task.progressPercent)
      .filter(
        (value): value is number =>
          value !== undefined && Number.isFinite(value)
      );

    const overallProgressPercent =
      progressValues.length > 0
        ? progressValues.reduce(
            (sum, value) => sum + value,
            0
          ) / progressValues.length
        : tasks.length > 0
          ? (completedTasks / tasks.length) * 100
          : 0;

    let scheduleRisk: ConstructionScheduleAssessment["scheduleRisk"] =
      "low";

    if (blockedTasks > 0) {
      scheduleRisk = "critical";
    } else if (delayedTasks >= 3) {
      scheduleRisk = "high";
    } else if (delayedTasks > 0) {
      scheduleRisk = "medium";
    }

    return {
      projectId,
      totalTasks: tasks.length,
      completedTasks,
      delayedTasks,
      blockedTasks,
      overallProgressPercent,
      scheduleRisk,
      observations: [],
      assessedAt: new Date().toISOString(),
    };
  }
}