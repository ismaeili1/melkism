import {
saveKnowledgePriorityKnowledgeGraphSynthesis,
getAgentKnowledgePriorityKnowledgeGraphSynthesis
}
from "./intelligence.knowledge.priority.knowledge.graph.synthesis.store";


export function synthesizeKnowledgePriorityKnowledgeGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphSynthesis({

id:crypto.randomUUID(),

createdAt:new Date(),

synthesisStatus:"completed",

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphSynthesis(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphSynthesis(agentId);

}


export function generateKnowledgeGraphSynthesisReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
