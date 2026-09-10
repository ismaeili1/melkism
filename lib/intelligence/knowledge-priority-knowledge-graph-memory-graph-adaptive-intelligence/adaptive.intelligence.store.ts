import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveIntelligenceRecord
}
from "./adaptive.intelligence.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveIntelligenceRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveIntelligence(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveIntelligenceRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAdaptiveIntelligence(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
