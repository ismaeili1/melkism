
import type {

IntelligenceAgentExecutionPlan

}
from "./intelligence.orchestration.types";


const executions:
Map<string,IntelligenceAgentExecutionPlan>
=
new Map();



export function saveExecution(
plan:IntelligenceAgentExecutionPlan
){

executions.set(plan.id,plan);

return plan;

}



export function getExecution(
id:string
){

return executions.get(id);

}



export function listExecutions(){

return Array.from(executions.values());

}



export function clearExecutions(){

executions.clear();

}

