
import type {

IntelligenceAgent

}
from "./intelligence.agent.types";


const agents:
Map<string,IntelligenceAgent>
=
new Map();



export function saveAgent(
agent:IntelligenceAgent
){

agents.set(agent.id,agent);

return agent;

}



export function getAgent(
id:string
){

return agents.get(id);

}



export function listAgents(){

return Array.from(agents.values());

}



export function clearAgents(){

agents.clear();

}

