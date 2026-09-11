export type IntelligenceFactorType =

"risk"

|

"opportunity";



export interface IntelligenceFactor {


id:string;


type:IntelligenceFactorType;


name:string;


score:number;


weight:number;


createdAt:Date;


}



export interface IntelligenceMatrixContext {


entityId:string;


factors:IntelligenceFactor[];


createdAt:Date;


}



export interface IntelligenceMatrixResult {


entityId:string;


riskScore:number;


opportunityScore:number;


balanceScore:number;


summary:string;


confidence:number;


createdAt:Date;


}

