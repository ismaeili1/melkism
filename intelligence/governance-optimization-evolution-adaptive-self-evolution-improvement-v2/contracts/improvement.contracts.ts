
export interface AdaptiveSelfEvolutionImprovementInput {

id:string;

learningStates:string[];

improvementSignals:string[];

}


export interface AdaptiveSelfEvolutionImprovementRecord {

id:string;

improvementScore:number;

enhancementScore:number;

confidence:number;

status:string;

createdAt:Date;

}

