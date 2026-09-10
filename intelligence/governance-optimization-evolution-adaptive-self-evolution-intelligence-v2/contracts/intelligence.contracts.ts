
export interface AdaptiveSelfEvolutionIntelligenceInput {

id:string;

learningState:string[];

improvementState:string[];

optimizationState:string[];

}


export interface AdaptiveSelfEvolutionIntelligenceRecord {

id:string;

intelligenceScore:number;

learningScore:number;

improvementScore:number;

optimizationScore:number;

confidence:number;

status:string;

createdAt:Date;

}

