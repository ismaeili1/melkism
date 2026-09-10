/**
 * MELKISM Decision Autonomous Intelligence Recovery Mapping
 * v38.20.14
 *
 * Decision intelligence mapping boundary.
 */


export interface DecisionMappingRecord {


id: string;

synthesisReference: string;

mappingType: string;

createdAt: Date;

}



export class DecisionAutonomousIntelligenceRecoveryMapping {


private history:
DecisionMappingRecord[] = [];



createDecisionMapping(

id: string,

synthesisReference: string,

mappingType: string

) {


const record:
DecisionMappingRecord = {


id,

synthesisReference,

mappingType,

createdAt: new Date()


};


this.history.push(record);


return record;


}



evaluateDecisionMapping(

id: string

) {


return this.history.find(

mapping => mapping.id === id

);


}



getDecisionMappingHistory() {

return this.history;

}


}
