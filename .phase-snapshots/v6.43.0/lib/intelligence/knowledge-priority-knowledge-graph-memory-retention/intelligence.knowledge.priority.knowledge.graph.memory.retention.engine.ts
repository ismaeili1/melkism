import {
saveKnowledgePriorityKnowledgeGraphMemoryRetention,
getAgentKnowledgePriorityKnowledgeGraphMemoryRetention
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.retention.store";


export function retainKnowledgePriorityKnowledgeGraphMemory(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryRetention({

id:crypto.randomUUID(),

createdAt:new Date(),

retentionStatus:"completed",

metadata:null,

...data

});

}



export function evaluateKnowledgeGraphMemoryRetention(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryRetention(agentId);

}



export function generateKnowledgeGraphMemoryRetentionReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
