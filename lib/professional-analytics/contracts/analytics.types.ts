export interface AnalyticsRequest {

context:string;

scope:string;

}


export interface AnalyticsMetric {

name:string;

value:number;

}


export interface InsightResult {

title:string;

description:string;

confidence:number;

}

