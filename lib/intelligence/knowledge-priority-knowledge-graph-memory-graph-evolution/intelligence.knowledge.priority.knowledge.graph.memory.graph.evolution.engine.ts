import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphEvolution,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphEvolution
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.evolution.store";


export function evolveKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphEvolution({

id:crypto.randomUUID(),

createdAt:new Date(),

evolutionStatus:"active",

metadata:null,

...data

});

}



export function evaluateKnowledgeGraphMemoryGraphEvolution(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphEvolution(agentId);

}



export function generateKnowledgeGraphMemoryGraphEvolutionReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
