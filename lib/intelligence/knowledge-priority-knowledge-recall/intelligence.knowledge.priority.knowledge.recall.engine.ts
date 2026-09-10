import {
saveKnowledgePriorityKnowledgeRecall,
getAgentKnowledgePriorityKnowledgeRecall
}
from "./intelligence.knowledge.priority.knowledge.recall.store";


export function recallKnowledgePriorityKnowledge(
data:any
){

return saveKnowledgePriorityKnowledgeRecall({

id:crypto.randomUUID(),

createdAt:new Date(),

recallStatus:"completed",

metadata:null,

...data

});

}


export function evaluateKnowledgeRecall(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeRecall(agentId);

}


export function generateKnowledgeRecallReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
