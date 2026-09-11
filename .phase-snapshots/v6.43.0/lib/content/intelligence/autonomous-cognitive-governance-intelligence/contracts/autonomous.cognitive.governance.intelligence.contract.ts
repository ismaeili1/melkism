export interface AutonomousCognitiveGovernanceIntelligenceContract {


id:string;


regulationControlIntelligenceId:string;


governanceIntelligenceId:string;



governanceIdentityModels:Array<{

identity:string;

confidence:number;

}>;



cognitivePolicyManagementModels:Array<{

policy:string;

effectiveness:number;

}>;



priorityDecisionManagementModels:Array<{

priority:string;

score:number;

}>;



objectiveAlignmentModels:Array<{

objective:string;

alignment:number;

}>;



ruleGovernanceEngineModels:Array<{

rule:string;

validity:number;

}>;



decisionValidationModels:Array<{

decision:string;

confidence:number;

}>;



resourceGovernanceModels:Array<{

resource:string;

optimization:number;

}>;



riskAwarenessGovernanceModels:Array<{

risk:string;

awareness:number;

}>;



adaptiveGovernanceStrategyModels:Array<{

strategy:string;

adaptability:number;

}>;



governanceEvolutionTrackingModels:Array<{

cycle:string;

growth:number;

}>;



governanceContinuityModels:Array<{

continuity:string;

score:number;

}>;



governanceInsights:Array<{

insight:string;

value:number;

}>;



governanceRegistryModels:Array<{

governance:string;

status:string;

}>;



governanceState:

"initializing"|"governing"|"completed";



governanceVersion:number;


confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
