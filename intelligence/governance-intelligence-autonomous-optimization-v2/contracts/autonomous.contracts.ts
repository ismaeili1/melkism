
export interface GovernanceAutonomousOptimizationInput {

id:string;

signals:string[];

memorySignals:string[];

decisionSignals:string[];

}



export interface GovernanceAutonomousOptimizationRecord {

id:string;

autonomyScore:number;

confidence:number;

status:string;

createdAt:Date;

}


