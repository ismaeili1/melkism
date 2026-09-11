export type IntelligenceComponent =

 | "knowledge-graph"
 | "memory"
 | "retrieval"
 | "reasoning"
 | "evolution";


export interface IntelligenceSignal {

component:IntelligenceComponent;

payload:string;

confidence:number;

}


export interface CoordinationRequest {

signals:IntelligenceSignal[];

}


