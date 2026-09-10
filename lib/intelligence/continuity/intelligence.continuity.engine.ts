
import {

saveContinuityRecord,
getAgentContinuity

}
from "./intelligence.continuity.store";


export function createCheckpoint(
data:any
){

return saveContinuityRecord({

id:crypto.randomUUID(),

createdAt:new Date(),

status:"checkpoint",

metadata:null,

...data

});

}


export function restoreCheckpoint(
agentId:string
){

return getAgentContinuity(agentId);

}


export function generateContinuityReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}

