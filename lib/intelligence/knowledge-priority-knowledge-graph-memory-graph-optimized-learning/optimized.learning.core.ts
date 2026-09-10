import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedLearning,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedLearning

}
from "./optimized.learning.store";


export function optimizeKnowledgePriorityKnowledgeGraphMemoryGraphLearning(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedLearning({

id:crypto.randomUUID(),

createdAt:new Date(),

learningConfidence:0,

learningState:"initialized",

metadata:null,

...data

});

}


export function evaluateOptimizedLearning(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedLearning(agentId);

}
