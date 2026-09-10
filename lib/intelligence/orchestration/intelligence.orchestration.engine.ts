import type { IntelligenceExecutionStatus } from "./intelligence.orchestration.types";


import {

saveExecution,
getExecution

}
from "./intelligence.orchestration.store";


export function createExecutionPlan(
data:any
){


const plan={


id:
crypto.randomUUID(),


task:
data.task,


agents:
data.agents || [],


status:
"created" as IntelligenceExecutionStatus,


createdAt:
new Date()


};


return saveExecution(plan);

}



export function executePlan(
id:string
){


const plan=getExecution(id);


if(!plan){

return null;

}


plan.status="running";


plan.status="completed";


return plan;

}



export function pauseExecution(
id:string
){


const plan=getExecution(id);


if(plan){

plan.status="paused";

}


return plan;

}



export function resumeExecution(
id:string
){


const plan=getExecution(id);


if(plan){

plan.status="running";

}


return plan;

}


