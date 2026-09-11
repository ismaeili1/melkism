
import {

saveOptimization,
getAgentOptimizations

}
from "./intelligence.optimization.store";



export function optimizeAgent(
data:any
){

return saveOptimization({

id:crypto.randomUUID(),

createdAt:new Date(),

score:data.score ?? 0,

type:"performance",

improvement:null,

...data

});

}



export function analyzeOptimization(
agentId:string
){

return getAgentOptimizations(agentId);

}



export function generateStrategy(
agentId:string
){

return {

agentId,

generatedAt:new Date()

};

}

