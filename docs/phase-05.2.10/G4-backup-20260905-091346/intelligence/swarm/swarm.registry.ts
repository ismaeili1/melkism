import type {

SwarmAgent,

AgentMessage,

SwarmContext

} from "./swarm.types";



export class SwarmRegistry {



private agents:SwarmAgent[]=[];


private messages:AgentMessage[]=[];



register(

agent:SwarmAgent

){


this.agents.push(agent);


}



send(

message:AgentMessage

){


this.messages.push(message);


}



getContext():SwarmContext{


return {


agents:this.agents,


messages:this.messages,


createdAt:new Date()


};



}



}



