export interface AutonomousGeneralIntelligenceCoordinationContract {


id:string;



decisionIntelligenceId:string;



planningIntelligenceId:string;



learningIntelligenceId:string;



evolutionIntelligenceId:string;



metaCognitionId:string;



coordinationId:string;



intelligenceModuleRegistry:Array<{

module:string;

status:string;

}>;



cognitiveWorkflowModels:Array<{

workflow:string;

state:string;

}>;



taskCoordinationModels:Array<{

task:string;

priority:number;

}>;



knowledgeFlowModels:Array<{

knowledge:string;

flow:number;

}>;



decisionSynchronizationModels:Array<{

decision:string;

sync:number;

}>;



learningCoordinationModels:Array<{

learning:string;

score:number;

}>;



evolutionCoordinationModels:Array<{

evolution:string;

score:number;

}>;



intelligenceStateModels:Array<{

state:string;

level:number;

}>;



performanceMonitoringModels:Array<{

metric:string;

value:number;

}>;



coordinationInsights:Array<{

insight:string;

value:number;

}>;



evolutionTracking:Array<{

cycle:string;

growth:number;

}>;



coordinationState:

"initializing"|"coordinating"|"completed";



coordinationVersion:number;



confidence:number;



status:

"created"|"active"|"completed";



createdAt:Date;

}
