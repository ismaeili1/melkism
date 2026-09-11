
import {

saveAdaptation,
getAgentAdaptations

}
from "./intelligence.adaptation.store";



export function adaptAgent(
data:any
){


return saveAdaptation({

id:crypto.randomUUID(),

createdAt:new Date(),

type:"optimization",

...data

});


}



export function evaluateAdaptation(
agentId:string
){

return getAgentAdaptations(agentId);

}



export function applyOptimization(
agentId:string
){

return {

agentId,

optimized:true,

updatedAt:new Date()

};

}

