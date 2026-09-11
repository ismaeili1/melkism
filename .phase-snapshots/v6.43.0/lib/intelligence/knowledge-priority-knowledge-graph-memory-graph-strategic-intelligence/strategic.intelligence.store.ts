import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphStrategicIntelligenceRecord
}
from "./strategic.intelligence.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphStrategicIntelligenceRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphStrategicIntelligence(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphStrategicIntelligenceRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphStrategicIntelligence(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
