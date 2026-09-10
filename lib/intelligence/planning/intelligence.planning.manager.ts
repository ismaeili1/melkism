
import {

createPlan,
evaluatePlan,
executePlanningStep

}
from "./intelligence.planning.engine";



export function planAgentTask(
data:any
){

return createPlan(data);

}



export function reviewPlans(
agentId:string
){

return evaluatePlan(agentId);

}



export function resetPlanning(){

return true;

}



export {

executePlanningStep

};

