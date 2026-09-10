
export type IntelligenceLearningType =

"pattern"
|
"experience"
|
"improvement"
|
"adaptation"
|
"feedback";



export interface IntelligenceLearningRecord {


id:string;


agentId:string;


input:unknown;


output:unknown;


feedback:unknown;


score?:number;


type:IntelligenceLearningType;


createdAt:Date;


}

