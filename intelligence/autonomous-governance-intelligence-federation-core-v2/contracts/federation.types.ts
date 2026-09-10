
export interface IntelligenceNode {

id:string;

type:string;

active:boolean;

}



export interface FederationChannel {

id:string;

source:string;

target:string;

}



export interface SynchronizationEvent {

id:string;

status:string;

timestamp:Date;

}



