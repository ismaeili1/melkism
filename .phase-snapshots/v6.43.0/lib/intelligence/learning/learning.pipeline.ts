import { LearningRegistry } from "./learning.registry";

import type {
LearningCycleResult
} from "./learning.cycle.types";
import {
LearningOrchestrator
} from "./learning.orchestrator";

export class AutonomousLearningPipeline {
private registry = new LearningRegistry();

private orchestrator =
new LearningOrchestrator();
execute(
successRate:number
):LearningCycleResult {
const adaptive =
this.orchestrator.run(successRate);



return {
id:crypto.randomUUID(),
status:"completed",
improvement:
`adaptive action: ${adaptive.action}`,
createdAt:new Date()
};
}
}










