/**
 * MELKISM Decision Autonomous Intelligence Recovery Validation
 * v38.20.14
 *
 * Decision validation boundary.
 */


export interface DecisionValidationRecord {


id: string;

decisionReference: string;

status:
    | "pending"
    | "validated"
    | "rejected";


createdAt: Date;

}



export class DecisionAutonomousIntelligenceRecoveryValidation {


private history:
DecisionValidationRecord[] = [];



createDecisionValidation(

id: string,

decisionReference: string,

status:
    | "pending"
    | "validated"
    | "rejected"

) {


const record:
DecisionValidationRecord = {


id,

decisionReference,

status,

createdAt: new Date()


};


this.history.push(record);


return record;


}



evaluateDecisionValidation(

id: string

) {


return this.history.find(

validation => validation.id === id

);


}



getDecisionValidationHistory() {

return this.history;

}


}
