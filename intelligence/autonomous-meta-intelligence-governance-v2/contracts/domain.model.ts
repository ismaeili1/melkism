
export interface MetaIntelligenceState {


id:string;


matrixLevel:number;


ecosystemLevel:number;


evolutionLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface IntelligenceEvolutionNode {


nodeId:string;


intelligenceLayer:string;


adaptationScore:number;


}



export interface KnowledgeEvolutionCycle {


cycleId:string;


previousKnowledge:string;


evolvedKnowledge:string;


}


