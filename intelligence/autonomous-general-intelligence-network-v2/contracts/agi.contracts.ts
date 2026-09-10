
export interface AGIGeneralIntelligenceNetworkInput {

id:string;

metaContext:string;

cognitiveContext:string;

operationalContext:string;

networkContext:string;

objective:string;

}



export interface AGIGeneralIntelligenceNetworkRecord {

id:string;

agiScore:number;

cognitiveScore:number;

operationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


