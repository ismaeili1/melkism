
export interface GovernanceAutonomousControlV2InputContract {

id:string;

controlId:string;

policies:string[];

rules:string[];

decisions:string[];

}



export interface GovernanceAutonomousControlV2RecordContract {

id:string;

controlId:string;

executionScore:number;

stabilityScore:number;

confidence:number;

status:string;

createdAt:Date;

}



export interface GovernanceAutonomousControlV2EvaluationContract {

recordId:string;

riskScore:number;

controlScore:number;

feedback:string;

}

