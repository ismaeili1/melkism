import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousCoordinationRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.autonomous.coordination.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousCoordinationRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousCoordination(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousCoordinationRecord
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
