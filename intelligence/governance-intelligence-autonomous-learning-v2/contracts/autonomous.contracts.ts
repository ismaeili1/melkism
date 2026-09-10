
export interface GovernanceAutonomousLearningInput {

id:string;

signals:string[];

memorySignals:string[];

decisionSignals:string[];

}



export interface GovernanceAutonomousLearningRecord {

id:string;

autonomyScore:number;

confidence:number;

status:string;

createdAt:Date;

}


