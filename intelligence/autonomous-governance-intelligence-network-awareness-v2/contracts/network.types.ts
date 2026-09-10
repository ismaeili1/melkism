
export interface IntelligenceNodeState {

id:string;

active:boolean;

awareness:number;

}



export interface ContextExchange {

source:string;

target:string;

payload:string;

}



export interface NetworkEvent {

id:string;

type:string;

timestamp:Date;

}



