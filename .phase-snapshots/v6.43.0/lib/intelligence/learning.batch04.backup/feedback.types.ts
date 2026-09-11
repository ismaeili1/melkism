export type LearningSignalType =

"improvement"

|

"warning"

|

"success";



export interface LearningSignal {


id:string;


experienceId:string;


type:LearningSignalType;


strength:number;


message:string;


createdAt:Date;


}



export interface PerformanceScore {


agentId:string;


score:number;


sampleSize:number;


createdAt:Date;


}



export interface FeedbackAnalysisResult {


signals:LearningSignal[];


performance:PerformanceScore;


createdAt:Date;


}

