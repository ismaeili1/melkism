import type {
IntelligenceKnowledgeSecurityRecord
}
from "./intelligence.knowledge.security.types";


const records:IntelligenceKnowledgeSecurityRecord[]=[];


export function saveKnowledgeSecurity(
record:IntelligenceKnowledgeSecurityRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgeSecurity(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgeSecurity(){

records.length=0;

}
