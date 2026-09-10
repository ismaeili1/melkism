import type {

AgentTask,

AgentPlan

} from "./agent.task.types";



export class AgentTaskPlanner {



createPlan(

agentId:string,

goal:string

):AgentPlan {



const tasks:AgentTask[]=[


{


id:crypto.randomUUID(),


agentId,


type:"analyze",


goal,


priority:1,


status:"pending",


createdAt:new Date()


}


];



return {


agentId,


tasks,


createdAt:new Date()


};



}



prioritize(

tasks:AgentTask[]

){



return tasks.sort(

(a,b)=>b.priority-a.priority

);



}



}

