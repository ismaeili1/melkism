import type { IntelligenceAgentStatus } from "./intelligence.agent.types";


import {

saveAgent,
getAgent

}
from "./intelligence.agent.store";



export function createAgent(
data:any
){


const agent={


id:
crypto.randomUUID(),


name:
data.name || "MELKISM Agent",


role:
data.role || "intelligence",


status: "idle" as IntelligenceAgentStatus,


capabilities:
data.capabilities || [],


createdAt:
new Date()


};


return saveAgent(agent);

}



export function executeAgent(
id:string
){

const agent=getAgent(id);


if(!agent){

return null;

}


agent.status="executing";


agent.status="completed";


return agent;

}



export function pauseAgent(
id:string
){

const agent=getAgent(id);


if(agent){

agent.status="paused";

}


return agent;

}



export function resumeAgent(
id:string
){

const agent=getAgent(id);


if(agent){

agent.status="idle";

}


return agent;

}



