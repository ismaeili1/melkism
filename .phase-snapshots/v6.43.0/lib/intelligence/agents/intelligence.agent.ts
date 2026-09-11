import type {

IntelligenceAgent

} from "./agent.types";



export class IntelligenceAgentEngine {



private agents:
IntelligenceAgent[] = [];



register(

name:string,

capabilities:string[]

){


const agent:IntelligenceAgent={


id:
crypto.randomUUID(),


name,


capabilities,


status:
"active",


createdAt:
new Date()


};



this.agents.push(agent);


return agent;


}



disable(
agentId:string
){


const agent=

this.agents.find(

item=>

item.id===agentId

);



if(!agent){

throw new Error(
"Agent not found"
);

}



agent.status="inactive";


return agent;


}



getAgents(){


return this.agents;


}



getActiveAgents(){


return this.agents.filter(

agent=>

agent.status==="active"

);


}



}



