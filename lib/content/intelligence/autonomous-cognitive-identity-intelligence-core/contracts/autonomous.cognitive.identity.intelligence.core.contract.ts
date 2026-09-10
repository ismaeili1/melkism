export interface AutonomousCognitiveIdentityIntelligenceCoreContract {

id:string;

selfModelId:string;

cognitiveIdentityId:string;


identityProfileModels:Array<{

identity:string;

stability:number;

}>;


intelligenceProfileModels:Array<{

intelligence:string;

level:number;

}>;


capabilityProfileModels:Array<{

capability:string;

level:number;

}>;


cognitiveStateProfileModels:Array<{

state:string;

level:number;

}>;


knowledgeProfileModels:Array<{

domain:string;

coverage:number;

}>;


reasoningProfileModels:Array<{

reasoning:string;

quality:number;

}>;


decisionProfileModels:Array<{

decision:string;

quality:number;

}>;


behavioralProfileModels:Array<{

behavior:string;

stability:number;

}>;


intelligenceContinuityModels:Array<{

continuity:string;

score:number;

}>;


coreInsights:Array<{

insight:string;

value:number;

}>;


coreEvolutionTracking:Array<{

cycle:string;

growth:number;

}>;


coreState:

"initializing"|"operating"|"completed";


coreVersion:number;

confidence:number;


status:

"created"|"active"|"completed";


createdAt:Date;

}
