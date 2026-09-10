
export interface GlobalCognitiveState {


id:string;


networkLevel:number;


fabricLevel:number;


fusionLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface CognitiveFabricNode {


nodeId:string;


intelligenceSource:string;


connectionScore:number;


}



export interface KnowledgeReasoningCycle {


cycleId:string;


knowledgeInput:string;


reasoningOutput:string;


}


