import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedSelfLearning,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedSelfLearning

}
from "./optimized.self.learning.store";


export function optimizeSelfLearningKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedSelfLearning({

id:crypto.randomUUID(),

createdAt:new Date(),

learningConfidence:0,

learningState:"initialized",

metadata:null,

...data

});

}


export function evaluateOptimizedSelfLearning(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedSelfLearning(agentId);

}
