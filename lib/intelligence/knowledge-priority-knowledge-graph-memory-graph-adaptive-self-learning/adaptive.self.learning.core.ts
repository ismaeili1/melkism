import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveSelfLearning,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveSelfLearning

}
from "./adaptive.self.learning.store";


export function adaptiveLearnKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveSelfLearning({

id:crypto.randomUUID(),

createdAt:new Date(),

adaptiveLearningConfidence:0,

adaptiveLearningState:"initialized",

metadata:null,

...data

});

}



export function evaluateAdaptiveSelfLearning(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveSelfLearning(agentId);

}
