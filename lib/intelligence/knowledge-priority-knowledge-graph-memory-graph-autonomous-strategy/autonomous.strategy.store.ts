import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousStrategyRecord
}
from "./autonomous.strategy.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousStrategyRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousStrategy(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousStrategyRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousStrategy(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
