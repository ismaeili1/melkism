import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousReasoningEngineRecord
}
from "./autonomous.reasoning.engine.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousReasoningEngineRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousReasoningEngine(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousReasoningEngineRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousReasoningEngine(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
