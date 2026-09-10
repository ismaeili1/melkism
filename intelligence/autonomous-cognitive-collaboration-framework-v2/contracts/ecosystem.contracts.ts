
export interface EcosystemCognitiveCollaborationInput {

id:string;

osContext:string;

agiContext:string;

networkContext:string;

collaborationContext:string;

objective:string;

}



export interface EcosystemCognitiveCollaborationRecord {

id:string;

ecosystemScore:number;

networkScore:number;

collaborationScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


