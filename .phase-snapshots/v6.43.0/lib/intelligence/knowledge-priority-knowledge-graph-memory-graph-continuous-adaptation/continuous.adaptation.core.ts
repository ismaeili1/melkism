import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphContinuousAdaptation,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphContinuousAdaptation

}
from "./continuous.adaptation.store";


export function adaptContinuouslyKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphContinuousAdaptation({

id:crypto.randomUUID(),

createdAt:new Date(),

adaptationConfidence:0,

adaptationState:"initialized",

metadata:null,

...data

});

}


export function evaluateContinuousAdaptation(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphContinuousAdaptation(agentId);

}
