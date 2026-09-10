export type PlatformLifecycleStatus =
 | "initializing"
 | "ready"
 | "running"
 | "maintenance"
 | "stopped";


export interface PlatformFoundation {

name:string;

version:string;

status:PlatformLifecycleStatus;

startedAt:string;

}

