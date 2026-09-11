/**
 * MELKISM Intelligence Runtime Event Pipeline
 */


export interface RuntimeEventEnvelope {

id:string;

type:string;

source:string;

payload?:unknown;

timestamp:string;

}



type RuntimeEventHandler =
(event:RuntimeEventEnvelope)=>void;



const eventHistory:
RuntimeEventEnvelope[]=[];



const handlers:
RuntimeEventHandler[]=[];



export function createEventEnvelope(
type:string,
source:string,
payload?:unknown
):RuntimeEventEnvelope {


return {

id:
crypto.randomUUID(),

type,

source,

payload,

timestamp:
new Date().toISOString()

};

}



export function registerEventHandler(
handler:RuntimeEventHandler
){

handlers.push(handler);

}



export function dispatchRuntimeEvent(
event:RuntimeEventEnvelope
){


eventHistory.push(event);


for(const handler of handlers){

handler(event);

}


return event;

}



export function getEventHistory(){

return eventHistory;

}



export function clearEventHistory(){

eventHistory.length=0;

}

