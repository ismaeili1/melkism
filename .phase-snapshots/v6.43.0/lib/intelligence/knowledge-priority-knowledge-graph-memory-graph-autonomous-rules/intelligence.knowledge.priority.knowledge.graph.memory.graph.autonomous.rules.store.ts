import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousRulesRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.autonomous.rules.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousRulesRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousRules(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousRulesRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousRules(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
