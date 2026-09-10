import {
saveKnowledgePriorityKnowledgeGraphMemoryGraph,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraph
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.store";


export function createKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraph({

id:crypto.randomUUID(),

createdAt:new Date(),

graphStatus:"completed",

metadata:null,

...data

});

}



export function evaluateKnowledgeGraphMemoryGraph(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraph(agentId);

}



export function generateKnowledgeGraphMemoryGraphReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
