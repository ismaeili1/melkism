import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveSelfImprovement,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveSelfImprovement

}
from "./adaptive.self.improvement.store";


export function improveAdaptiveKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveSelfImprovement({

id:crypto.randomUUID(),

createdAt:new Date(),

improvementConfidence:0,

adaptiveImprovementState:"initialized",

metadata:null,

...data

});

}


export function evaluateAdaptiveSelfImprovement(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveSelfImprovement(agentId);

}
