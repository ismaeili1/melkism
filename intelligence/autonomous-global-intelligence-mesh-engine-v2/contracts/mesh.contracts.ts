
export interface AutonomousMeshGlobalIntelligenceMeshInput {

id:string;

meshContext:string;

nodeContext:string;

knowledgeContext:string;

objective:string;

}



export interface AutonomousMeshGlobalIntelligenceMeshRecord {

id:string;

orchestrationScore:number;

meshScore:number;

knowledgeScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


