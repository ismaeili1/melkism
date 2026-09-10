import type {
IntelligenceKnowledgePriorityKnowledgeGraphRecord
}
from "./intelligence.knowledge.priority.knowledge.graph.types";


const records:IntelligenceKnowledgePriorityKnowledgeGraphRecord[]=[];


export function saveKnowledgePriorityKnowledgeGraph(
record:IntelligenceKnowledgePriorityKnowledgeGraphRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePriorityKnowledgeGraph(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePriorityKnowledgeGraph(){

records.length=0;

}
