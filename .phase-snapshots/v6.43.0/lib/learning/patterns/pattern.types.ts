export type PatternType =

"behavior"

|

"knowledge"

|

"decision";



export interface IntelligencePattern {


id:string;


type:PatternType;


description:string;


confidence:number;


createdAt:Date;


}

