
import {

saveAuditRecord,
getAgentAuditRecords

}
from "./intelligence.audit.store";



export function recordAudit(
data:any
){

return saveAuditRecord({

id:crypto.randomUUID(),

createdAt:new Date(),

status:"recorded",

metadata:null,

...data

});

}



export function analyzeAudit(
agentId:string
){

return getAgentAuditRecords(agentId);

}



export function generateAuditReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}

