import type {
IntelligenceKnowledgeOptimizationRecord
}
from "./intelligence.knowledge.optimization.types";


const records:IntelligenceKnowledgeOptimizationRecord[]=[];


export function saveKnowledgeOptimization(
record:IntelligenceKnowledgeOptimizationRecord
){

records.push(record);

return record;

}


export function getAgentKnowledgeOptimization(
agentId:string
){

return records.filter(
item=>item.agentId===agentId
);

}


export function clearKnowledgeOptimization(){

records.length=0;

}
