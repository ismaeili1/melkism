
export interface AutonomousMetaMetaLearningInput {

id:string;

source:string;

objective:string;

operation:string;

}



export interface AutonomousMetaMetaLearningRecord {

id:string;

metaLearningScore:number;

evolutionScore:number;

capabilityScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


