import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousCoordinationRecord
}
from "./autonomous.coordination.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousCoordinationRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousCoordination(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousCoordinationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousCoordination(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
