import type {
MetricRecord
} from "./observability.types";


const metrics:MetricRecord[]=[];



export function registerMetric(
metric:MetricRecord
){

metrics.push(metric);

}



export function getMetrics(){

return [...metrics];

}

