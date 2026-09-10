import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGeneralAdaptiveIntelligenceRecord

}
from "./general.adaptive.intelligence.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGeneralAdaptiveIntelligenceRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphGeneralAdaptiveIntelligence(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphGeneralAdaptiveIntelligenceRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphGeneralAdaptiveIntelligence(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
