import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousExecutionRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.autonomous.execution.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousExecutionRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousExecution(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousExecutionRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousExecution(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
