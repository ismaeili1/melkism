import {
saveKnowledgePriorityKnowledgeRetention,
getAgentKnowledgePriorityKnowledgeRetention
}
from "./intelligence.knowledge.priority.knowledge.retention.store";


export function retainKnowledgePriorityKnowledge(
data:any
){

return saveKnowledgePriorityKnowledgeRetention({

id:crypto.randomUUID(),

createdAt:new Date(),

retentionStatus:"completed",

metadata:null,

...data

});

}


export function evaluateKnowledgeRetention(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeRetention(agentId);

}


export function generateKnowledgeRetentionReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
