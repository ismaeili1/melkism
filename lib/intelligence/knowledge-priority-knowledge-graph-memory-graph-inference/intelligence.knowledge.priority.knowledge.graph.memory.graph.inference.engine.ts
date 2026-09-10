import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphInference,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphInference
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.inference.store";


export function inferKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphInference({

id:crypto.randomUUID(),

createdAt:new Date(),

inferenceStatus:"completed",

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphInference(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphInference(agentId);

}


export function generateKnowledgeGraphMemoryGraphInferenceReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
