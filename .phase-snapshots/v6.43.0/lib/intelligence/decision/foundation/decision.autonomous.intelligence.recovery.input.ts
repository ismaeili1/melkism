/**
 * MELKISM Decision Autonomous Intelligence Recovery Input
 * v38.20.14
 *
 * Decision input foundation boundary.
 */


export interface DecisionInputRecord {


id: string;

reasoningReference: string;

context: string;

createdAt: Date;

}



export class DecisionAutonomousIntelligenceRecoveryInput {


private history:
DecisionInputRecord[] = [];



createDecisionInput(

id: string,

reasoningReference: string,

context: string

) {


const record:
DecisionInputRecord = {


id,

reasoningReference,

context,

createdAt: new Date()


};


this.history.push(record);


return record;


}



evaluateDecisionInput(

id: string

) {


return this.history.find(

input => input.id === id

);


}



getDecisionInputHistory() {

return this.history;

}


}
