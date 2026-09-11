import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphSynthesis,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphSynthesis
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.synthesis.store";


export function synthesizeKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphSynthesis({

id:crypto.randomUUID(),

createdAt:new Date(),

synthesisStatus:"completed",

metadata:null,

...data

});

}



export function evaluateKnowledgeGraphMemoryGraphSynthesis(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphSynthesis(agentId);

}



export function generateKnowledgeGraphMemoryGraphSynthesisReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
