import {
saveKnowledgePriorityKnowledgeGraphReasoning,
getAgentKnowledgePriorityKnowledgeGraphReasoning
}
from "./intelligence.knowledge.priority.knowledge.graph.reasoning.store";


export function reasonKnowledgePriorityKnowledgeGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphReasoning({

id:crypto.randomUUID(),

createdAt:new Date(),

reasoningStatus:"completed",

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphReasoning(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphReasoning(agentId);

}


export function generateKnowledgeGraphReasoningReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
