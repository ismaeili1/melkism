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

experienceId?:string;

evaluationId?:string;

evaluation?:unknown;

signal?:string;

score:number;

comment?:string;

createdAt:Date;

}



export interface LearningFeedback {


id:string;


experienceId?:string;


score:number;


comment?:string;


createdAt:Date;


}



export interface LearningSignal {

id:string;

experienceId?:string;

feedbackId?:string;

type:LearningSignalType;

strength:number;

message?:string;

description?:string;

createdAt:Date;

}



export interface LearningContext {


experiences:LearningExperience[];


feedbacks:LearningFeedback[];


signals?:LearningSignal[];


createdAt:Date;


}













