/**
 * MELKISM Intelligence Monitoring Layer
 * v38.20.14
 */


export interface IntelligenceMetricRecord {


name:string;

value:number;

createdAt:Date;

}



export class IntelligenceMonitoringLayer {


private history:
IntelligenceMetricRecord[] = [];



registerMetric(

name:string,

value:number

){


const metric:
IntelligenceMetricRecord = {


name,

value,

createdAt:new Date()


};


this.history.push(metric);


return metric;


}



collectMetric(

name:string

){


return this.history.find(

metric =>
metric.name===name

);


}



getMonitoringHistory(){


return this.history;


}


}
