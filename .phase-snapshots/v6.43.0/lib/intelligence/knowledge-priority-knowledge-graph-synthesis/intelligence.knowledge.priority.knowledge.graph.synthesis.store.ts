import type {
IntelligenceKnowledgePriorityKnowledgeGraphSynthesisRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.synthesis.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphSynthesisRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraphSynthesis(
record:IntelligenceKnowledgePriorityKnowledgeGraphSynthesisRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraphSynthesis(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraphSynthesis(){

records.length=0;

}
