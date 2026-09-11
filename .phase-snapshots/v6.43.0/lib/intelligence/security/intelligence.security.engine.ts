
import {

saveSecurityRecord,
getAgentSecurityRecords

}
from "./intelligence.security.store";



export function validateSecurity(
data:any
){

return saveSecurityRecord({

id:crypto.randomUUID(),

createdAt:new Date(),

approved:true,

securityLevel:"standard",

...data

});

}



export function checkPermission(
agentId:string
){

return getAgentSecurityRecords(agentId);

}



export function generateSecurityDecision(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}

