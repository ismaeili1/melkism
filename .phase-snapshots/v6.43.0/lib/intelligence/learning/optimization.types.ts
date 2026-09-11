export type OptimizationType =

"behavior"

|

"accuracy"

|

"performance"

|

"efficiency";



export interface LearningPattern {


id:string;


agentId:string;


pattern:string;


frequency:number;


successRate:number;


createdAt:Date;


}



export interface OptimizationStrategy {


id:string;


agentId:string;


type:OptimizationType;


action:string;


priority:number;


createdAt:Date;


}



export interface LearningOptimizationResult {


patterns:LearningPattern[];


strategies:OptimizationStrategy[];


createdAt:Date;


}


