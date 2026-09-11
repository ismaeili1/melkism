export interface AutonomousCognitiveAgentArchitectureContract {


id:string;



orchestrationIntelligenceId:string;



agentArchitectureId:string;



agents:Array<{

id:string;

type:string;

status:string;

capabilities:string[];

}>;



capabilityModels:Array<{

capability:string;

score:number;

}>;



communicationModels:Array<{

channel:string;

status:string;

}>;



collaborationModels:Array<{

collaboration:string;

score:number;

}>;



taskAssignmentModels:Array<{

task:string;

agent:string;

}>;



stateModels:Array<{

state:string;

value:string;

}>;



performanceModels:Array<{

metric:string;

score:number;

}>;



evolutionModels:Array<{

evolution:string;

growth:number;

}>;



agentInsights:Array<{

insight:string;

value:number;

}>;



agentEvolutionCycles:Array<{

cycle:string;

growth:number;

}>;



agentContext:Record<string,unknown>;



architectureState:

"initializing"|"running"|"completed";



architectureVersion:number;



confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
