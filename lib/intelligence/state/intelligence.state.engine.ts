
import {

saveStateRecord,
getAgentState

}
from "./intelligence.state.store";


export function updateState(
data:any
){

return saveStateRecord({

id:crypto.randomUUID(),

createdAt:new Date(),

status:"updated",

metadata:null,

...data

});

}


export function restoreState(
agentId:string
){

return getAgentState(agentId);

}


export function generateStateReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}

