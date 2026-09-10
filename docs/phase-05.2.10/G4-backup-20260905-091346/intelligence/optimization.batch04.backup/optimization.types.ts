import type {

IntelligenceFeedback

} from "../learning/learning.types";



export type OptimizationType =

"rule"

|

"metric"

|

"suggestion";



export type OptimizationStatus =

"detected"

|

"created"

|

"evaluated"

|

"applied";



export interface OptimizationMetric {


id:string;


name:string;


value:number;


createdAt:Date;


}



export interface OptimizationRule {


id:string;


signalId?:string;


feedback?:IntelligenceFeedback;


type:OptimizationType;


condition?:string;


action?:string;


priority:number;


createdAt:Date;


}



export interface OptimizationSuggestion {


id:string;


feedbackId?:string;


feedback?:IntelligenceFeedback;


metricId?:string;


ruleId?:string;


type?:OptimizationType;


recommendation?:string;


suggestion?:string;


priority?:number;


score?:number;


status:OptimizationStatus;


createdAt:Date;


}

