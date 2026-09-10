export type ExecutionStatus =

| "pending"
| "running"
| "completed"
| "failed";


export interface AutonomousExecution {

action:string;

input:unknown;

output?:unknown;

status:ExecutionStatus;

}

