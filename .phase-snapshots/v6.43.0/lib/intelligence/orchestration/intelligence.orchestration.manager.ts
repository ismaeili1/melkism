
import {

createExecutionPlan,
executePlan,
pauseExecution,
resumeExecution

}
from "./intelligence.orchestration.engine";


import {

listExecutions,
clearExecutions

}
from "./intelligence.orchestration.store";



export function startAgentWorkflow(
data:any
){

const plan=createExecutionPlan(data);

return executePlan(plan.id);

}



export function getExecutionStatus(){

return listExecutions();

}



export function pauseWorkflow(id:string){

return pauseExecution(id);

}



export function resumeWorkflow(id:string){

return resumeExecution(id);

}



export function clearWorkflows(){

return clearExecutions();

}

