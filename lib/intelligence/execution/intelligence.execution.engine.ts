
import {

saveExecution,
getAgentExecutions

}
from "./intelligence.execution.store";



export function executeTask(
data:any
){

return saveExecution({

id:crypto.randomUUID(),

createdAt:new Date(),

status:"queued",

result:null,

...data

});

}



export function runExecution(
executionId:string
){

return {

executionId,

status:"running",

startedAt:new Date()

};

}



export function evaluateExecution(
agentId:string
){

return getAgentExecutions(agentId);

}

