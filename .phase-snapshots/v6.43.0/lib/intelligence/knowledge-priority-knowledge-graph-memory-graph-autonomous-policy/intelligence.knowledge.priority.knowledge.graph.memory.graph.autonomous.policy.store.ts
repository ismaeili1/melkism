import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousPolicyRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.autonomous.policy.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousPolicyRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousPolicy(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousPolicyRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousPolicy(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
