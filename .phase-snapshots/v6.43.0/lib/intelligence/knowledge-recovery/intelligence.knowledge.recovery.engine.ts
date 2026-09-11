import {
saveKnowledgeRecovery,
getAgentKnowledgeRecovery
}
from "./intelligence.knowledge.recovery.store";


export function recoverKnowledge(
data:any
){

return saveKnowledgeRecovery({

id:crypto.randomUUID(),

createdAt:new Date(),

recoveryStatus:"completed",

metadata:null,

...data

});

}



export function restoreKnowledgeState(
agentId:string
){

return getAgentKnowledgeRecovery(agentId);

}



export function generateKnowledgeRecoveryReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
