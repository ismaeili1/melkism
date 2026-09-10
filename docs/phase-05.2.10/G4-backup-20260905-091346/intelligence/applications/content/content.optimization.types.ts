export type ContentOptimizationType =

"quality"

|

"classification"

|

"ranking";



export interface ContentOptimizationSignal {


id:string;


contentId:string;


type:ContentOptimizationType;


currentScore:number;


targetScore:number;


improvement:number;


createdAt:Date;


}



export interface ContentOptimizationResult {


contentId:string;


signals:ContentOptimizationSignal[];


optimizedScore:number;


createdAt:Date;


}

