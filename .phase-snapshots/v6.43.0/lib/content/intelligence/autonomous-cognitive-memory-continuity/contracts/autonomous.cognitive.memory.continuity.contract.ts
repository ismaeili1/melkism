export interface AutonomousCognitiveMemoryContinuityContract {

id:string;

cognitiveIdentityCoreId:string;

memoryContinuityId:string;


experienceMemoryModels:Array<{

experience:string;

value:number;

}>;


knowledgeMemoryModels:Array<{

domain:string;

coverage:number;

}>;


decisionMemoryModels:Array<{

decision:string;

quality:number;

}>;


reasoningMemoryModels:Array<{

reasoning:string;

quality:number;

}>;


behavioralMemoryModels:Array<{

behavior:string;

stability:number;

}>;


cognitiveStateMemoryModels:Array<{

state:string;

level:number;

}>;


eventMemoryModels:Array<{

event:string;

importance:number;

}>;


evolutionMemoryModels:Array<{

cycle:string;

growth:number;

}>;


memoryRetrievalModels:Array<{

query:string;

relevance:number;

}>;


memoryContinuityModels:Array<{

continuity:string;

score:number;

}>;


memoryInsights:Array<{

insight:string;

value:number;

}>;


memoryState:

"initializing"|"storing"|"completed";


memoryVersion:number;

confidence:number;


status:

"created"|"active"|"completed";


createdAt:Date;

}
