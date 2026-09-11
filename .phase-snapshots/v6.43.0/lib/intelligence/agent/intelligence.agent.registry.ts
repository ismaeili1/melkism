
import type {

IntelligenceAgent

}
from "./intelligence.agent.types";


const registry:
Map<string,IntelligenceAgent>
=
new Map();



export function registerAgentRegistry(
agent:IntelligenceAgent
){

registry.set(agent.id,agent);

return agent;

}



export function getAgentByRole(
role:string
){

return Array.from(
registry.values()
)
.find(
agent=>agent.role===role
);

}



export function getAgentRegistry(){

return Array.from(
registry.values()
);

}



export function clearAgentRegistry(){

registry.clear();

}


