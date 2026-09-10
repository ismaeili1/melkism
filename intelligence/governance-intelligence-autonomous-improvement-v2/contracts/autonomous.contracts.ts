
export interface GovernanceAutonomousImprovementInput {

id:string;

signals:string[];

memorySignals:string[];

decisionSignals:string[];

}



export interface GovernanceAutonomousImprovementRecord {

id:string;

autonomyScore:number;

confidence:number;

status:string;

createdAt:Date;

}


