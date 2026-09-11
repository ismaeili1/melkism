import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphContinuousIntelligenceEvolution,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphContinuousIntelligenceEvolution

}
from "./continuous.intelligence.evolution.store";


export function evolveContinuousIntelligenceKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphContinuousIntelligenceEvolution({

id:crypto.randomUUID(),

createdAt:new Date(),

continuousEvolutionConfidence:0,

continuousEvolutionState:"initialized",

metadata:null,

...data

});

}


export function evaluateContinuousIntelligenceEvolution(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphContinuousIntelligenceEvolution(agentId);

}
