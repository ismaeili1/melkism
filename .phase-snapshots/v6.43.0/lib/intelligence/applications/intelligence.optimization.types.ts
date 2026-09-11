export type IntelligenceOptimizationType =

"improve"

|

"adjust"

|

"reinforce"

|

"discard";



export interface IntelligenceOptimizationSignal {


id:string;


domain:string;


entityId:string;


type:IntelligenceOptimizationType;


currentScore:number;


targetScore:number;


reason:string;


createdAt:Date;


}



export interface IntelligenceOptimizationResult {


entityId:string;


signals:IntelligenceOptimizationSignal[];


optimizedScore:number;


createdAt:Date;


}

