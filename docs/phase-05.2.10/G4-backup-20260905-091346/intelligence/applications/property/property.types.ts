export type PropertyIntelligenceType =

"value"

|

"location"

|

"condition"

|

"investment";



export type PropertySignalStatus =

"created"

|

"analyzed"

|

"evaluated";



export interface PropertyIntelligenceSignal {


id:string;


propertyId:string;


type:PropertyIntelligenceType;


score:number;


status:PropertySignalStatus;


metadata?:Record<string,unknown>;


createdAt:Date;


}



export interface PropertyIntelligenceResult {


propertyId:string;


signals:PropertyIntelligenceSignal[];


overallScore:number;


createdAt:Date;


}

