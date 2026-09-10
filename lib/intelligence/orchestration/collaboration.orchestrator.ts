import type {

AgentAssignment,

CollaborationPlan,

AgentRole

} from "./collaboration.types";



export class CollaborationOrchestrator {



private assignments:AgentAssignment[]=[];



assign(

agentId:string,

role:AgentRole,

task:string

):AgentAssignment {



const assignment:AgentAssignment={


id:crypto.randomUUID(),


agentId,


role,


task,


createdAt:new Date()


};



this.assignments.push(assignment);



return assignment;



}



createPlan():CollaborationPlan {



return {


id:crypto.randomUUID(),


assignments:this.assignments,


createdAt:new Date()


};



}



}

