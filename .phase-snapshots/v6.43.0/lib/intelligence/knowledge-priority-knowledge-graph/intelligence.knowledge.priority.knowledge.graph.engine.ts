import {
saveKnowledgePriorityKnowledgeGraph,
getAgentKnowledgePriorityKnowledgeGraph
}
from "./intelligence.knowledge.priority.knowledge.graph.store";


export function buildKnowledgePriorityKnowledgeGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraph({

id:crypto.randomUUID(),

createdAt:new Date(),

graphStatus:"completed",

metadata:null,

...data

});

}


export function evaluateKnowledgeGraph(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraph(agentId);

}


export function generateKnowledgeGraphReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
