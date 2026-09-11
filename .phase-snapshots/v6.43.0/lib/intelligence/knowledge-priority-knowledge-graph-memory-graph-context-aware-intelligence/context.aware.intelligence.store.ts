import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphContextAwareIntelligenceRecord
}
from "./context.aware.intelligence.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphContextAwareIntelligenceRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphContextAwareIntelligence(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphContextAwareIntelligenceRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphContextAwareIntelligence(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
