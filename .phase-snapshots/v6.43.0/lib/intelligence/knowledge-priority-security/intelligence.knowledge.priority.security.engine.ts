import {
saveKnowledgePrioritySecurity,
getAgentKnowledgePrioritySecurity
}
from "./intelligence.knowledge.priority.security.store";


export function secureKnowledgePriority(
data:any
){

return saveKnowledgePrioritySecurity({

id:crypto.randomUUID(),

createdAt:new Date(),

securityStatus:"completed",

metadata:null,

...data

});

}



export function evaluatePrioritySecurity(
agentId:string
){

return getAgentKnowledgePrioritySecurity(agentId);

}



export function generatePrioritySecurityReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
