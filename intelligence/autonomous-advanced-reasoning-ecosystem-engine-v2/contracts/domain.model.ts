
export interface OmniversalIntelligenceState {


id:string;


fabricLevel:number;


reasoningLevel:number;


fusionLevel:number;


governanceLevel:number;


confidence:number;


timestamp:Date;


}



export interface IntelligenceDomainNode {


nodeId:string;


domain:string;


connectionScore:number;


}



export interface ReasoningEvolutionPath {


pathId:string;


inputReasoning:string;


evolvedReasoning:string;


}


