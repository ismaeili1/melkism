export type AgentType =

| "knowledge"
| "research"
| "analysis"
| "recommendation";


export type AgentStatus =

| "inactive"
| "ready"
| "running"
| "completed";


export interface Agent {

id:string;

name:string;

type:AgentType;

capabilities:string[];

status:AgentStatus;

}

