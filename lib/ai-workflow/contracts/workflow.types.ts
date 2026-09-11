export type WorkflowStatus =

 | "created"
 | "validated"
 | "approved"
 | "blocked";


export interface AIWorkflowTask {

id:string;

name:string;

status:WorkflowStatus;

}


export interface WorkflowRequest {

tasks:AIWorkflowTask[];

}


