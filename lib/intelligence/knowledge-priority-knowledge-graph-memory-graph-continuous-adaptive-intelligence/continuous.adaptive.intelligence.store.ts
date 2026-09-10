import type {

IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphContinuousAdaptiveIntelligenceRecord

}
from "./continuous.adaptive.intelligence.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphContinuousAdaptiveIntelligenceRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphContinuousAdaptiveIntelligence(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphContinuousAdaptiveIntelligenceRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphContinuousAdaptiveIntelligence(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
