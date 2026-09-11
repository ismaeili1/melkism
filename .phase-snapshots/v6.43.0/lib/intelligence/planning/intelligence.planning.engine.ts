
import {

savePlan,
getAgentPlans

}
from "./intelligence.planning.store";



export function createPlan(
data:any
){

return savePlan({

id:crypto.randomUUID(),

createdAt:new Date(),

status:"pending",

priority:data.priority ?? 0,

tasks:data.tasks ?? [],

...data

});

}



export function executePlanningStep(
planId:string
){

return {

planId,

executed:true,

executedAt:new Date()

};

}



export function evaluatePlan(
agentId:string
){

return getAgentPlans(agentId);

}

