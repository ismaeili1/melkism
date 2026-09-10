export type IntelligencePipelineStage =

"analysis"

|

"scoring"

|

"feedback"

|

"optimization";



export interface IntelligencePipelineEvent {


id:string;


domain:string;


entityId:string;


stage:IntelligencePipelineStage;


score:number;


createdAt:Date;


}



export interface IntelligencePipelineResult {


domain:string;


entityId:string;


completedStages:IntelligencePipelineStage[];


finalScore:number;


events:IntelligencePipelineEvent[];


createdAt:Date;


}

