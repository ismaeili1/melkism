import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousGovernanceRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.autonomous.governance.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousGovernanceRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousGovernance(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousGovernanceRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousGovernance(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
