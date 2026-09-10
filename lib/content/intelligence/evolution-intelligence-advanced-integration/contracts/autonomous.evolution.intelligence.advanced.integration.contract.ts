export interface AutonomousEvolutionIntelligenceAdvancedIntegrationContract {


id:string;



selfImprovementIntelligenceAdvancedIntegrationId:string;



evolutionIntelligenceAdvancedIntegrationId:string;



evolutionModels:Array<{

model:string;

description:string;

confidence:number;

}>;



evolutionProcesses:Array<{

process:string;

score:number;

}>;



growthAnalysisModels:Array<{

growth:string;

score:number;

}>;



capabilityEvolutionModels:Array<{

capability:string;

score:number;

}>;



intelligenceExpansionModels:Array<{

expansion:string;

score:number;

}>;



architectureEvolutionModels:Array<{

architecture:string;

score:number;

}>;



knowledgeEvolutionModels:Array<{

knowledge:string;

score:number;

}>;



strategyEvolutionModels:Array<{

strategy:string;

score:number;

}>;



adaptiveEvolutionModels:Array<{

adaptation:string;

score:number;

}>;



metaEvolutionModels:Array<{

meta:string;

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



evolutionContext:Record<string,unknown>;



evolutionState:

"building"|"evolving"|"completed";



evolutionVersion:number;



confidence:number;



status:

"created"|"processing"|"completed";



createdAt:Date;

}
