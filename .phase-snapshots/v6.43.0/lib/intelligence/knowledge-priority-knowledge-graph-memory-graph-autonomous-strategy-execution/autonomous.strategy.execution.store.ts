import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousStrategyExecutionRecord
}
from "./autonomous.strategy.execution.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousStrategyExecutionRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousStrategyExecution(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousStrategyExecutionRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousStrategyExecution(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
