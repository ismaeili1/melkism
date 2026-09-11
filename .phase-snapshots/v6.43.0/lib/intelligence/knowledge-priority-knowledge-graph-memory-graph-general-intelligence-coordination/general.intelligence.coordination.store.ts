import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceCoordinationRecord

}
from "./general.intelligence.coordination.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceCoordinationRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceCoordination(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceCoordinationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGeneralIntelligenceCoordination(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
