export type AgentStatus =

| "available"
| "busy"
| "offline";


export interface AgentContract {

id:string;

name:string;

capabilities:string[];

status:AgentStatus;

}

