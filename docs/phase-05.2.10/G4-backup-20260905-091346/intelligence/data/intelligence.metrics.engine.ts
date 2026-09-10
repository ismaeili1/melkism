/**
 * MELKISM Intelligence Metrics Engine
 * v38.20.14
 */


export interface MetricRecord {


name:string;

value:number;

createdAt:Date;

}



export class IntelligenceMetricsEngine {


private history:
MetricRecord[] = [];



createMetric(

name:string,

value:number

){


const metric:
MetricRecord = {


name,

value,

createdAt:new Date()


};


this.history.push(metric);


return metric;


}



calculateMetric(

name:string,

value:number

){


return this.createMetric(

name,

value

);


}



getMetricsHistory(){


return this.history;


}


}
