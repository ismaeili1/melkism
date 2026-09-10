import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphGeneralAdaptiveIntelligence,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGeneralAdaptiveIntelligence

}
from "./general.adaptive.intelligence.store";


export function adaptGeneralKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphGeneralAdaptiveIntelligence({

id:crypto.randomUUID(),

createdAt:new Date(),

generalIntelligenceConfidence:0,

generalIntelligenceState:"initialized",

metadata:null,

...data

});

}


export function evaluateGeneralAdaptiveIntelligence(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGeneralAdaptiveIntelligence(agentId);

}
