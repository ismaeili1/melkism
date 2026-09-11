export type AgentExperienceType =

"success"

|

"failure"

|

"improvement";



export interface AgentExperience {


id:string;


agentId:string;


actionId:string;


type:AgentExperienceType;


feedback:string;


score:number;


createdAt:Date;


}



export interface AgentEvolutionRecord {


agentId:string;


experiences:AgentExperience[];


averageScore:number;


updatedAt:Date;


}

