export type AgentLifecycleStatus =

| "created"
| "ready"
| "running"
| "completed"
| "failed";


export interface AgentRuntimeState {

id:string;

status:AgentLifecycleStatus;

}

