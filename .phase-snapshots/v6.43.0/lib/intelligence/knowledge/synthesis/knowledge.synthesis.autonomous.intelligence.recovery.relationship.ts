/**
 * MELKISM Knowledge Synthesis Autonomous Intelligence Recovery Relationship
 * v38.20.14
 *
 * Knowledge relationship modeling boundary.
 *
 * Creates connections between knowledge units.
 */


export interface KnowledgeRelationshipRecord {


id: string;

sourceUnitId: string;

targetUnitId: string;

relationshipType: string;

createdAt: Date;

}



export class KnowledgeSynthesisAutonomousIntelligenceRecoveryRelationship {


private history:
KnowledgeRelationshipRecord[] = [];



createKnowledgeRelationship(

id: string,

sourceUnitId: string,

targetUnitId: string,

relationshipType: string

) {


const record:
KnowledgeRelationshipRecord = {


id,

sourceUnitId,

targetUnitId,

relationshipType,

createdAt: new Date()


};


this.history.push(record);


return record;


}



evaluateKnowledgeRelationship(

id: string

) {


return this.history.find(

relationship => relationship.id === id

);


}



getKnowledgeRelationshipHistory() {

return this.history;

}


}
