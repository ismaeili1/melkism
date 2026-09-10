import type {

AgentExperience,

AgentEvolutionRecord

} from "./agent.evolution.types";



export class AgentEvolutionEngine {



private experiences:AgentExperience[]=[];



learn(

experience:AgentExperience

){


this.experiences.push(experience);


}



evaluate(

agentId:string

):AgentEvolutionRecord {



const items=this.experiences.filter(

item=>item.agentId===agentId

);



const score=

items.length===0

?

0

:

items.reduce(

(sum,item)=>sum+item.score,

0

)/items.length;



return {


agentId,


experiences:items,


averageScore:score,


updatedAt:new Date()


};



}



}

