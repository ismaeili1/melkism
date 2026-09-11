import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphReasoning,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphReasoning
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.reasoning.store";


export function reasonKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphReasoning({

id:crypto.randomUUID(),

createdAt:new Date(),

reasoningStatus:"completed",

metadata:null,

...data

});

}



export function evaluateKnowledgeGraphMemoryGraphReasoning(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphReasoning(agentId);

}



export function generateKnowledgeGraphMemoryGraphReasoningReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
