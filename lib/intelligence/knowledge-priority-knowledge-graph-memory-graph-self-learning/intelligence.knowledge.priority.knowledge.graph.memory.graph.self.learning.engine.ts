import {
saveKnowledgePriorityKnowledgeGraphMemoryGraphSelfLearning,
getAgentKnowledgePriorityKnowledgeGraphMemoryGraphSelfLearning
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.self.learning.store";


export function learnKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphSelfLearning({

id:crypto.randomUUID(),

createdAt:new Date(),

learningStatus:"active",

metadata:null,

...data

});

}


export function evaluateKnowledgeGraphMemoryGraphSelfLearning(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphSelfLearning(agentId);

}


export function generateKnowledgeGraphMemoryGraphSelfLearningReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}
