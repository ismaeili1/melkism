export interface AutonomousCognitiveActionReasoningContract {


id:string;


strategyDecisionIntelligenceId:string;


actionReasoningId:string;



actionIdentityModels:Array<{

action:string;

identity:number;

}>;



actionInterpretationModels:Array<{

action:string;

understanding:number;

}>;



actionSequenceReasoningModels:Array<{

action:string;

order:number;

reasoning:number;

}>;



impactEvaluationModels:Array<{

impact:string;

score:number;

}>;



outcomePredictionModels:Array<{

outcome:string;

probability:number;

}>;



alternativeActionModels:Array<{

alternative:string;

value:number;

}>;



actionRiskReasoningModels:Array<{

risk:string;

level:number;

}>;



feedbackModelingModels:Array<{

feedback:string;

quality:number;

}>;



actionEvolutionTracking:Array<{

cycle:string;

growth:number;

}>;



actionContinuityModels:Array<{

continuity:string;

score:number;

}>;



actionInsights:Array<{

insight:string;

value:number;

}>;



actionRegistryModels:Array<{

action:string;

status:string;

}>;



actionState:

"initializing"|"reasoning"|"completed";



actionVersion:number;


confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
