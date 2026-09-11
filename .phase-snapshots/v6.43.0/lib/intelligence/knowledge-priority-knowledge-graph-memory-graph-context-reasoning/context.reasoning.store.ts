import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphContextReasoningRecord
}
from "./context.reasoning.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphContextReasoningRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphContextReasoning(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphContextReasoningRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphContextReasoning(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
