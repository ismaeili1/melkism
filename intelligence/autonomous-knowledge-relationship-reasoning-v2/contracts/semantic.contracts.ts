
export interface AutonomousSemanticRelationshipReasoningInput {

id:string;

entity:string;

concept:string;

context:string;

domain:string;

}



export interface AutonomousSemanticRelationshipReasoningRecord {

id:string;

knowledgeScore:number;

semanticScore:number;

relationshipScore:number;

governanceScore:number;

confidence:number;

status:string;

createdAt:Date;

}


