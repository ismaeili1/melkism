export type PropertyOptimizationType =

"value"

|

"location"

|

"condition"

|

"investment";



export interface PropertyOptimizationSignal {


id:string;


propertyId:string;


type:PropertyOptimizationType;


currentScore:number;


targetScore:number;


improvement:number;


createdAt:Date;


}



export interface PropertyOptimizationResult {


propertyId:string;


signals:PropertyOptimizationSignal[];


optimizedScore:number;


createdAt:Date;


}

