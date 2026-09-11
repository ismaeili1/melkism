export interface AutonomousCognitiveEvolutionEngineContract {


id:string;



learningFrameworkId:string;



evolutionEngineId:string;



capabilityEvolutionModels:Array<{

capability:string;

growth:number;

}>;



intelligenceGrowthModels:Array<{

intelligence:string;

growth:number;

}>;



cognitiveStateModels:Array<{

state:string;

level:number;

}>;



knowledgeExpansionModels:Array<{

knowledge:string;

impact:number;

}>;



architectureAdaptationModels:Array<{

architecture:string;

adaptation:number;

}>;



strategyEvolutionModels:Array<{

strategy:string;

growth:number;

}>;



behaviorEvolutionModels:Array<{

behavior:string;

improvement:number;

}>;



performanceEvolutionModels:Array<{

performance:string;

growth:number;

}>;



evaluationModels:Array<{

evaluation:string;

score:number;

}>;



optimizationModels:Array<{

optimization:string;

score:number;

}>;



evolutionInsights:Array<{

insight:string;

value:number;

}>;



evolutionCycles:Array<{

cycle:string;

growth:number;

}>;



evolutionState:

"initializing"|"evolving"|"completed";



evolutionVersion:number;



confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
