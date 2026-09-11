import type {
AutonomousContext
} from "../context";


export type RuntimeStatus =

| "idle"
| "running"
| "completed"
| "failed";


export interface AutonomousRuntime {

id:string;

status:RuntimeStatus;

context:AutonomousContext;

createdAt:Date;

}

