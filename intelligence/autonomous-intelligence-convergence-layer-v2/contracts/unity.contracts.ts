
export interface IntelligenceUnityIntelligenceConvergenceInput {

id:string;

unityContext:string;

cognitiveContext:string;

convergenceContext:string;

objective:string;

}



export interface IntelligenceUnityIntelligenceConvergenceRecord {

id:string;

unityScore:number;

convergenceScore:number;

singularityScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


