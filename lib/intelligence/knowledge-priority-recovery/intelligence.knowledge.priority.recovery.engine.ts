import {
saveKnowledgePriorityRecovery,
getAgentKnowledgePriorityRecovery
}
from "./intelligence.knowledge.priority.recovery.store";


export function recoverKnowledgePriority(
data:any
){

return saveKnowledgePriorityRecovery({

id:crypto.randomUUID(),

createdAt:new Date(),

recoveryStatus:"completed",

metadata:null,

...data

});

}



export function evaluatePriorityRecovery(
agentId:string
){

return getAgentKnowledgePriorityRecovery(agentId);

}



export function generatePriorityRecoveryReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
