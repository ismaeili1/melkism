export type IntelligenceConnectorDomain =

"market"

|

"property"

|

"user";



export interface IntelligenceConnectorInput {


domain:IntelligenceConnectorDomain;


entityId:string;


label:string;


metadata?:Record<string,unknown>;


}



export interface IntelligenceConnectorResult {


nodeId:string;


domain:IntelligenceConnectorDomain;


createdAt:Date;


}

