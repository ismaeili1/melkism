export type GovernanceDecision =

"approve"

|

"review"

|

"reject";



export type GovernanceLevel =

"automatic"

|

"assisted"

|

"manual";



export interface IntelligenceGovernanceRecord {


id:string;


domain:string;


entityId:string;


decision:GovernanceDecision;


level:GovernanceLevel;


reason:string;


createdAt:Date;


}



export interface IntelligenceGovernanceResult {


entityId:string;


decision:GovernanceDecision;


level:GovernanceLevel;


record:IntelligenceGovernanceRecord;


createdAt:Date;


}

