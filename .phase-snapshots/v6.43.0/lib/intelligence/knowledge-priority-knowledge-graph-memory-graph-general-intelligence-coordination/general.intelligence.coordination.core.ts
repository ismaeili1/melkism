import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceCoordination,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceCoordination

}
from "./general.intelligence.coordination.store";


export function coordinateGeneralIntelligenceKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceCoordination({

id:crypto.randomUUID(),

createdAt:new Date(),

coordinationConfidence:0,

coordinationState:"initialized",

metadata:null,

...data

});

}


export function evaluateGeneralIntelligenceCoordination(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceCoordination(agentId);

}
