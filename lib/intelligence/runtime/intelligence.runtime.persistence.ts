/**
 * MELKISM Intelligence Runtime Persistence Layer
 */


export interface RuntimePersistenceRecord {

id:string;

type:string;

source:string;

payload?:unknown;

timestamp:string;

}



const persistedEvents:
RuntimePersistenceRecord[]=[];



export function persistRuntimeEvent(
event:RuntimePersistenceRecord
){


persistedEvents.push(event);


return event;

}



export function getPersistedEvents(){

return persistedEvents;

}



export function clearPersistedEvents(){

persistedEvents.length=0;

}



export function getPersistenceStats(){

return {

storage:
"runtime-event-store",

events:
persistedEvents.length,

lastWrite:
persistedEvents.length
?
persistedEvents[persistedEvents.length-1].timestamp
:
null

};

}

