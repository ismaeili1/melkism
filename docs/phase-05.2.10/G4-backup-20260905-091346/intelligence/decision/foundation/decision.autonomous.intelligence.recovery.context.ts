/**
 * MELKISM Decision Autonomous Intelligence Recovery Context
 * v38.20.14
 *
 * Decision context foundation boundary.
 */


export interface DecisionContextRecord {


id: string;

decisionUnitReference: string;

contextType: string;

contextData: string;

createdAt: Date;

}



export class DecisionAutonomousIntelligenceRecoveryContext {


private history:
DecisionContextRecord[] = [];



createDecisionContext(

id: string,

decisionUnitReference: string,

contextType: string,

contextData: string

) {


const record:
DecisionContextRecord = {


id,

decisionUnitReference,

contextType,

contextData,

createdAt: new Date()


};


this.history.push(record);


return record;


}



evaluateDecisionContext(

id: string

) {


return this.history.find(

context => context.id === id

);


}



getDecisionContextHistory() {

return this.history;

}


}
