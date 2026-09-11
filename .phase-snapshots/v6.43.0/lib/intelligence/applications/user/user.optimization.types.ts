export type UserOptimizationType =

"behavior"

|

"preference"

|

"activity"

|

"engagement";



export interface UserOptimizationSignal {


id:string;


userId:string;


type:UserOptimizationType;


currentScore:number;


targetScore:number;


improvement:number;


createdAt:Date;


}



export interface UserOptimizationResult {


userId:string;


signals:UserOptimizationSignal[];


optimizedScore:number;


createdAt:Date;


}

