
import {

saveMemoryConsolidation,
getAgentMemoryConsolidation

}
from "./intelligence.memory.consolidation.store";


export function consolidateMemory(
data:any
){

return saveMemoryConsolidation({

id:crypto.randomUUID(),

createdAt:new Date(),

status:"consolidated",

metadata:null,

...data

});

}



export function analyzeMemoryImportance(
agentId:string
){

return getAgentMemoryConsolidation(agentId);

}



export function generateMemoryReport(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}

