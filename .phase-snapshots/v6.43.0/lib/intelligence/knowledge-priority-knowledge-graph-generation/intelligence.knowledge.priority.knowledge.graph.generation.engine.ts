import {
saveKnowledgePriorityKnowledgeGraphGeneration,
getAgentKnowledgePriorityKnowledgeGraphGeneration
}
from "./intelligence.knowledge.priority.knowledge.graph.generation.store";


export function generateKnowledgePriorityKnowledgeGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphGeneration({

id:crypto.randomUUID(),

createdAt:new Date(),

generationStatus:"completed",

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphGeneration(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphGeneration(agentId);

}


export function generateKnowledgeGraphGenerationReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
