
export interface IntelligenceNode {


id:string;


region:string;


status:string;


}



export interface NetworkMessage {


source:string;


target:string;


payload:string;


timestamp:Date;


}



export interface FederationState {


members:string[];


health:string;


}



