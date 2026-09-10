export interface AutonomousSelfDirectedIntelligenceAgentContract {

id:string;

consciousLoopId:string;

agentId:string;


goalSelectionModels:Array<{

goal:string;

priority:number;

}>;


taskDecompositionModels:Array<{

task:string;

complexity:number;

}>;


actionPlanningModels:Array<{

action:string;

confidence:number;

}>;


autonomousExecutionModels:Array<{

execution:string;

success:number;

}>;


agentMemoryModels:Array<{

memory:string;

value:number;

}>;


reflectionModels:Array<{

reflection:string;

insight:number;

}>;


evaluationModels:Array<{

evaluation:string;

score:number;

}>;


improvementModels:Array<{

improvement:string;

growth:number;

}>;


agentEvolutionTracking:Array<{

cycle:string;

growth:number;

}>;


agentState:

"initializing"|"running"|"completed";


agentVersion:number;

confidence:number;


status:

"created"|"active"|"completed";


createdAt:Date;

}
