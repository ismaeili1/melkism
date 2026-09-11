import {
saveKnowledgePriorityReasoning,
getAgentKnowledgePriorityReasoning
}
from "./intelligence.knowledge.priority.reasoning.store";


export function reasonPriorityKnowledge(
data:any
){

return saveKnowledgePriorityReasoning({

id:crypto.randomUUID(),

createdAt:new Date(),

reasoningStatus:"completed",

metadata:null,

...data

});

}



export function evaluatePriorityReasoning(
agentId:string
){

return getAgentKnowledgePriorityReasoning(agentId);

}



export function generatePriorityReasoningReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
