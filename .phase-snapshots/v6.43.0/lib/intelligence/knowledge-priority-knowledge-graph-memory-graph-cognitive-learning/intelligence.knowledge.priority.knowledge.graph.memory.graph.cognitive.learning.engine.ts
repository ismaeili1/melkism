import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveLearning,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveLearning
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.cognitive.learning.store";


export function cognitiveLearnKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveLearning({

id:crypto.randomUUID(),

createdAt:new Date(),

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphCognitiveLearning(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphCognitiveLearning(agentId);

}


export function generateKnowledgeGraphMemoryGraphCognitiveLearningReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
