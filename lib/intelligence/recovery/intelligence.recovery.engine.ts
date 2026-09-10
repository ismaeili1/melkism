
import {

saveRecoveryRecord,
getAgentRecovery

}
from "./intelligence.recovery.store";


export function executeRecovery(
data:any
){

return saveRecoveryRecord({

id:crypto.randomUUID(),

createdAt:new Date(),

status:"recovered",

metadata:null,

...data

});

}



export function analyzeRecovery(
agentId:string
){

return getAgentRecovery(agentId);

}



export function generateRecoveryReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}

