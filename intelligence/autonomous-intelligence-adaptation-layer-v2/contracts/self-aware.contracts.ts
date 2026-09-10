
export interface SelfAwareIntelligenceIntelligenceAdaptationInput {

id:string;

awarenessContext:string;

learningContext:string;

adaptationContext:string;

objective:string;

}



export interface SelfAwareIntelligenceIntelligenceAdaptationRecord {

id:string;

awarenessScore:number;

adaptationScore:number;

evolutionScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


