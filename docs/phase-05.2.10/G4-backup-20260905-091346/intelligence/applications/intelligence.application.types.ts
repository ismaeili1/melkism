export type IntelligenceDomain =

"market"

|

"property"

|

"user";



export type IntelligenceApplicationStatus =

"active"

|

"learning"

|

"optimized";



export interface IntelligenceApplicationSignal {


id:string;


domain:IntelligenceDomain;


entityId:string;


score:number;


status:IntelligenceApplicationStatus;


metadata?:Record<string,unknown>;


createdAt:Date;


}



export interface IntelligenceApplicationResult {


domain:IntelligenceDomain;


entityId:string;


score:number;


signals:IntelligenceApplicationSignal[];


createdAt:Date;


}

