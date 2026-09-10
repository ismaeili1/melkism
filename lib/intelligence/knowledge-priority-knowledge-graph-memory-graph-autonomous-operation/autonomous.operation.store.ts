import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousOperationRecord
}
from "./autonomous.operation.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousOperationRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousOperation(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousOperationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphAutonomousOperation(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
