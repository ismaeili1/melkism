export type PropertyFeatureType =

"location"

|

"size"

|

"design"

|

"condition"

|

"amenities"

|

"investment";



export interface PropertyFeature {


id:string;


type:PropertyFeatureType;


value:string;


weight:number;


createdAt:Date;


}



export interface PropertyAnalysisContext {


propertyId:string;


features:PropertyFeature[];


createdAt:Date;


}



export interface PropertyInsight {


id:string;


propertyId:string;


score:number;


summary:string;


confidence:number;


createdAt:Date;


}

