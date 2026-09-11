export interface AutonomousConsciousIntelligenceLoopContract {


id:string;



kernelId:string;



loopId:string;



observationModels:Array<{

observation:string;

quality:number;

}>;



interpretationModels:Array<{

interpretation:string;

accuracy:number;

}>;



reasoningCycleModels:Array<{

reasoning:string;

quality:number;

}>;



decisionCycleModels:Array<{

decision:string;

quality:number;

}>;



executionCycleModels:Array<{

execution:string;

success:number;

}>;



evaluationModels:Array<{

evaluation:string;

score:number;

}>;



learningLoopModels:Array<{

learning:string;

impact:number;

}>;



improvementLoopModels:Array<{

improvement:string;

growth:number;

}>;



feedbackSynchronizationModels:Array<{

feedback:string;

sync:number;

}>;



consciousStateTracking:Array<{

state:string;

level:number;

}>;



loopEvolutionTracking:Array<{

cycle:string;

growth:number;

}>;



loopState:

"initializing"|"running"|"completed";



loopVersion:number;



confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
