import type {
IntelligenceKnowledgeStateRecord
}
from "./intelligence.knowledge.state.types";


const records:IntelligenceKnowledgeStateRecord[]=[];


export function saveKnowledgeState(
record:IntelligenceKnowledgeStateRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgeState(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgeState(){

records.length=0;

}
