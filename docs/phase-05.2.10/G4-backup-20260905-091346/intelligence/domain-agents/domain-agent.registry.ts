import type {

DomainAgent,

RealEstateAgentDomain

} from "./domain-agent.types";



export class DomainAgentRegistry {



private agents:DomainAgent[]=[];



register(

agent:DomainAgent

){


this.agents.push(agent);


}



findByDomain(

domain:RealEstateAgentDomain

){


return this.agents.filter(

agent=>agent.domain===domain

);


}



getAll(){


return this.agents;


}



}

