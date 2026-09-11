import {
saveKnowledgePriorityKnowledgeGraphInference,
getAgentKnowledgePriorityKnowledgeGraphInference
}
from "./intelligence.knowledge.priority.knowledge.graph.inference.store";


export function inferKnowledgePriorityKnowledgeGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphInference({

id:crypto.randomUUID(),

createdAt:new Date(),

inferenceStatus:"completed",

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphInference(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphInference(agentId);

}


export function generateKnowledgeGraphInferenceReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
