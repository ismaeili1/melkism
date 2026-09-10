
export interface DomainIntelligenceInput {


id:string;


domain:string;


location:string;


entity:string;


context:string;


query:string;


}





export interface DomainIntelligenceRecord {


id:string;


realEstateScore:number;


architectureScore:number;


marketScore:number;


investmentScore:number;


decisionScore:number;


confidence:number;


status:string;


createdAt:Date;


}



