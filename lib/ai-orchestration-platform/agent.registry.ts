import type {
AIAgent
} from "./ai.types";


const agents:AIAgent[]=[];



export function registerAgent(
agent:AIAgent
){

if(
!agents.some(
item=>item.id===agent.id
)
){

agents.push(agent);

}

}



export function getAgents(){

return [...agents];

}

