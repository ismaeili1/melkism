export type AgentRole =

 | "knowledge"
 | "search"
 | "analysis"
 | "architecture";


export interface CollaboratingAgent {

id:string;

role:AgentRole;

}


export interface AgentCollaborationRequest {

agents:CollaboratingAgent[];

task:string;

}


