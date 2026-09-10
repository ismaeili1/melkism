
export interface AGIAGIFoundationInput {

id:string;

metaContext:string;

cognitiveContext:string;

operationalContext:string;

networkContext:string;

objective:string;

}



export interface AGIAGIFoundationRecord {

id:string;

agiScore:number;

cognitiveScore:number;

operationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


