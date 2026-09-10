export type UserCategory =

"high_engagement"

|

"active"

|

"passive"

|

"unknown";



export interface UserScoreInput {


userId:string;


behaviorScore:number;


preferenceScore:number;


activityScore:number;


engagementScore:number;


}



export interface UserScoreResult {


userId:string;


overallScore:number;


confidence:number;


category:UserCategory;


signals:string[];


createdAt:Date;


}

