
export interface GovernanceAutonomousEvolutionInput {

id:string;

signals:string[];

memorySignals:string[];

decisionSignals:string[];

}



export interface GovernanceAutonomousEvolutionRecord {

id:string;

autonomyScore:number;

confidence:number;

status:string;

createdAt:Date;

}


