
export interface MetaIntelligenceMetaCognitionNetworkInput {

id:string;

fabricContext:string;

cognitiveContext:string;

orchestrationContext:string;

metaContext:string;

objective:string;

}



export interface MetaIntelligenceMetaCognitionNetworkRecord {

id:string;

metaScore:number;

orchestrationScore:number;

cognitionScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


