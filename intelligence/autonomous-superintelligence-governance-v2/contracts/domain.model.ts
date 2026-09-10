
export interface SuperintelligenceState {


id:string;


architectureLevel:number;


fabricLevel:number;


reasoningLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface KnowledgeFabricNode {


nodeId:string;


knowledgeSource:string;


fusionScore:number;


}



export interface ReasoningEvolutionCycle {


cycleId:string;


previousReasoning:string;


evolvedReasoning:string;


}


