export type MetricType =
 | "counter"
 | "status"
 | "duration";


export interface MetricRecord {

name:string;

value:number;

type:MetricType;

createdAt:string;

}


export interface LogRecord {

level:
"info"
|
"warning"
|
"error"
|
"debug";

message:string;

timestamp:string;

}

