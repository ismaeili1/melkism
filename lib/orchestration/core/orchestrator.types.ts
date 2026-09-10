export type OrchestrationStatus =

| "idle"
| "running"
| "completed"
| "failed";


export interface AgentOrchestrator {

id:string;

name:string;

agents:string[];

status:OrchestrationStatus;

}

