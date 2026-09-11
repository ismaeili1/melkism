
import {

executeTask,
evaluateExecution,
runExecution

}
from "./intelligence.execution.engine";



export function startAgentExecution(
data:any
){

return executeTask(data);

}



export function reviewExecution(
agentId:string
){

return evaluateExecution(agentId);

}



export function resetExecution(){

return true;

}



export {

runExecution

};

