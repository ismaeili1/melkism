import {

saveKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceOrchestration,

getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceOrchestration

}
from "./general.intelligence.orchestration.store";


export function orchestrateGeneralIntelligenceKnowledgePriorityKnowledgeGraphMemoryGraph(
data:any
){

return saveKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceOrchestration({

id:crypto.randomUUID(),

createdAt:new Date(),

orchestrationConfidence:0,

orchestrationState:"initialized",

metadata:null,

...data

});

}



export function evaluateGeneralIntelligenceOrchestration(
agentId:string
){

return getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceOrchestration(agentId);

}
