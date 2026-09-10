
export interface CognitiveOSIntelligenceEcosystemInput {

id:string;

agiContext:string;

metaContext:string;

runtimeContext:string;

ecosystemContext:string;

objective:string;

}



export interface CognitiveOSIntelligenceEcosystemRecord {

id:string;

osScore:number;

runtimeScore:number;

ecosystemScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


