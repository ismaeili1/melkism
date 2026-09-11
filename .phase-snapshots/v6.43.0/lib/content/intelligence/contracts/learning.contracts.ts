export interface LearningExperience {

id:string;

agentId?:string;

context:string;

createdAt:Date;

}


export interface LearningFeedback {

id:string;

experienceId:string;

signal:string;

score:number;

comment?:string;

createdAt:Date;

}


export interface LearningPattern {

id:string;

agentId?:string;

pattern:string;

frequency:number;

successRate:number;

createdAt:Date;

}


export interface AdaptiveState {

id:string;

agentId?:string;

state:string;

updatedAt:Date;

}

