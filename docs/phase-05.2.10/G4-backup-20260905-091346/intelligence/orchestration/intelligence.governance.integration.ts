/**
 * MELKISM Intelligence Governance Integration
 * v38.20.14
 */


export interface IntelligenceGovernanceRecord {


rule:string;

status:
"active"
|
"blocked";


createdAt:Date;

}



export class IntelligenceGovernanceIntegration {


private history:
IntelligenceGovernanceRecord[] = [];



createGovernanceRule(

rule:string

){


const record:
IntelligenceGovernanceRecord = {


rule,

status:"active",

createdAt:new Date()


};


this.history.push(record);


return record;


}



validateGovernanceRule(

rule:string

){


return this.history.find(

item =>
item.rule===rule

);


}



getGovernanceHistory(){


return this.history;


}


}
