import type {

AgentProfile,

AgentRegistry

} from "./orchestration.types";



export class MultiAgentRegistry {



private agents:AgentProfile[]=[];



register(

agent:AgentProfile

){


this.agents.push(agent);


}



findByCapability(

capability:string

){



return this.agents.filter(

agent=>

agent.capabilities.includes(

capability as never

)

);



}



getRegistry():AgentRegistry{


return {


agents:this.agents,


createdAt:new Date()


};



}



}

