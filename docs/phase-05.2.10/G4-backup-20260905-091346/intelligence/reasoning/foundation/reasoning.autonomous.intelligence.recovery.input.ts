/**
 * MELKISM Reasoning Autonomous Intelligence Recovery Input
 * v38.20.14
 *
 * Reasoning input foundation boundary.
 *
 * Captures reasoning contexts only.
 */


export interface ReasoningInputRecord {


id: string;

knowledgeReference: string;

context: string;

createdAt: Date;

}



export class ReasoningAutonomousIntelligenceRecoveryInput {


private history:
ReasoningInputRecord[] = [];



createReasoningInput(

id: string,

knowledgeReference: string,

context: string

) {


const record:
ReasoningInputRecord = {


id,

knowledgeReference,

context,

createdAt: new Date()


};


this.history.push(record);


return record;


}



evaluateReasoningInput(

id: string

) {


return this.history.find(

input => input.id === id

);


}



getReasoningInputHistory() {

return this.history;

}


}
