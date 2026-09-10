export interface UserAnalysisInput {


userId:string;


data:Record<string,number>;


}



export interface UserAnalysisSummary {


userId:string;


behaviorScore:number;


preferenceScore:number;


activityScore:number;


engagementScore:number;


createdAt:Date;


}

