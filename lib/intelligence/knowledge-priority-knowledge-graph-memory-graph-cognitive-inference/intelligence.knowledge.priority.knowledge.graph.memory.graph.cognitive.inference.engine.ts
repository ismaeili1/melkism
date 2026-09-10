import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveInference,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveInference
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.inference.store";


export function cognitiveInferKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveInference({

id:crypto.randomUUID(),

createdAt:new Date(),

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphCognitiveInference(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveInference(agentId);

}

