
export interface AutonomousGovernanceOptimizationCoreInput {

id:string;

signals:string[];

context:string;

}



export interface AutonomousGovernanceOptimizationCoreRecord {

id:string;

learningScore:number;

improvementScore:number;

optimizationScore:number;

evolutionScore:number;

confidence:number;

status:string;

createdAt:Date;

}


