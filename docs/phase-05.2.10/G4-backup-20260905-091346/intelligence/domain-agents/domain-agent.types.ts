export type RealEstateAgentDomain =

"market"

|

"property"

|

"investment"

|

"architecture"

|

"urban";



export type DomainAgentStatus =

"registered"

|

"active"

|

"learning"

|

"paused";



export interface DomainAgent {


id:string;


name:string;


domain:RealEstateAgentDomain;


status:DomainAgentStatus;


capabilities:string[];


createdAt:Date;


}



export interface DomainAgentRequest {


agentId:string;


domain:RealEstateAgentDomain;


input:unknown;


createdAt:Date;


}

