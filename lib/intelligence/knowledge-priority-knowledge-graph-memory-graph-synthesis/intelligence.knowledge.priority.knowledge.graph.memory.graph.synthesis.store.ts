import type {
IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphSynthesisRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.memory.graph.synthesis.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphSynthesisRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphMemoryGraphSynthesis(
record:IntelligenceKnowledgePriorityKnowledgeGraphMemoryGraphSynthesisRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphMemoryGraphSynthesis(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphMemoryGraphSynthesis(){

records.length=0;

}
