
export interface FederationState {


id:string;


connectedDomains:string[];


communicationLevel:number;


synchronizationLevel:number;


controlLevel:number;


confidence:number;


timestamp:Date;


}



export interface IntelligenceMessage {


source:string;


target:string;


payload:string;


}


