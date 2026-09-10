import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphDecisionIntelligenceRecord
}
from "./decision.intelligence.types";


const records:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphDecisionIntelligenceRecord[]
=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphDecisionIntelligence(
record:
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphDecisionIntelligenceRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphDecisionIntelligence(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}
