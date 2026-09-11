export interface LearningContext {


id:string;


source:string;


data:unknown;


createdAt:Date;


}



export interface RuntimeFeedback {


id:string;


executionId:string;


result:unknown;


createdAt:Date;


}



export interface IntelligenceBridgeState {


contextCount:number;


feedbackCount:number;


}



