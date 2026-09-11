export type InvestmentType =
 | "property-investment"
 | "development-project"
 | "rental-asset"
 | "commercial-asset"
 | "architectural-asset";


export interface InvestmentRecord {

id:string;

type:InvestmentType;

name:string;

value:number;

}


export interface RiskAssessment {

level:
"low" |
"medium" |
"high";

score:number;

}


export interface OpportunityScore {

investmentId:string;

score:number;

}


