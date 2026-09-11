export interface Metric {

name:string;

value:number;

}


export interface LogEvent {

level:string;

message:string;

}


export interface HealthStatus {

service:string;

healthy:boolean;

}

