import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedSelfImprovement,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedSelfImprovement

}
from "./optimized.self.improvement.store";


export function optimizeSelfImprovementKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedSelfImprovement({

id:crypto.randomUUID(),

createdAt:new Date(),

optimizationConfidence:0,

optimizationState:"initialized",

metadata:null,

...data

});

}


export function evaluateOptimizedSelfImprovement(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphOptimizedSelfImprovement(agentId);

}
