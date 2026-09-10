
export interface IntelligenceTask {

id:string;

source:string;

target:string;

action:string;

}



export interface AgentExecutionContext {

agentId:string;

taskId:string;

payload:string;

}



export interface WorkflowExecution {

workflowId:string;

status:string;

steps:string[];

}



export interface EcosystemCommand {

command:string;

priority:number;

}


