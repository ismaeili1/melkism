
export interface MetaIntelligenceState {


id:string;


metaLevel:number;


knowledgeLevel:number;


evolutionLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface MetaKnowledgeNode {


nodeId:string;


knowledgeDomain:string;


intelligenceScore:number;


}



export interface MetaEvolutionCycle {


cycleId:string;


previousState:string;


currentState:string;


}


