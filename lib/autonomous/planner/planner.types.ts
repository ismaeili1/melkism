export interface IntelligenceGoal {


id:string;


description:string;


priority:number;


createdAt:Date;


}



export interface IntelligencePlan {


id:string;


goal:IntelligenceGoal;


steps:string[];


createdAt:Date;


}

