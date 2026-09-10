export interface PlatformEvent {

id:string;

type:string;

version:string;

payload:unknown;

createdAt:string;

}


export interface EventSubscriber {

event:string;

handler:
(event:PlatformEvent)=>void;

}

