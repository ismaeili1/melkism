import {
registerMetric
} from "./metrics.registry";


export function recordSystemMetric(
name:string,
value:number
){

registerMetric({

name,

value,

type:"status",

createdAt:
new Date().toISOString()

});

}

