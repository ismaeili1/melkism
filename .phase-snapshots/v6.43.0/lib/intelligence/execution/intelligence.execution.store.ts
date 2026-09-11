
import type {

IntelligenceExecutionRecord

}
from "./intelligence.execution.types";


const executions:
IntelligenceExecutionRecord[]
=
[];



export function saveExecution(
execution:IntelligenceExecutionRecord
){

executions.push(execution);

return execution;

}



export function getAgentExecutions(
agentId:string
){

return executions.filter(
item=>item.agentId===agentId
);

}



export function clearExecutions(){

executions.length=0;

}

