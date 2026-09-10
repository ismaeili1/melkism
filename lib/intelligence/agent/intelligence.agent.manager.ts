
import {

createAgent,
executeAgent,
pauseAgent,
resumeAgent

}
from "./intelligence.agent.engine";


import {

getAgent,
listAgents,
clearAgents

}
from "./intelligence.agent.store";



export function registerAgent(
data:any
){

return createAgent(data);

}



export function runAgent(
id:string
){

return executeAgent(id);

}



export function getRegisteredAgent(
id:string
){

return getAgent(id);

}



export function getAgentList(){

return listAgents();

}



export function pauseRegisteredAgent(
id:string
){

return pauseAgent(id);

}



export function resumeRegisteredAgent(
id:string
){

return resumeAgent(id);

}



export function resetAgents(){

return clearAgents();

}

