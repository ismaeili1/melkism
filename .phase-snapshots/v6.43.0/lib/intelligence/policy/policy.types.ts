export type PolicyStatus =

"active"

|

"inactive";



export interface AdaptivePolicy {


id:string;


name:string;


rules:string[];


status:PolicyStatus;


createdAt:Date;


}



