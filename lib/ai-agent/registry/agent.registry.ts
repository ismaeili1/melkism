import type {

AIAgentIdentity

} from "../contracts/agent.types";


export const agentRegistry:

AIAgentIdentity[]=[];


export function registerAgent(

agent:AIAgentIdentity

){

agentRegistry.push(agent);

return agent;

}


