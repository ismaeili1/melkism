
import type {

IntelligenceOptimizationRecord

}
from "./intelligence.optimization.types";


const optimizationRecords:
IntelligenceOptimizationRecord[]
=
[];



export function saveOptimization(
record:IntelligenceOptimizationRecord
){

optimizationRecords.push(record);

return record;

}



export function getAgentOptimizations(
agentId:string
){

return optimizationRecords.filter(
item=>item.agentId===agentId
);

}



export function clearOptimizations(){

optimizationRecords.length=0;

}

