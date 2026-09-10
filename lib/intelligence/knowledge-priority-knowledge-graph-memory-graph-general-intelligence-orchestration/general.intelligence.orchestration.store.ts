import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceOrchestrationRecord

}
from "./general.intelligence.orchestration.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceOrchestrationRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceOrchestration(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceOrchestrationRecord
){

records.push(record);

return record;

}



export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceOrchestration(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
