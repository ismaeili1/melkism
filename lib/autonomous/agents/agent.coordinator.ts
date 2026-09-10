import type {

IntelligenceAgent

} from "./agent.types";



export class AgentCoordinator {



private agents:
IntelligenceAgent[] = [];



register(
agent:IntelligenceAgent
){


this.agents.push(agent);


return agent;


}



assign(
agentId:string
){


const agent =

this.agents.find(

item=>

item.id===agentId

);



if(!agent){

throw new Error(
"Agent not found"
);

}



agent.status="assigned";


return agent;


}



getAgents(){


return this.agents;


}



getAvailableAgents(){


return this.agents.filter(

agent=>

agent.status==="idle"

);


}



}



