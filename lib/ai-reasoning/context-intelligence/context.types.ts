export interface ContextSignal {

 id:string;

 source:string;

 value:string;

 relevance:number;

}


export interface ReasoningContextWindow {

 signals:ContextSignal[];

 timestamp:string;

}


