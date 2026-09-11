import type {

RuntimeMonitor

} from "./monitor.types";



export class RuntimeMonitorEngine {



private monitors:
RuntimeMonitor[] = [];



track(
executionId:string,
message:string,
status:
RuntimeMonitor["status"]
){


const monitor:RuntimeMonitor={


id:
crypto.randomUUID(),


executionId,


status,


message,


createdAt:
new Date()


};



this.monitors.push(monitor);


return monitor;


}



getMonitors(){


return this.monitors;


}



getErrors(){


return this.monitors.filter(

item=>

item.status==="error"

);


}



}



