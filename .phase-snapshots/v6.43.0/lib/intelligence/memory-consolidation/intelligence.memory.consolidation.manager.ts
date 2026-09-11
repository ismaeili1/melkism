
import {

consolidateMemory,
analyzeMemoryImportance,
generateMemoryReport

}
from "./intelligence.memory.consolidation.engine";


export function runMemoryConsolidation(
data:any
){

return consolidateMemory(data);

}



export function reviewMemoryConsolidation(
agentId:string
){

return analyzeMemoryImportance(agentId);

}



export function resetMemoryConsolidation(){

return true;

}



export {

generateMemoryReport

};

