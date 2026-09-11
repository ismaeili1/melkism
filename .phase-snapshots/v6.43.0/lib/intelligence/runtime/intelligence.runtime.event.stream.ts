/**
 * MELKISM Intelligence Runtime Event Stream
 */


export interface RuntimeStreamEvent {

type:string;

source:string;

payload?:unknown;

timestamp:string;

}



type RuntimeStreamSubscriber =
(event:RuntimeStreamEvent)=>void;



const subscribers:
RuntimeStreamSubscriber[]=[];



export function subscribeRuntimeEvents(
subscriber:RuntimeStreamSubscriber
){

subscribers.push(subscriber);

return subscriber;

}



export function publishRuntimeEvent(
event:RuntimeStreamEvent
){


for(const subscriber of subscribers){

subscriber(event);

}


return event;

}



export function getStreamSubscribers(){

return subscribers.length;

}



export function clearStreamSubscribers(){

subscribers.length=0;

}

