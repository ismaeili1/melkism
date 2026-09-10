import type {
IntelligenceKnowledgePrioritySynthesisRecord
}
from "./intelligence.knowledge.priority.synthesis.types";


const records:IntelligenceKnowledgePrioritySynthesisRecord[]=[];


export function saveKnowledgePrioritySynthesis(
record:IntelligenceKnowledgePrioritySynthesisRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgePrioritySynthesis(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgePrioritySynthesis(){

records.length=0;

}
