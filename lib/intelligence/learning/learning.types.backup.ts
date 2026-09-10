export type LearningExperienceType =

"decision"

|

"prediction"

|

"recommendation"

|

"interaction";



export type LearningSignalType =

"improvement"

|

"warning"

|

"success";



export interface LearningExperience {


id:string;


agentId:string;


type:LearningExperienceType;


input:string;


output:string;


success:boolean;


createdAt:Date;


}



export interface IntelligenceFeedback {


id:string;


agentId:string;


experienceId:string;

feedbackId?:string;


score:number;


comment:string;
evaluationId?:string;


createdAt:Date;


}



export interface LearningFeedback {


id:string;


experienceId:string;

feedbackId?:string;


score:number;


comment:string;
evaluationId?:string;


createdAt:Date;


}



export interface LearningSignal {


id:string;


experienceId:string;

feedbackId?:string;


type:LearningSignalType;


strength:number;


message:string;


createdAt:Date;


}



export interface LearningContext {


experiences:LearningExperience[];


feedbacks:LearningFeedback[];


signals?:LearningSignal[];


createdAt:Date;


}



