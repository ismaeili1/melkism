
import type {

IntelligencePlanningRecord

}
from "./intelligence.planning.types";


const plans:
IntelligencePlanningRecord[]
=
[];



export function savePlan(
plan:IntelligencePlanningRecord
){

plans.push(plan);

return plan;

}



export function getAgentPlans(
agentId:string
){

return plans.filter(
plan=>plan.agentId===agentId
);

}



export function clearPlans(){

plans.length=0;

}

