
import {

registerAgentRegistry,
getAgentByRole

}
from "./intelligence.agent.registry";


export function registerSpecializedAgent(
agent:any
){

return registerAgentRegistry(agent);

}



export function getSpecializedAgent(
role:string
){

return getAgentByRole(role);

}



export function executeAgentRole(
role:string,
payload:any
){

const agent=getAgentByRole(role);


if(!agent){

return null;

}


return {

agent,

payload,

status:"executed"

};

}


