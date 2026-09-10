export type PropertyCategory =

"premium"

|

"standard"

|

"low"

|

"unknown";



export interface PropertyScoreInput {


propertyId:string;


valueScore:number;


locationScore:number;


conditionScore:number;


investmentScore:number;


}



export interface PropertyScoreResult {


propertyId:string;


overallScore:number;


confidence:number;


category:PropertyCategory;


signals:string[];


createdAt:Date;


}

