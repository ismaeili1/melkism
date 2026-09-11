import type {

CollaboratingAgent

} from "../contracts/collaboration.types";


export const multiAgentRegistry:

CollaboratingAgent[]=[];


export function registerCollaboratingAgent(

agent:CollaboratingAgent

){

multiAgentRegistry.push(agent);

return agent;

}


