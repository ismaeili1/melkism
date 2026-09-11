import {
saveKnowledgePriorityKnowledgeGraphMemoryRecall,
getAgentKnowledgePriorityKnowledgeGraphMemoryRecall
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.recall.store";


export function recallKnowledgePriorityKnowledgeGraphMemory(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryRecall({

id:crypto.randomUUID(),

createdAt:new Date(),

recallStatus:"completed",

metadata:null,

...data

});

}



export function evaluateKnowledgeGraphMemoryRecall(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryRecall(agentId);

}



export function generateKnowledgeGraphMemoryRecallReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
